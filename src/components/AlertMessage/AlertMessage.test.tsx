import { AlertMessage } from "./AlertMessage";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("AlertMessage", () => {
  it("should render correct text for pageNotFound type defined", () => {
    render(<AlertMessage severity={"info"} type={"pageNotFound"} />);
    expect(screen.getByText("Sorry, page not found.")).toBeInTheDocument();
  });

  it("should render correct text for emptyData type defined", () => {
    render(<AlertMessage severity={"info"} type={"emptyData"} />);
    expect(
      screen.getByText("Sorry, there is no product matching your criteria.")
    ).toBeInTheDocument();
  });

  it("should render correct text when type was not defined", () => {
    render(<AlertMessage severity={"error"} />);
    expect(screen.getByText("Sorry, an error occurs")).toBeInTheDocument();
  });
});
