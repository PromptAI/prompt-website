import tw from "twin.macro";
import Image from "next/image";
import Container from "~/components/Atoms/Container";
import useTranslate from "~/hooks/useTranslate";
import Video from "../Atoms/Video";
import { FiArrowRight } from "react-icons/fi";

const Item = tw.li`m-5 [flex-basis: calc(100% - 120px)] flex flex-col justify-between gap-2`;

const VedioItem = ({ filename, locale, t }) => (
  <Item>
    {locale === "en" && (
      <div>
        <h4>{t`examples.${filename}.title`}</h4>
        <div>{t`examples.${filename}.description`}</div>
        <a
          href={t`examples.${filename}.link.src`}
          target="_blank"
          rel="noreferrer"
          tw="flex items-center gap-1 text-sm"
        >
          {t`examples.${filename}.link`}
          <FiArrowRight />
        </a>
      </div>
    )}
    <Video src={`/examples/${locale}/${filename}`} />
  </Item>
);

export default function Example({ value = [], locale }) {
  const t = useTranslate();
  return (
    <Container tw="flex flex-col justify-center items-center pb-10">
      <h2 tw="text-center mb-10" id="examples">{t`examples.title`}</h2>
      <ul tw="flex flex-col mx-10 sm:(flex-row mx-0)">
        {value
          .filter((v) => !v.pc)
          .map((e) => (
            <VedioItem
              filename={e.filename}
              locale={locale}
              key={e.filename}
              t={t}
            />
          ))}
      </ul>
      <ul tw="flex flex-col mx-10">
        {value
          .filter((v) => v.pc)
          .map((e) => (
            <VedioItem
              filename={e.filename}
              locale={locale}
              key={e.filename}
              t={t}
            />
          ))}
      </ul>
      {locale === "zh" && (
        <div tw="mt-10 text-center">
          <h4>{t`examples.scanQRCode`}</h4>
          <Image
            tw="inline"
            src="/more-example.png"
            width={200}
            height={200}
            alt="more examples"
          />
        </div>
      )}
    </Container>
  );
}
