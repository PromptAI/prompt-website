import "twin.macro";
import Link from "next/link";
import Container from "~/components/Atoms/Container";
import useTranslate from "~/hooks/useTranslate";
import Video from "../Atoms/Video";
import ParallaxLayers from "~/components/Atoms/ParallaxLayers";


const layers = [
    {src: "/images/t2.png","border":false},
    {src: "/images/t1.png"},
];

export default function FloatLayer({appOrigin, locale}) {
    const t = useTranslate();

    return (
        <section
            tw="bg-cover bg-no-repeat [background-position-y: bottom] -mt-[4.5rem] [margin-left: -1px] ">
            <Container tw="flex flex-col pb-10 text-center text-lg">
                <div tw="mb-8 h-screen">
                    <ParallaxLayers layers={layers}/>
                </div>
            </Container>
        </section>
    );
}
