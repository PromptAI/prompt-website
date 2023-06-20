import { useEffect } from "react";
import { IntlProvider } from "react-intl";
import en from "~/lang/en.json";
import zh from "~/lang/zh.json";

const messages = { en, zh };

export default function I18nProvider({ locale = 'en', children }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    const [current, ...rest] = Object.keys(messages).sort((a, b) =>
      [b].indexOf(locale)
    );
    document.body.classList.remove(...rest);
    document.body.classList.add(current);
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}
