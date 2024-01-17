import I18nProvider from "~/provider/i18nProvider";
import PricingPage from "~/src/pricing";

export const getStaticPaths = () => {
  return {
    paths: [{ params: { locale: "zh" } }, { params: { locale: "en" } }],
    fallback: false,
  };
};

export const getStaticProps = async () => {
  const locale = process.env.APP_DEPLOY_LANG || "en";
  const appOrigin = process.env.APP_ORIGIN || "https://app.promptai.cn";
  const docOrigin = process.env.APP_DOC_ORIGIN || "https://doc.promptai.cn";
  const deployType = process.env.APP_DEPLOY_TYPE || "normal";
  return {
    props: {
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
      <PricingPage {...props} defaultActive="on-premises" />
    </I18nProvider>
  );
}