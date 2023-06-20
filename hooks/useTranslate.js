import { useMemo } from "react";
import { useIntl } from "react-intl";

export default function useTranslate() {
  const { formatMessage } = useIntl();

  return useMemo(
    () =>
      (strings, ...rest) =>
        formatMessage({
          id:
            rest.reduce((acc, cur, i) => strings[i] + String(cur), "") +
            strings[rest.length],
        }),
    [formatMessage]
  );
}
