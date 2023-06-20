import Head from "next/head";
import Main from "~/components/Atoms/Main";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Contactus from "~/components/sections/Contactus";
import tw from "twin.macro";

export default function Home({ cases, examples, ...rest }) {
  return (
    <>
      <Head>
        <title>PROMPT AI - Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header white {...rest} />
      <Main>
        <div tw="mt-28">
          <Contactus {...rest} />
        </div>
      </Main>
      <Footer {...rest} />
    </>
  );
}
