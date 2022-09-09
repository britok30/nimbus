import { render, screen } from "@testing-library/react";
import { DataTableRow } from "../DataTableRow";

const item = {
  name: "smss.exe",
  device: "Stark",
  path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
  status: "scheduled",
};

test("renders checkbox on page", () => {
  render(
    <table>
      <tbody>
        <DataTableRow item={item} index={0} checkedItems={[]} />
      </tbody>
    </table>
  );
  const checkboxElement = screen.getByRole("checkbox");
  expect(checkboxElement).toBeInTheDocument();
});

test("checkbox should not be checked", () => {
  render(
    <table>
      <tbody>
        <DataTableRow item={item} index={0} checkedItems={[]} />
      </tbody>
    </table>
  );
  const checkboxElement = screen.getByRole("checkbox");
  expect(checkboxElement.checked).toEqual(false);
});

test("checkbox should be checked", () => {
  render(
    <table>
      <tbody>
        <DataTableRow item={item} index={0} checkedItems={["smss.exe"]} />
      </tbody>
    </table>
  );
  const checkboxElement = screen.getByRole("checkbox");
  expect(checkboxElement.checked).toEqual(true);
});

test("There should be five cells in the row", () => {
  render(
    <table>
      <tbody>
        <DataTableRow item={item} index={0} checkedItems={[]} />
      </tbody>
    </table>
  );
  const cellElement = screen.getAllByRole("cell");
  expect(cellElement.length).toBe(5);
});

test("Row should match HTML", () => {
  render(
    <table>
      <tbody>
        <DataTableRow item={item} index={0} checkedItems={[]} />
      </tbody>
    </table>
  );
  const cellElement = screen.getAllByRole("cell");
  expect(cellElement[1].innerHTML).toEqual("smss.exe");
  expect(cellElement[2].innerHTML).toEqual("Stark");
  expect(cellElement[3].innerHTML).toEqual(
    "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe"
  );
  expect(cellElement[4].innerHTML).toEqual(
    '<div class="data-table-cell__status-circle" style="visibility: hidden;"></div>Scheduled'
  );
});
