import tw, { css } from "twin.macro";
import Link from "next/link";
import Container from "~/components/Atoms/Container";
import useTranslate from "~/hooks/useTranslate";
import useTrackEvent from "~/hooks/useTrackEvent";
import Image from "next/image";

const style = {
  footerNav: [
    tw`text-gray-400 mt-8`,
    css`
      li:hover {
        ${tw`text-blue-500 underline`}
      }
    `,
  ],
};
export default function Footer({ appOrigin, docOrigin, deployType, locale }) {
  const track = useTrackEvent("link statistics", "click");
  const t = useTranslate();
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
            <h2 tw="text-lg text-white mb-0">{t`footer.subtitle`}</h2>
            <Link
              tw="px-0.5"
              href={`mailto:${
                locale === "zh" ? "info@promptai.cn" : "info@promptai.us"
              }`}
            >
              {locale === "zh" ? "info@promptai.cn" : "info@promptai.us"}
            </Link>
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
                  onMouseDown={() => track("study_example")}
                  href="/#IT-Helpdesk-R1"
                >
                  {t`nav.example`}
                </Link>
              </li>
              {locale == "en" && (
                <>
                  <li>
                    <Link
                      target="_blank"
                      onMouseDown={() => track("privacie")}
                      href="https://www.promptai.us/privacy.html"
                    >
                      {t`nav.privacy`}
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      onMouseDown={() => track("privacie")}
                      href="/term.html"
                    >
                      {t`nav.term`}
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link
                  onMouseDown={() => track("contactus")}
                  href={`/${locale}/contact`}
                >{t`nav.contactUs`}</Link>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div tw="my-5 space-x-4">
          <a
            href={deployType === "normal" ? "https://beian.miit.gov.cn/" : "#"}
            tw="text-gray-500 text-sm"
          >
            {t`footer.copyright.prefix`}
            {new Date().getFullYear()}
            {t`footer.copyright.subfix`}
          </a>
          {locale === "zh" && (
            <a
              target="_blank"
              href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
              rel="noreferrer"
              tw="text-gray-500 text-sm"
            >
              <Image
                alt="备案号"
                src="/an.png"
                width={14}
                height={14}
                tw="inline-block mr-1"
              />
              浙ICP备2022024214号
            </a>
          )}
        </div>
      </Container>
    </footer>
  );
}
