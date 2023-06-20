import tw from "twin.macro";
import Image from "next/image";
import Container from "~/components/Atoms/Container";
import useTranslate from "~/hooks/useTranslate";
import Video from "../Atoms/Video";
import { FiArrowRight } from "react-icons/fi";

const Item = tw.li`m-5 [flex-basis: calc(100% - 120px)] flex flex-col justify-between gap-2`;

const VedioItem = ({ filename, locale, t, ...rest }) => (
  <Item>
    {locale === "en" && (
      <div tw="flex flex-col justify-between mb-4">
        <div>
          <h4 id={filename.split(".")[0]}>{t`examples.${filename}.title`}</h4>
          <div>{t`examples.${filename}.description`}</div>
        </div>
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
    <Video
      src={`/examples/${locale}/${filename}`}
      tw="shadow-2xl rounded-md shadow-gray-400"
      {...rest}
    />
  </Item>
);

export default function Example({ value = [], locale }) {
  const t = useTranslate();
  return (
    <Container tw="flex flex-col justify-center items-center pb-10">
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
      <ul tw="flex flex-col mx-10 md:flex-row">
        {value
          .filter((v) => !v.pc)
          .map((e) => (
            <VedioItem
              filename={e.filename}
              locale={locale}
              key={e.filename}
              t={t}
              border
              tw="h-[720px] w-full p-1 bg-white"
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
