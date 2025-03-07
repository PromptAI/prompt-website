import Head from "next/head";
import Main from "~/components/Atoms/Main";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import StudioSection from "~/components/sections/StudioSection";

export default function StudioPage(props) {
  return (
    <>
      <Head>
        <title>PROMPT AI - Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header white {...props} />
      <Main>
        <StudioSection {...props} />
      </Main>
      <Footer {...props} />
    </>
  );
}
