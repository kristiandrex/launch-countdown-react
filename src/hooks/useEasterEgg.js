import { useCallback, useDebugValue, useState } from "react";
import { getStatus } from "util/countdown";

function useEasterEgg() {
  const [status, setStatus] = useState(getStatus);
  const updateStatus = useCallback(() => setStatus(getStatus), []);
  useDebugValue(status);

  return [status, updateStatus];
}

export default useEasterEgg;
