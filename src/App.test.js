import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders table", () => {
  render(<App />);
  const tableElement = screen.getByRole("table");
  expect(tableElement).toBeInTheDocument();
});

test("There should be five data rows", () => {
  render(<App />);
  const rowElement = screen.getAllByTestId("data-table-row");
  expect(rowElement.length).toBe(5);
});

test("There should be one head row", () => {
  render(<App />);
  const rowElement = screen.getAllByTestId("head-table-row");
  expect(rowElement.length).toBe(1);
});
