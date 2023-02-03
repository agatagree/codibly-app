import { act } from "react-dom/test-utils";
import { Router } from "react-router-dom";
import { SearchField } from "./SearchField";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { isExportDeclaration } from "typescript";

const renderSearchField = () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <SearchField />
    </Router>
  );
  const input = screen.getByLabelText("Search by ID");
  return { input, history };
};

describe("SearchField", () => {
  it("should display search error when input value is not a number and clear it's value", () => {
    const { input } = renderSearchField();

    act(() => {
      fireEvent.change(input, { target: { value: "string" } });
    });
    expect(screen.getByText("It is not a number!")).toBeInTheDocument();
    expect(input.getAttribute("value")).toBe("");
  });

  it("should set the search param value and clear the error when the input is a number", () => {
    const { input, history } = renderSearchField();

    act(() => {
      fireEvent.change(input, { target: { value: "123" } });
    });

    const searchParams = new URLSearchParams(history.location.search);
    expect(searchParams.get("id")).toBe("123");
    expect(input.getAttribute("value")).toBe("");
  });
});
