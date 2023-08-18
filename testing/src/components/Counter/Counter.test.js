import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter.js";

//it('')
test("increase-btn", () => {
  render(<Counter></Counter>);

  const increaseBtn = screen.getByText("increase");

  const count = screen.getByText("0");

  userEvent.click(increaseBtn);
  setTimeout(() => {
    expect(count).toHaveTextContent("1");
  }, 1000);
});

test("decrease-btn", () => {
  render(<Counter></Counter>);

  const decreaseBtn = screen.getByText("decrease");

  const count = screen.getByText("0");

  userEvent.click(decreaseBtn);
  setTimeout(() => {
    expect(count).toHaveTextContent("-1");
  }, 1000);
});

// describe("Counter", () => {
//   let increaseBtn, decreaseBtn, count;


//BeforeEach her testten önce çalışır 
//BeforeAll sadece en başta bi kez çalışır
//AfterAll en sonda bir kez çalışır
//AfterEach her testten sonra çalışır
//   beforeEach(() => {
//     render(<Counter></Counter>);

//     increaseBtn = screen.getByText("increase");
//     decreaseBtn = screen.getByText("decrease");
//     count = screen.getByText("0");
//   });

//   test("increase-btn", () => {
//     userEvent.click(increaseBtn);

//       expect(count).toHaveTextContent("1");

//     test("decrease-btn", () => {
//       userEvent.click(decreaseBtn);

//         expect(count).toHaveTextContent("-1");

//     });
//   });
// });
