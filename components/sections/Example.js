import tw, { css } from "twin.macro";
import Container from "~/components/Atoms/Container";
import useTranslate from "~/hooks/useTranslate";
import { useEffect, useState } from "react";
import { marked } from "marked";
import Loading from "../Atoms/Loading";

const MarkdownWithVedioItem = ({ filename, locale, layout, ...rest }) => {
  const t = useTranslate();
  const [state, setState] = useState({ loading: false, html: "" });
  useEffect(() => {
    (async () => {
      setState({ loading: true, html: "" });
      const res = await fetch(`/docs/${filename}.md`);
      console.log(filename);
      const text = await res.text();
      setState({ loading: false, html: marked(text) });
    })();
  }, [filename]);
  return (
    <div
      css={css(
        tw`gap-2 p-2 border shadow-lg rounded-md`,
        layout === "horizontal"
          ? tw`grid grid-rows-2 grid-cols-1 lg:(grid-rows-1 grid-cols-3)`
          : tw`flex flex-col`
      )}
    >
      <div tw="col-span-2 rounded-md max-h-[48rem] bg-gray-50">
        {state.loading && <Loading tw="h-full">{t`loading`}</Loading>}
        {state.html && (
          <article
            dangerouslySetInnerHTML={{ __html: state.html }}
            tw="h-full overflow-auto p-4"
          />
        )}
      </div>
      <video
        muted
        controls
        autoPlay
        src={`/examples/${locale}/${filename}`}
        tw="w-full h-[48rem] object-fill shadow-2xl rounded-md shadow-gray-400 bg-gray-50"
        {...rest}
      />
    </div>
  );
};

export default function Example({ value = [], locale }) {
  const t = useTranslate();
  return (
    <Container tw="px-4 pb-10 space-y-4">
      <h2>{t`examples.page.title`}</h2>
      <p>
        {t`examples.page.subtitle`}
        <a
          tw="underline"
          target="_blank"
          href="https://app.promptai.us/libs"
          rel="noreferrer"
        >
          {t`examples.page.subtitle.link`}
        </a>
      </p>
      {value.map((e) => (
        <MarkdownWithVedioItem
          filename={e.filename}
          locale={locale}
          layout={e.pc ? "vertical" : "horizontal"}
          key={e.filename}
          t={t}
        />
      ))}
    </Container>
  );
}
