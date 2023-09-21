import "@testing-library/jest-dom";

import { render, fireEvent, screen } from "@testing-library/svelte";

import App from "./App.svelte";

test("shows proper heading when rendered", () => {
  render(App);
  const heading = screen.getByText("Vite + Svelte");
  expect(heading).toBeInTheDocument();
});

test("changes button text on click", async () => {
  render(App);
  const button = screen.getByRole("button");

  expect(button).toHaveTextContent("count is 0");

  await fireEvent.click(button);

  expect(button).toHaveTextContent("count is 1");
});
