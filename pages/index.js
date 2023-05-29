// import { useEffect, useState } from "react";
import I18nProvider from "~/provider/i18nProvider";
import Home from "~/src/index";
import { getCases } from "~/loader/cases";
import { getExamples } from "~/loader/examples";

export const getStaticProps = async (context) => {
  const locale = process.env.APP_DEPLOY_LANG || "en";

  const appOrigin = process.env.APP_ORIGIN || "https://app.promptai.cn";
  const docOrigin = process.env.APP_DOC_ORIGIN || "https://doc.promptai.cn";
  const deployType = process.env.APP_DEPLOY_TYPE || "normal";
  const cases = await getCases();
  const examples = await getExamples(locale);
  return {
    props: {
      cases,
      examples,
      locale,
      appOrigin,
      docOrigin,
      deployType,
    },
  };
};

export default function DefaultHome({ cases, examples, ...rest }) {
  // const [locale, setLocale] = useState("en");

  // useEffect(() => {
  //   // const locale = "en";
  //   const locale = navigator.language.indexOf("en") > -1 ? "en" : "zh";
  //   setLocale(locale);
  // }, []);
  return (
    <I18nProvider locale={rest.locale}>
      <Home cases={cases} examples={examples} {...rest} />
    </I18nProvider>
  );
}
