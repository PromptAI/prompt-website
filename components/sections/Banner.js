import "twin.macro";
import Link from "next/link";
import Container from "~/components/Atoms/Container";
import useTranslate from "~/hooks/useTranslate";
import Video from "../Atoms/Video";

export default function Banner({appOrigin, locale}) {
    const t = useTranslate();

    return (
        <section
            tw="bg-cover bg-no-repeat [background-position-y: bottom] -mt-[4.5rem] [margin-left: -1px] pt-24">
            <Container tw="flex flex-col pb-10 text-center text-lg">
                <div tw="flex-1 min-w-0 flex flex-col gap-2 px-5 pb-3 mt-10">
                    <h2 tw="[font-weight: 500] whitespace-pre-wrap leading-snug text-5xl">
                        {t`banner.title`}
                    </h2>
                    <h2 tw="m-0">{t`banner.description`}</h2>
                    {locale === "zh" && <h2 tw="m-0">{t`banner.description.extends`}</h2>}
                    {locale === "en" && (
                        <h2 tw="m-0 mt-2">
                            Built on
                            <Link
                                target={"_blank"}
                                href="https://mica-labs.github.io/"
                                tw="text-black  text-orange-400"
                            >
                                {" "}  Mica
                            </Link>{" "}
                            , free

                            <Link
                                href="/en/product/on-cloud/"
                                tw="text-black  text-rose-400"
                            >
                                {" "}  on cloud
                            </Link>{" "}
                             and
                            <Link
                                href="/en/product/premises/"
                                tw="text-black  text-green-400"
                            >
                                {" "}   on-prem.
                            </Link>{" "}
                        </h2>
                    )}
                </div>
                {locale === "zh" && (
                    <div tw="w-3/4 mx-auto mt-8">
                        <Video
                            src={`/examples/en/IT-Helpdesk-R1.mp4`}
                            tw="shadow-2xl rounded-md shadow-gray-400 p-2"
                        />
                    </div>
                )}

                {/* Link to Prompt - AI templates */}
                {/*暂时去掉视频*/}
                {/*{locale === "en" && <CarouselVideios />}*/}
            </Container>
        </section>
    );
}
