import { milliseconds } from "./useCountdown";

test("Milliseconds interval should be 1000.", () => {
  expect(milliseconds).toBe(1000);
});
