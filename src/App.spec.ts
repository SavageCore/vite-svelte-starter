import '@testing-library/jest-dom';

import { render, fireEvent, screen } from '@testing-library/svelte';
import { vi } from 'vitest';

import App from './App.svelte';

const { mockIsLoading } = vi.hoisted(() => {
  let value = false;
  const subs = new Set<(v: boolean) => void>();
  return {
    mockIsLoading: {
      subscribe: (fn: (v: boolean) => void) => {
        fn(value);
        subs.add(fn);
        return () => subs.delete(fn);
      },
      set: (v: boolean) => {
        value = v;
        subs.forEach((fn) => fn(value));
      },
    },
  };
});

vi.mock('svelte-i18n', async (importOriginal) => {
  const actual = await importOriginal<typeof import('svelte-i18n')>();
  return {
    ...actual,
    isLoading: mockIsLoading,
  };
});

test('shows loading state when i18n is loading', () => {
  mockIsLoading.set(true);
  render(App);

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('shows proper heading when rendered', () => {
  mockIsLoading.set(false);
  render(App);

  // Expect h1 to have text content 'Svelte + TailwindCSS + TypeScript + Vite'
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Svelte + TailwindCSS + TypeScript + Vite',
  );
});

test('changes button text on click', async () => {
  mockIsLoading.set(false);
  render(App);
  const button = screen.getByRole('button');

  expect(button).toHaveTextContent('Count is 0');

  await fireEvent.click(button);

  expect(button).toHaveTextContent('Count is 1');
});
