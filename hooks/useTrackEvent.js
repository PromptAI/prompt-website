import { useCallback, useMemo } from "react";

export default function useTrackEvent(category, action = "click") {
  return useCallback(
    (label, value = 1) => {
      window?._hmt?.push?.(["_trackEvent", category, action, label, value]);
    },
    [action, category]
  );
}
