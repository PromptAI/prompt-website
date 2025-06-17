import "twin.macro";
import Container from "~/components/Atoms/Container";
import useTranslate from "~/hooks/useTranslate";
import Link from "next/link";


export default function VersionLink({appOrigin, locale}) {
    const t = useTranslate();

    return (
        <section
            tw="bg-cover bg-no-repeat [background-position-y: bottom] [margin-left: -1px]">
            <Container tw="flex flex-col pb-10 text-center text-lg">
                <div tw="flex-1 min-w-0 flex flex-col gap-2 px-5 pb-3">
                    <Link
                        href="/v1"
                        tw="text-blue-500 text-xl hover:underline" // Changed text-lg to text-xl
                    >
                        <span>PromptDialog 1.0</span>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
