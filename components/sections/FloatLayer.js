import "twin.macro";
import Container from "~/components/Atoms/Container";
import useTranslate from "~/hooks/useTranslate";
import ParallaxLayers from "~/components/Atoms/ParallaxLayers";


const layers = [
    {src: "/images/t2.png","border":false, position: { right: '20px' } },
    {src: "/images/t1.png","border":true},
];

export default function FloatLayer({appOrigin, locale}) {
    const t = useTranslate();

    return (
        <section
            tw="bg-cover bg-no-repeat [background-position-y: bottom] -mt-[4.5rem] pb-8 [margin-left: -1px]">
            <Container tw="flex flex-col pb-10 pt-10 text-center text-lg">
                <div tw="mb-8 h-screen flex flex-col">
                    <div tw={"[font-weight: 500] whitespace-pre-wrap leading-snug text-4xl mb-4"}>
                        <p>PromptDialog Studio</p>
                        <p>All-in-one design environment</p>
                    </div>
                    <div tw="flex-1 relative">
                        <ParallaxLayers layers={layers} />
                    </div>
                </div>
            </Container>
        </section>
    );
}
