import Head from "next/head";
import Main from "~/components/Atoms/Main";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import PricingSection from "~/components/sections/PricingSection";

export default function PricingPage(props) {
  return (
    <>
      <Head>
        <title>PROMPT AI - Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header white {...props} />
      <Main>
        <PricingSection {...props} />
      </Main>
      <Footer {...props} />
    </>
  );
}
