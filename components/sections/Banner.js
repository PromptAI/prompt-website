import "twin.macro";
import Link from "next/link";
import Container from "~/components/Atoms/Container";
import Button from "../Atoms/Button";
import useTranslate from "~/hooks/useTranslate";
import useTrackEvent from "~/hooks/useTrackEvent";
import { FiArrowRight } from "react-icons/fi";

export default function Banner({ appOrigin }) {
  const track = useTrackEvent("link statistics", "click");

  const t = useTranslate();
  return (
    <section tw="bg-[url('/images/banner.svg')] bg-cover bg-no-repeat [background-position-y: bottom] pt-[4.5rem] -mt-[4.5rem] [margin-left: -1px] text-white">
      <Container tw="flex flex-col xl:flex-row p-5 pt-10 pb-28 text-center xl:text-left">
        <div tw="flex-1 min-w-0 flex flex-col justify-items-stretch gap-2 px-5 pb-3">
          <h1 tw="[font-weight: 500] whitespace-pre-wrap text-white">
            {t`banner.title`}
          </h1>
          <p>{t`banner.description`}</p>
          <p>{t`banner.description.extends`}</p>
          <div>
            <Link
              onMouseDown={() => track("applying")}
              href={`${appOrigin}/register`}
            >
              <Button tw="mx-auto xl:mx-0 h-12 mt-8 w-52 text-2xl">
                {t`nav.free2Use`}
              </Button>
            </Link>
            <div>
              <Link
                tw="inline-flex items-center gap-2 my-2"
                target="_blank"
                href="https://github.com/PromptAI/homepage"
              >
                {t`examples.title`}
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div tw="flex-1 p-5 py-6 [align-self: stretch] flex items-center">
          <div tw="flex-1 mx-auto bg-[url('/images/illustrations.svg')] bg-no-repeat bg-center max-w-[600px] xl:max-w-[auto] h-[350px]"></div>
        </div>
      </Container>
    </section>
  );
}
