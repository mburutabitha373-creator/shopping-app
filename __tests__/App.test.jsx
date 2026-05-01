import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "../src/App";

test("renders shopping app", () => {
  render(<App />);
  expect(screen.getByText(/shopping app/i)).toBeInTheDocument();
});
