import "twin.macro";
import Link from "next/link";
import Container from "~/components/Atoms/Container";
import Button from "../Atoms/Button";
import useTranslate from "~/hooks/useTranslate";
import useTrackEvent from "~/hooks/useTrackEvent";
import Video from "../Atoms/Video";

export default function Banner({ appOrigin, locale }) {
  const track = useTrackEvent("link statistics", "click");

  const t = useTranslate();
  return (
    <section tw="bg-cover bg-no-repeat [background-position-y: bottom] pt-[4.5rem] -mt-[4.5rem] [margin-left: -1px]">
      <Container tw="flex flex-col p-5 pt-10 pb-28 text-center text-lg">
        <div tw="flex-1 min-w-0 flex flex-col gap-2 px-5 pb-3">
          <h2 tw="[font-weight: 500] whitespace-pre-wrap leading-snug">
            {t`banner.title`}
          </h2>
          <h2 tw="m-0">{t`banner.description`}</h2>
          <h2>{t`banner.description.extends`}</h2>
          <div>
            <Link
              onMouseDown={() => track("applying")}
              href={`${appOrigin}/login`}
            >
              <Button tw="mx-auto xl:mx-0 h-12 mt-8 w-52 text-2xl rounded">
                {t`nav.free2Use`}
              </Button>
            </Link>
          </div>
        </div>
        <Video
          src={`/examples/en/IT-Helpdesk-R1.mp4`}
          tw="mt-8 shadow-2xl rounded-md shadow-gray-400 p-2"
        />
      </Container>
    </section>
  );
}
