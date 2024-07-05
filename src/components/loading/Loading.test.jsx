import { render, screen } from "@testing-library/react";
import Loading, { LoadingError } from "./Loading";

describe("Loading component", () => {
  it("renders Loading component", () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });

  it("renders LoadingError component with message", () => {
    const message = "Test";
    render(<LoadingError message={message} />);
    expect(screen.getByText(message).textContent).toBe(message);
  });
});