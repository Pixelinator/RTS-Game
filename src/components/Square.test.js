import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Sqaure from "./Square";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders a button with or without a value", () => {
  act(() => {
    render(<Sqaure />, container);
  });
  expect(container.textContent).toBe("");

  act(() => {
    render(<Sqaure value="test" />, container);
  });
  expect(container.textContent).toBe("test");
});

it("changes value when clicked", () => {
  const onClick = jest.fn();
  act(() => {
    render(<Sqaure onClick={onClick} />, container);
  });

  const square = document.querySelector("[data-testid=square]");

  act(() => {
    square.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onClick).toHaveBeenCalledTimes(1);
});
