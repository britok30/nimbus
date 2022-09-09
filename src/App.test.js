import { fireEvent, render, screen } from "@testing-library/react";
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

test("Select all checkbox should be checked", () => {
  render(<App />);
  const checkboxElement = screen.getByTestId("select-all-checkbox");
  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();

  const dataRowCheckboxes = screen.getAllByTestId("data-table-row__checkbox");
  dataRowCheckboxes.forEach((checkbox) => expect(checkbox).toBeChecked());
});

test("All data row checkboxes should be checked", () => {
  render(<App />);
  const checkboxElement = screen.getByTestId("select-all-checkbox");
  fireEvent.click(checkboxElement);

  const dataRowCheckboxes = screen.getAllByTestId("data-table-row__checkbox");

  const checked = dataRowCheckboxes.map((checkbox) =>
    expect(checkbox).toBeChecked()
  );
  expect(checked.length).toBe(5);
});

test("All data row checkboxes should not be checked", () => {
  render(<App />);
  const checkboxElement = screen.getByTestId("select-all-checkbox");
  // Check and uncheck
  fireEvent.click(checkboxElement);
  fireEvent.click(checkboxElement);

  const dataRowCheckboxes = screen.getAllByTestId("data-table-row__checkbox");
  dataRowCheckboxes.forEach((checkbox) => expect(checkbox).not.toBeChecked());
});
