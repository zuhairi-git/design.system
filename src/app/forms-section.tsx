'use client';

import React, { useState } from 'react';
import { Combobox, Listbox, RadioGroup, Switch, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  CheckIcon,
  ChevronUpDownIcon,
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';
import CodeSnippet from '@/components/CodeSnippet';
import AnimatedSection from '@/components/AnimatedSection';

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
];

const plans = [
  { name: 'Startup', price: '$29', description: 'Perfect for small teams' },
  { name: 'Business', price: '$99', description: 'For growing companies' },
  { name: 'Enterprise', price: '$199', description: 'For large organizations' },
];

export default function FormsSection() {
  const [selectedPerson, setSelectedPerson] = useState<typeof people[0] | null>(people[0]);
  const [query, setQuery] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [enabled, setEnabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <AnimatedSection id="forms" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Form Components
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Comprehensive form controls built with Headless UI and Tailwind CSS, featuring validation, accessibility, and modern interactions.
          </p>
        </div>

        <div className="space-y-16">

          {/* Basic Form Elements */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Basic Form Elements
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Essential form inputs with validation states and proper accessibility.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`block w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                        errors.name
                          ? 'border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500 text-red-900 dark:text-red-100 placeholder-red-300'
                          : 'border-neutral-300 dark:border-neutral-600 focus:border-blue-500 focus:ring-blue-500 text-neutral-900 dark:text-white bg-white dark:bg-neutral-700'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <div className="mt-2 flex items-center text-sm text-red-600 dark:text-red-400">
                        <ExclamationCircleIcon className="h-4 w-4 mr-1" />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`block w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                        errors.email
                          ? 'border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500 text-red-900 dark:text-red-100 placeholder-red-300'
                          : 'border-neutral-300 dark:border-neutral-600 focus:border-blue-500 focus:ring-blue-500 text-neutral-900 dark:text-white bg-white dark:bg-neutral-700'
                      }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <div className="mt-2 flex items-center text-sm text-red-600 dark:text-red-400">
                        <ExclamationCircleIcon className="h-4 w-4 mr-1" />
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className={`block w-full rounded-lg border px-3 py-2 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                        errors.password
                          ? 'border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500 text-red-900 dark:text-red-100 placeholder-red-300'
                          : 'border-neutral-300 dark:border-neutral-600 focus:border-blue-500 focus:ring-blue-500 text-neutral-900 dark:text-white bg-white dark:bg-neutral-700'
                      }`}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5 text-neutral-400 hover:text-neutral-600" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-neutral-400 hover:text-neutral-600" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="mt-2 flex items-center text-sm text-red-600 dark:text-red-400">
                      <ExclamationCircleIcon className="h-4 w-4 mr-1" />
                      {errors.password}
                    </div>
                  )}
                </div>

                {/* Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="block w-full rounded-lg border border-neutral-300 dark:border-neutral-600 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-neutral-900 dark:text-white bg-white dark:bg-neutral-700 transition-colors"
                    placeholder="Enter your message..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    Submit Form
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ name: '', email: '', password: '', message: '' });
                      setErrors({});
                    }}
                    className="inline-flex justify-center rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>

            <CodeSnippet
              title="Form Input with Validation"
              code={`<div>
  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
    Email Address
  </label>
  <input
    type="email"
    id="email"
    className={\`block w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 \${
      errors.email
        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
        : 'border-neutral-300 focus:border-blue-500 focus:ring-blue-500'
    }\`}
    placeholder="Enter your email"
  />
  {errors.email && (
    <div className="mt-2 flex items-center text-sm text-red-600">
      <ExclamationCircleIcon className="h-4 w-4 mr-1" />
      {errors.email}
    </div>
  )}
</div>`}
            />
          </div>

          {/* Select Components */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Select Components
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Advanced select components with search, multi-select, and custom styling.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Combobox */}
              <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-6">
                <h4 className="text-lg font-medium text-neutral-900 dark:text-white mb-4">
                  Combobox with Search
                </h4>
                <Combobox value={selectedPerson} onChange={setSelectedPerson}>
                  <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white dark:bg-neutral-700 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">                      <Combobox.Input
                        className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-neutral-900 dark:text-white bg-white dark:bg-neutral-700 focus:ring-0"
                        displayValue={(person: { id: number; name: string } | null) => person?.name || ''}
                        onChange={(event) => setQuery(event.target.value)}
                      />
                      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-neutral-400"
                          aria-hidden="true"
                        />
                      </Combobox.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      afterLeave={() => setQuery('')}
                    >
                      <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-neutral-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                        {filteredPeople.length === 0 && query !== '' ? (
                          <div className="relative cursor-default select-none py-2 px-4 text-neutral-700 dark:text-neutral-300">
                            Nothing found.
                          </div>
                        ) : (
                          filteredPeople.map((person) => (
                            <Combobox.Option
                              key={person.id}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active ? 'bg-blue-600 text-white' : 'text-neutral-900 dark:text-white'
                                }`
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? 'font-medium' : 'font-normal'
                                    }`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                        active ? 'text-white' : 'text-blue-600'
                                      }`}
                                    >
                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Combobox.Option>
                          ))
                        )}
                      </Combobox.Options>
                    </Transition>
                  </div>
                </Combobox>
              </div>

              {/* Listbox */}
              <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-6">
                <h4 className="text-lg font-medium text-neutral-900 dark:text-white mb-4">
                  Select Plan
                </h4>
                <Listbox value={selectedPlan} onChange={setSelectedPlan}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white dark:bg-neutral-700 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      <span className="block truncate text-neutral-900 dark:text-white">
                        {selectedPlan.name} - {selectedPlan.price}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-neutral-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-neutral-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                        {plans.map((plan, planIdx) => (
                          <Listbox.Option
                            key={planIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active ? 'bg-amber-100 text-amber-900' : 'text-neutral-900 dark:text-white'
                              }`
                            }
                            value={plan}
                          >
                            {({ selected }) => (
                              <>
                                <div className="flex flex-col">
                                  <span
                                    className={`block truncate ${
                                      selected ? 'font-medium' : 'font-normal'
                                    }`}
                                  >
                                    {plan.name} - {plan.price}
                                  </span>
                                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                    {plan.description}
                                  </span>
                                </div>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>

            <CodeSnippet
              title="Combobox with Search"
              code={`<Combobox value={selected} onChange={setSelected}>
  <div className="relative mt-1">
    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
      <Combobox.Input
        className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
        displayValue={(person) => person.name}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </Combobox.Button>
    </div>
    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
      {filteredPeople.map((person) => (
        <Combobox.Option key={person.id} className={({ active }) => \`relative cursor-default select-none py-2 pl-10 pr-4 \${active ? 'bg-blue-600 text-white' : 'text-gray-900'}\`} value={person}>
          {({ selected, active }) => (
            <>
              <span className={\`block truncate \${selected ? 'font-medium' : 'font-normal'}\`}>
                {person.name}
              </span>
              {selected ? (
                <span className={\`absolute inset-y-0 left-0 flex items-center pl-3 \${active ? 'text-white' : 'text-blue-600'}\`}>
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              ) : null}
            </>
          )}
        </Combobox.Option>
      ))}
    </Combobox.Options>
  </div>
</Combobox>`}
            />
          </div>

          {/* Radio Groups and Switches */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Radio Groups & Switches
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Custom radio groups and toggle switches with smooth animations.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Radio Group */}
              <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-6">
                <h4 className="text-lg font-medium text-neutral-900 dark:text-white mb-4">
                  Select a Plan
                </h4>
                <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
                  <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                  <div className="space-y-2">
                    {plans.map((plan) => (
                      <RadioGroup.Option
                        key={plan.name}
                        value={plan}
                        className={({ active, checked }) =>
                          `${
                            active
                              ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                              : ''
                          }
                          ${
                            checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white dark:bg-neutral-700'
                          }
                            relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                        }
                      >
                        {({ checked }) => (
                          <>
                            <div className="flex w-full items-center justify-between">
                              <div className="flex items-center">
                                <div className="text-sm">
                                  <RadioGroup.Label
                                    as="p"
                                    className={`font-medium  ${
                                      checked ? 'text-white' : 'text-neutral-900 dark:text-white'
                                    }`}
                                  >
                                    {plan.name}
                                  </RadioGroup.Label>
                                  <RadioGroup.Description
                                    as="span"
                                    className={`inline ${
                                      checked ? 'text-sky-100' : 'text-neutral-500 dark:text-neutral-400'
                                    }`}
                                  >
                                    <span>{plan.description}</span>{' '}
                                    <span aria-hidden="true">&middot;</span> <span>{plan.price}</span>
                                  </RadioGroup.Description>
                                </div>
                              </div>
                              {checked && (
                                <div className="shrink-0 text-white">
                                  <CheckIcon className="h-6 w-6" />
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Switch */}
              <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-6">
                <h4 className="text-lg font-medium text-neutral-900 dark:text-white mb-4">
                  Notification Settings
                </h4>
                <div className="space-y-4">
                  <Switch.Group>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <Switch.Label as="span" className="text-sm font-medium text-neutral-900 dark:text-white">
                          Email Notifications
                        </Switch.Label>
                        <Switch.Description as="span" className="text-sm text-neutral-500 dark:text-neutral-400">
                          Receive email updates about your account.
                        </Switch.Description>
                      </div>
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                          enabled ? 'bg-blue-600' : 'bg-neutral-200 dark:bg-neutral-600'
                        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                      >
                        <span
                          className={`${
                            enabled ? 'translate-x-6' : 'translate-x-1'
                          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                        />
                      </Switch>
                    </div>
                  </Switch.Group>
                </div>
              </div>
            </div>

            <CodeSnippet
              title="Switch Component"
              code={`<Switch.Group>
  <div className="flex items-center justify-between">
    <div className="flex flex-col">
      <Switch.Label as="span" className="text-sm font-medium text-gray-900">
        Email Notifications
      </Switch.Label>
      <Switch.Description as="span" className="text-sm text-gray-500">
        Receive email updates about your account.
      </Switch.Description>
    </div>
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={\`\${enabled ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2\`}
    >
      <span
        className={\`\${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform\`}
      />
    </Switch>
  </div>
</Switch.Group>`}
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
