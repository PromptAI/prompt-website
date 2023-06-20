import Head from "next/head";
import Main from "~/components/Atoms/Main";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import MoreExample from "~/components/sections/Example";
import tw from "twin.macro";

export default function Home({ cases, examples, ...rest }) {
  return (
    <>
      <Head>
        <title>PROMPT AI - Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header white {...rest} />
      <Main>
        <MoreExample value={examples} {...rest} />
      </Main>
      <Footer {...rest} />
    </>
  );
}
