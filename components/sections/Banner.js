import "twin.macro";
import Link from "next/link";
import Container from "~/components/Atoms/Container";
import useTranslate from "~/hooks/useTranslate";
import Video from "../Atoms/Video";
import ParallaxLayers from "~/components/Atoms/ParallaxLayers";
export default function Banner({appOrigin, locale}) {
    const t = useTranslate();

    const layers = [
        {src: "/images/t1.png"},
        {src: "/images/t2.png","border":false},
    ];

    return (
        <section
            tw="bg-cover bg-no-repeat [background-position-y: bottom] pt-[4.5rem] -mt-[4.5rem] [margin-left: -1px]">
            <Container tw="flex flex-col p-5 pt-10 pb-10 text-center text-lg">
                <div tw="mb-8 h-screen">
                    <ParallaxLayers layers={layers} />
                </div>
                <div tw="flex-1 min-w-0 flex flex-col gap-2 px-5 pb-3">
                    <h2 tw="[font-weight: 500] whitespace-pre-wrap leading-snug text-5xl">
                        {t`banner.title`}
                    </h2>
                    <h2 tw="m-0">{t`banner.description`}</h2>
                    {locale === "zh" && <h2 tw="m-0">{t`banner.description.extends`}</h2>}
                    {locale === "en" && (
                        <h2 tw="m-0">
                            <Link
                                href="/en/pricing/on-cloud"
                                tw="text-black  text-orange-400"
                            >
                                on cloud
                            </Link>{" "}
                            or{" "}
                            <Link
                                href="/en/pricing/premises"
                                tw="text-black text-rose-400"
                            >
                                premises
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
