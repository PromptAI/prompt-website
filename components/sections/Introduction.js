import tw from "twin.macro";
import Link from "next/link";
import { useIntl } from "react-intl";
import { useMemo } from "react";
import Container from "~/components/Atoms/Container";
import useTranslate from "~/hooks/useTranslate";
import Video from "../Atoms/Video";

import { FiArrowRight } from "react-icons/fi";

const Row = ({ reverse, children }) => (
  <Container
    css={[
      tw`flex flex-col p-5 pt-10 pb-14 text-center xl:text-left`,
      reverse ? tw`xl:flex-row-reverse` : tw`xl:flex-row`,
    ]}
  >
    {reverse}
    {children}
  </Container>
);

const TextColumn = ({ children }) => (
  <div tw="flex-1 p-5 min-w-0 flex flex-col items-center text-center xl:( text-left items-start )">
    {children}
  </div>
);

const VideoColumn = ({ children }) => (
  <div tw="flex-1 p-5 [align-self: stretch]">
    <div tw="mx-auto shadow-2xl rounded-md shadow-gray-400 p-2 max-w-[700px] xl:max-w-[auto] min-h-[230px] flex">
      {children}
    </div>
  </div>
);

const videos = {
  en: {
    conversation: "conversation.mov",
    form: "formv2.mp4",
    customizing: "debugv2.mp4",
    llm: "chatgptv2.mp4",
  },
  zh: {
    conversation: "conversation.mov",
    form: "form.mp4",
    customizing: "customizing.mov",
    llm: "llm.mov",
  },
};

export default function Banner({ docOrigin, deployType }) {
  const t = useTranslate();
  const { locale } = useIntl();
  const introductionParts = useMemo(
    () => [
      ["llm"],
      [
        "form",
        deployType === "normarl"
          ? `${docOrigin}/docs/${locale}/example/form/`
          : `${docOrigin}/docs/example/form/`,
      ],
      [
        "customizing",
        deployType === "normarl"
          ? `${docOrigin}/docs/${locale}/example/slot/`
          : `${docOrigin}/docs/overview/#step-4---train-and-run`,
      ],
    ],
    [deployType, docOrigin, locale]
  );
  return (
    <section>
      {introductionParts.map(([part, to], i) => (
        <Row key={part} reverse={i % 2 === 0}>
          <TextColumn>
            <h4 tw="text-gray-400">{t`introduction.part.${part}.subtitle`}</h4>
            <h2>{t`introduction.part.${part}.title`}</h2>
            <p>{t`introduction.part.${part}.description`}</p>
            {to && (
              <Link
                tw="hidden xl:flex items-center gap-2"
                target="_blank"
                href={to}
              >
                {t`introduction.part.${part}.link`}
                <FiArrowRight />
              </Link>
            )}
          </TextColumn>
          <VideoColumn>
            <div tw="w-full bg-gray-200 flex">
              <Video
                src={`/videos/${locale}/${videos[locale][part]}`}
                tw="w-full"
              />
            </div>
          </VideoColumn>
          {to && (
            <div tw="text-center">
              <Link
                tw="inline-flex xl:hidden items-center gap-2 my-10"
                href={to}
              >
                {t`introduction.part.${part}.link`}
                <FiArrowRight />
              </Link>
            </div>
          )}
        </Row>
      ))}
    </section>
  );
}
