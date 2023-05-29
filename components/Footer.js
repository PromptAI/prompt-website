import tw, { css } from "twin.macro";
import Link from "next/link";
import { useIntl } from "react-intl";
import Container from "~/components/Atoms/Container";
import useTranslate from "~/hooks/useTranslate";
import useTrackEvent from "~/hooks/useTrackEvent";
import Image from "next/image";

const style = {
  footerNav: [
    tw`text-gray-400`,
    css`
      li:hover {
        ${tw`text-blue-500 underline`}
      }
    `,
  ],
};

export default function Footer({ appOrigin, docOrigin, deployType }) {
  const track = useTrackEvent("link statistics", "click");
  const t = useTranslate();
  const { locale } = useIntl();
  return (
    <footer tw="min-h-[15rem] bg-neutral-800 p-4">
      <Container tw="h-full flex flex-col px-4">
        <div tw="flex-1 min-h-0 flex justify-between items-stretch">
          <div tw="flex-col justify-between">
            <Link onMouseDown={() => track("home")} href="/">
              <h1 tw="text-3xl text-white [line-height:4.2rem]">
                {t`footer.title`}
              </h1>
            </Link>
            {locale === "zh" && (
              <div>
                <Image
                  tw="mb-5"
                  src={`${appOrigin}/api/blobs/group/qrcode?type=wechat`}
                  width="120"
                  height="120"
                  alt="wechat"
                ></Image>
              </div>
            )}
          </div>
          <div>
            <h2 tw="text-lg text-white [line-height:5rem]">
              {t`footer.subtitle`}
            </h2>
            <ul css={style.footerNav}>
              <li>
                <Link
                  target="_blank"
                  onMouseDown={() => track("document")}
                  href={
                    deployType === "normal"
                      ? `${docOrigin}/docs/${locale}/about/`
                      : `${docOrigin}/docs/about/`
                  }
                >
                  {t`nav.document`}
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  onMouseDown={() => track("example")}
                  href={
                    deployType === "normal"
                      ? `${docOrigin}/docs/${locale}/example/`
                      : `${docOrigin}/docs/example/`
                  }
                >
                  {t`nav.example`}
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  onMouseDown={() => track("study_rasa")}
                  href={
                    deployType === "normal"
                      ? `${docOrigin}/docs/${locale}/study_rasa/`
                      : `${docOrigin}/docs/study_rasa/`
                  }
                >
                  {t`nav.rasa`}
                </Link>
              </li>
              <li>
                <Link
                  onMouseDown={() => track("contactus")}
                  href="#contactus"
                >{t`nav.contactUs`}</Link>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div tw="my-5">
          <a
            href={deployType === "normal" ? "https://beian.miit.gov.cn/" : "#"}
            tw="text-gray-500 text-sm"
          >
            {t`footer.copyright`}
          </a>
        </div>
      </Container>
    </footer>
  );
}
