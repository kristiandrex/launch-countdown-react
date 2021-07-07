import { useDebugValue, useEffect, useState } from "react";
import {
  formatSeconds,
  getHeading,
  getBirthdateDiff,
  getSeconds
} from "util/countdown";
import useEasterEgg from "./useEasterEgg";

export const milliseconds = 1000;

function useCountdown(initialCountdown) {
  const [status, updateStatus] = useEasterEgg();
  const [seconds, setSeconds] = useState(() => {
    if (status === "TODAY") {
      return 0;
    }

    if (status === "SOON") {
      return getBirthdateDiff();
    }

    return getSeconds(initialCountdown);
  });

  const heading = getHeading(status);
  const countdown = formatSeconds(seconds);
  useDebugValue(countdown);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((s) => s - 1);
      }

      updateStatus();
    }, milliseconds);

    return () => clearInterval(interval);
  }, [seconds, updateStatus]);

  return { countdown, heading };
}

export default useCountdown;
