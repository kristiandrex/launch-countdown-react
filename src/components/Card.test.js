import { animationDuration, getNextNumber } from "./Card";

test("Animation duration should be 1000ms.", () => {
  expect(animationDuration).toBe(1000);
});

test("Next number should be one less.", () => {
  const expected = getNextNumber(1);
  expect(expected).toBe(0);
});

test("Number next to 0 should be 59.", () => {
  const expected = getNextNumber(0);
  expect(expected).toBe(59);
});
