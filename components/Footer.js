import tw, {css} from "twin.macro";
import Link from "next/link";
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
export default function Footer({appOrigin, docOrigin, deployType, locale}) {
    const track = useTrackEvent("link statistics", "click");
    const t = useTranslate();
    return (
        <footer tw="min-h-[8rem] bg-neutral-800 py-4">
            <Container tw="flex flex-col px-4">
                <div tw="flex justify-between items-start flex-wrap gap-4">
                    <div tw="flex-col justify-between">
                        <Link onMouseDown={() => track("home")} href="/">
                              <span tw="text-3xl text-white [line-height:4.2rem]">
                                {t`footer.title`}
                              </span>
                        </Link>
                        <div tw="pb-0 mb-0">
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
                        {locale === "zh" && (
                            <div>
                                <Image
                                    tw="mb-2"
                                    src={`${appOrigin}/api/blobs/group/qrcode?type=wechat`}
                                    width="120"
                                    height="120"
                                    alt="wechat"
                                ></Image>
                            </div>
                        )}
                    </div>
                    <div tw="flex flex-row gap-4">
                        <div>
                            <div tw="flex flex-row gap-20">
                                <div>
                                    <p tw="text-lg text-white mb-0">{t`footer.subtitle`}</p>
                                    <Link
                                        tw="px-0.5"
                                        href={`mailto:${
                                            locale === "zh" ? "info@promptai.cn" : "info@promptai.us"
                                        }`}
                                    >
                                        {locale === "zh" ? "info@promptai.cn" : "info@promptai.us"}
                                    </Link>
                                </div>
                                <ul css={style.footerNav} tw="mt-2">
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
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
