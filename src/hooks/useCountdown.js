import { useDebugValue, useEffect, useState } from "react";
import { formatSeconds, getSeconds } from "util/countdown";

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
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return countdown;
}

export default useCountdown;
