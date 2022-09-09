import { render, screen } from "@testing-library/react";
import { HeadTableRow } from "../HeadTableRow";

test("renders table head cells on page", () => {
  render(
    <table>
      <thead>
        <HeadTableRow />
      </thead>
    </table>
  );
  const headNameCellElement = screen.getByText(/Name/i);
  expect(headNameCellElement).toBeInTheDocument();

  const headDeviceCellElement = screen.getByText(/Device/i);
  expect(headDeviceCellElement).toBeInTheDocument();

  const headPathCellElement = screen.getByText(/Path/i);
  expect(headPathCellElement).toBeInTheDocument();

  const headStatusCellElement = screen.getByText(/Status/i);
  expect(headStatusCellElement).toBeInTheDocument();
});
