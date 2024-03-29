import Head from "next/head";
import Main from "~/components/Atoms/Main";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Banner from "~/components/sections/Banner";
import Case from "~/components/sections/Case";
import Introduction from "~/components/sections/Introduction";
import Feature from "~/components/sections/Feature";
import useTranslate from "~/hooks/useTranslate";

export default function Home({ cases, examples, ...rest }) {
  const t = useTranslate();
  return (
    <>
      <Head>
        <title>{t`title`}</title>
        <meta
          name="description"
          content={
            t`banner.title` +
            "\n" +
            t`banner.description` +
            "\n" +
            t`banner.description.extends`
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header {...rest} />
      <Main>
        <Banner {...rest} />
        {rest.deployType === "normal" && <Case value={cases} />}
        <Introduction {...rest} />
        <Feature />
      </Main>
      <Footer {...rest} />
    </>
  );
}
