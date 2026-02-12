import '@testing-library/jest-dom';

import { render, fireEvent, screen } from '@testing-library/svelte';

import App from './App.svelte';

test('shows proper heading when rendered', () => {
  render(App);

  // Expect h1 to have text content 'Svelte + TailwindCSS + TypeScript + Vite'
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Svelte + TailwindCSS + TypeScript + Vite',
  );
});

test('changes button text on click', async () => {
  render(App);
  const button = screen.getByRole('button');

  expect(button).toHaveTextContent('Count is 0');

  await fireEvent.click(button);

  expect(button).toHaveTextContent('Count is 1');
});
