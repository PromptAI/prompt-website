import "twin.macro";
import Link from "next/link";
import Container from "~/components/Atoms/Container";
import useTranslate from "~/hooks/useTranslate";
import Video from "../Atoms/Video";

export default function Banner({docOrigin, appOrigin, locale}) {
    const t = useTranslate();

    return (
        <section
            tw="bg-cover bg-no-repeat [background-position-y: bottom] -mt-[4.5rem] [margin-left: -1px] pt-24">
            <Container tw="flex flex-col pb-10 text-center text-lg">
                <div tw="flex-1 min-w-0 flex flex-col gap-2 px-5 pb-3 mt-10">
                    <div tw="flex flex-row whitespace-pre-wrap leading-snug gap-4 justify-center items-center">
                        <h2 tw="[font-weight: 500] text-5xl">
                            {t`banner.title`}
                        </h2>

                        <Link
                            href="https://github.com/PromptAI/PromptAI"
                            target="_blank"
                            tw="inline-flex text-4xl items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-300"
                        >
                            <i className="fab fa-github"></i>
                            <span>GITHUB</span>
                        </Link>
                    </div>
                    <h2 tw="m-0">{t`banner.description`}</h2>
                    {locale === "zh" && (
                        // 基于 Mica 构建，支持云端和本地免费使用。
                        <>
                            <h2 tw="m-0 mt-2">
                                基于开源
                                <Link
                                    target={"_blank"}
                                    href="https://mica-labs.github.io/"
                                    tw="text-black  text-orange-400"
                                >
                                    {" "} Mica
                                </Link>{" "}
                                构建，支持
                                <Link
                                    href="/zh/studio/on-cloud/"
                                    tw="text-black  text-rose-400"
                                >
                                    {" "} 云端
                                </Link>{" "}
                                和
                                <Link
                                    href="/zh/studio/premises/"
                                    tw="text-black  text-green-400"
                                >
                                    {" "} 本地
                                </Link>{" "}免费使用。
                            </h2>
                            <h2>
                                <Link
                                    target={"_blank"}
                                    href="https://github.com/RasaHQ/rasa"
                                    tw="text-black  text-orange-400"
                                >
                                    RASA
                                </Link>{" "} Support By

                                <Link
                                    href="/v1"
                                    tw="text-black  text-blue-500"
                                >
                                    {" "} Prompt Dialog 1.0
                                </Link>{" "}

                            </h2>

                        </>
                    )}
                    {locale === "en" && (
                        <h2 tw="m-0 mt-2">
                            Built on open-source
                            <Link
                                target={"_blank"}
                                href="https://mica-labs.github.io/"
                                tw="text-black  text-orange-400"
                            >
                                {" "} Mica
                            </Link>{" "}
                            , free

                            <Link
                                href='/en/studio/on-cloud/'
                                tw="text-black  text-rose-400"
                            >
                                {" "} on cloud
                            </Link>{" "}
                            and
                            <Link
                                href='/en/studio/premises/'
                                tw="text-black  text-green-400"
                            >
                                {" "} on-prem.
                            </Link>{" "}
                        </h2>
                    )}
                </div>
            </Container>
        </section>
    );
}
