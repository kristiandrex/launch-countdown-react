import { useDebugValue, useEffect, useState } from "react";
import { formatSeconds, getSeconds } from "util/countdown";

export const milliseconds = 1000;

function useCountdown(initialCountdown) {
  const [seconds, setSeconds] = useState(getSeconds(initialCountdown));
  const countdown = formatSeconds(seconds);
  useDebugValue(countdown);

  useEffect(() => {
    if (seconds === 0) {
      return;
    }

    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, milliseconds);

    return () => clearInterval(interval);
  }, [seconds]);

  return countdown;
}

export default useCountdown;
