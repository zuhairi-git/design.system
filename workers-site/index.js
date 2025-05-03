import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

/**
 * The DEBUG flag will do two things:
 * 1. we will skip caching on the edge, which makes it easier to debug
 * 2. we will return an error message on exception in your Response
 */
const DEBUG = false;

/**
 * Handle incoming requests to your application
 */
addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event));
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      );
    }
    event.respondWith(new Response('Internal Error', { status: 500 }));
  }
});

/**
 * Handle requests for static assets or SSR
 */
async function handleEvent(event) {
  const url = new URL(event.request.url);
  let options = {};

  try {
    // Try to serve static assets from KV
    return await getAssetFromKV(event, options);
  } catch (e) {
    // If there's no static asset, serve the index page for client-side routing
    // to handle and render the appropriate page
    try {
      options = {
        mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/index.html`, req),
      };
      return await getAssetFromKV(event, options);
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  }
}
