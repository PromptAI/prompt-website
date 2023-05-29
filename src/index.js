import Head from "next/head";
import Main from "~/components/Atoms/Main";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Banner from "~/components/sections/Banner";
import Case from "~/components/sections/Case";
import Introduction from "~/components/sections/Introduction";
import Feature from "~/components/sections/Feature";
import MoreExample from "~/components/sections/Example";
import Contactus from "~/components/sections/Contactus";

export default function Home({ cases, examples, ...rest }) {
  return (
    <>
      <Head>
        <title>PROMPT AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header {...rest} />
      <Main>
        <Banner {...rest} />
        {rest.deployType === "normal" && <Case value={cases} />}
        <Introduction {...rest} />
        <MoreExample value={examples} {...rest} />
        <Feature />
        <Contactus {...rest} />
      </Main>
      <Footer {...rest} />
    </>
  );
}
