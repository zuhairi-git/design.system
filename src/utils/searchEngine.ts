/**
 * Enhanced search and filter utilities for the sidebar
 */

export interface SearchableItem {
  id: string;
  label: string;
  description?: string;
  tags?: string[];
  href?: string;
  children?: SearchableItem[];
}

export class SearchEngine {
  private items: SearchableItem[];
  private flatItems: SearchableItem[];

  constructor(items: SearchableItem[]) {
    this.items = items;
    this.flatItems = this.flattenItems(items);
  }

  private flattenItems(items: SearchableItem[]): SearchableItem[] {
    return items.reduce((acc, item) => {
      acc.push(item);
      if (item.children) {
        acc.push(...this.flattenItems(item.children));
      }
      return acc;
    }, [] as SearchableItem[]);
  }

  search(query: string): SearchableItem[] {
    if (!query.trim()) {
      return this.items;
    }

    const normalizedQuery = query.toLowerCase().trim();
    const words = normalizedQuery.split(/\s+/);

    // Score-based search
    const scored = this.flatItems
      .map(item => ({
        item,
        score: this.calculateScore(item, words, normalizedQuery)
      }))
      .filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score);

    // Group results by parent
    const grouped = this.groupSearchResults(scored.map(r => r.item));
    
    return grouped;
  }

  private calculateScore(item: SearchableItem, words: string[], fullQuery: string): number {
    const searchableText = [
      item.label,
      item.description || '',
      ...(item.tags || [])
    ].join(' ').toLowerCase();

    let score = 0;

    // Exact label match gets highest score
    if (item.label.toLowerCase() === fullQuery) {
      score += 100;
    }

    // Label starts with query
    if (item.label.toLowerCase().startsWith(fullQuery)) {
      score += 80;
    }

    // Label contains query
    if (item.label.toLowerCase().includes(fullQuery)) {
      score += 60;
    }

    // Description contains query
    if (item.description?.toLowerCase().includes(fullQuery)) {
      score += 40;
    }

    // Tags contain query
    if (item.tags?.some(tag => tag.toLowerCase().includes(fullQuery))) {
      score += 50;
    }

    // Each word match
    words.forEach(word => {
      if (searchableText.includes(word)) {
        score += 20;
      }
    });

    // Boost items with href (actual navigation targets)
    if (item.href) {
      score += 10;
    }

    return score;
  }

  private groupSearchResults(results: SearchableItem[]): SearchableItem[] {
    const grouped = new Map<string, SearchableItem[]>();
    const topLevel: SearchableItem[] = [];

    results.forEach(item => {
      const parent = this.items.find(nav => 
        nav.children?.some(child => child.id === item.id)
      );
      
      if (parent && item.href) {
        if (!grouped.has(parent.id)) {
          grouped.set(parent.id, []);
        }
        grouped.get(parent.id)!.push(item);
      } else if (item.href || item.children) {
        if (!topLevel.find(existing => existing.id === item.id)) {
          topLevel.push(item);
        }
      }
    });

    // Create filtered navigation structure
    const result: SearchableItem[] = [...topLevel];
    grouped.forEach((children, parentId) => {
      const parent = this.items.find(nav => nav.id === parentId);
      if (parent && !result.find(item => item.id === parentId)) {
        result.push({
          ...parent,
          children: children
        });
      }
    });

    return result;
  }

  getRecentSearches(): string[] {
    const stored = localStorage.getItem('sidebar-recent-searches');
    return stored ? JSON.parse(stored) : [];
  }

  addRecentSearch(query: string): void {
    if (!query.trim()) return;
    
    const recent = this.getRecentSearches();
    const updated = [query, ...recent.filter(q => q !== query)].slice(0, 5);
    localStorage.setItem('sidebar-recent-searches', JSON.stringify(updated));
  }

  clearRecentSearches(): void {
    localStorage.removeItem('sidebar-recent-searches');
  }
}

export const createSearchEngine = (items: SearchableItem[]) => {
  return new SearchEngine(items);
};
