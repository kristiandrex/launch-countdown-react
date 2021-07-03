import { timeoutDuration, getNextNumber } from "./Card";

test("Timeout duration should be 500ms.", () => {
  expect(timeoutDuration).toEqual(500);
});

test("Next number should be one less.", () => {
  const expected = getNextNumber(1);
  expect(expected).toEqual(0);
});

test("Number next to 0 should be 59.", () => {
  const expected = getNextNumber(0);
  expect(expected).toEqual(59);
});
