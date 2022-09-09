import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../Header";

test("renders checkbox on page", () => {
  render(<Header checkedItems={["smss.exe"]} />);
  const checkboxElement = screen.getByRole("checkbox");
  expect(checkboxElement).toBeInTheDocument();
});

test("Should say `Selected 1`", () => {
  render(<Header checkedItems={["smss.exe"]} />);
  const spanElement = screen.getByText(/Selected 1/i);
  expect(spanElement).toBeInTheDocument();
});

test("Should say `Selected 2`", () => {
  render(<Header checkedItems={["smss.exe", "netsh.exe"]} />);
  const spanElement = screen.getByText(/Selected 2/i);
  expect(spanElement).toBeInTheDocument();
});

test("Should say `Selected 3`", () => {
  render(<Header checkedItems={["smss.exe", "netsh.exe", "uxtheme.dll"]} />);
  const spanElement = screen.getByText(/Selected 3/i);
  expect(spanElement).toBeInTheDocument();
});

test("Should say `None Selected`", () => {
  render(<Header checkedItems={[]} />);
  const spanElement = screen.getByText(/None Selected/i);
  expect(spanElement).toBeInTheDocument();
});

test("Renders download button", () => {
  render(<Header checkedItems={[]} />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("Download button triggers alert on click", () => {
  render(
    <Header
      data={[
        {
          name: "smss.exe",
          device: "Stark",
          path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
          status: "scheduled",
        },
      ]}
      checkedItems={["smss.exe"]}
    />
  );
  const alertMock = jest.spyOn(window, "alert").mockImplementation();
  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);
  expect(alertMock).toHaveBeenCalledTimes(1);
});
