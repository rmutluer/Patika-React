import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import fireEvent from "@testing-library/user-event";

import Todo from "./index";

describe("Todo-test", () => {
  let button, input;

  beforeEach(() => {
    render(<Todo></Todo>);
    button = screen.getByText("Ekle");
    // input = screen.getByRole('textbox');
    input = screen.getByLabelText("Text");
  });

  test("defaultItems dizisi gelmeli", () => {
    const items = screen.getAllByText(/item/i);
    // expect(items.length).toBe(3)
    expect(items.length).toEqual(3);
  });

  test("input ve buton dokumanda olmalı", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("inputa  girilen string listeye eklenmeli", () => {
    const name = "Resul";

    userEvent.type(input, name);

    userEvent.click(button);
    //fireEvent.click(button);   bununla da async olarak çalışılabilir

    //expect(screen.getByText(name)).toBeInTheDocument();
    setTimeout(() => {
      expect(screen.getByText(name)).toBeInTheDocument();
    }, 5000);
  });
});
