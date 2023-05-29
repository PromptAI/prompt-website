import I18nProvider from "~/provider/i18nProvider";
import Home from "~/src/index";
import { getCases } from "~/loader/cases";
import { getExamples } from "~/loader/examples";

export const getStaticPaths = () => {
  return {
    paths: [{ params: { locale: "zh" } }, { params: { locale: "en" } }],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const locale = process.env.APP_DEPLOY_LANG || "en";
  const cases = await getCases();
  const examples = await getExamples(locale);

  const appOrigin = process.env.APP_ORIGIN || "https://app.promptai.cn";
  const docOrigin = process.env.APP_DOC_ORIGIN || "https://doc.promptai.cn";
  const deployType = process.env.APP_DEPLOY_TYPE || "normal";
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

export default function LocaleHome(props) {
  return (
    <I18nProvider locale={props.locale}>
      <Home {...props} />
    </I18nProvider>
  );
}
