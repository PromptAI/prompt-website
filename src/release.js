import Head from "next/head";
import Main from "~/components/Atoms/Main";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import useTranslate from "~/hooks/useTranslate";

export default function Logs({ locale, appOrigin, deployType, docOrigin }) {
  const [elements, setElemets] = useState([]);
  const t = useTranslate();
  useEffect(() => {
    window.createLogs = (data) => {
      const values = data.map(({ release, time, logs }) => ({
        release,
        time,
        logs: logs[locale] || [],
      }));
      setElemets(values);
    };
    const script = document.createElement("script");
    script.src = `${appOrigin}/logs.js`;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, [locale, appOrigin]);
  return (
    <>
      <Head>
        <title>PROMPT AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        white
        appOrigin={appOrigin}
        deployType={deployType}
        docOrigin={docOrigin}
      />
      <Main>
        <div tw="py-4 px-6 mx-auto md:w-3/4 xl:w-1/2">
          {elements.map(({ release, time, logs }, i) => (
            <div tw="px-6 py-6 rounded-sm border mt-4" key={release}>
              <div tw="flex items-center justify-between">
                <h1 tw="text-2xl m-0 leading-none">
                  {release}&nbsp;
                  {i === 0 && (
                    <span tw="text-white text-sm bg-green-400 rounded inline-block px-2">
                      latest
                    </span>
                  )}
                </h1>
                <time>{time}</time>
              </div>
              {logs.map(({ title, description, link }, index) => (
                <div
                  key={title}
                  tw="w-full mx-auto mt-4 py-1 px-6 rounded-sm border-b"
                >
                  <h2 tw="text-xl">
                    {index + 1}. {title}
                  </h2>
                  <p>{description}</p>
                  {link && (
                    <p tw="flex items-center gap-2 text-sm">
                      <span tw="font-light text-sm">{t`release.detail`}</span>
                      <a
                        tw="inline-block truncate flex-1 cursor-pointer"
                        target="_blank"
                        href={link}
                        rel="noreferrer"
                      >
                        {link}
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Main>
      <Footer
        appOrigin={appOrigin}
        deployType={deployType}
        docOrigin={docOrigin}
      />
    </>
  );
}
