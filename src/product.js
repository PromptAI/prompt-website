import Head from "next/head";
import Main from "~/components/Atoms/Main";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import ProductSection from "~/components/sections/ProductSection";

export default function ProductPage(props) {
  return (
    <>
      <Head>
        <title>PROMPT AI - Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header white {...props} />
      <Main>
        <ProductSection {...props} />
      </Main>
      <Footer {...props} />
    </>
  );
}
