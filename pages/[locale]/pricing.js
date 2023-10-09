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
  return {
    props: {
      locale,
    },
  };
};

export default function LocaleHome(props) {
  return (
    <I18nProvider locale={props.locale}>
      <PricingPage {...props} />
    </I18nProvider>
  );
}
