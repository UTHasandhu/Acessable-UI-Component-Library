// import { render, screen, fireEvent, within } from "@testing-library/react";
// import Sidebar from "./Sidebar";

// test("clicking an item calls onSelect with that item's key", () => {
//   const handleSelect = vi.fn();
//   const list = ["A", "B", "C"];
//   render(<Sidebar onSelect={handleSelect} selected={null} components={list} />);

//   const sidebar = screen.getByTestId("sidebar");
//   const buttons = within(sidebar).getAllByRole("menuitem");
//   fireEvent.click(buttons[0]);

//   expect(handleSelect).toHaveBeenCalledWith("A");
// });

// test("selected item exposes aria-current", () => {
//   const list = ["A", "B", "C"];
//   render(<Sidebar onSelect={() => {}} selected={"B"} components={list} />);

//   const sidebar = screen.getByTestId("sidebar");
//   const buttons = within(sidebar).getAllByRole("menuitem");
//   expect(buttons[1]).toHaveAttribute("aria-current", "page");
//   expect(buttons[0]).not.toHaveAttribute("aria-current");
// });
