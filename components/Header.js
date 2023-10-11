import tw, { css } from "twin.macro";
import { useEffect, useState } from "react";
import Container from "~/components/Atoms/Container";
import Button from "./Atoms/Button";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { useIntl } from "react-intl";
import useTranslate from "~/hooks/useTranslate";
import useTrackEvent from "~/hooks/useTrackEvent";

const style = {
  headerBasic: [
    tw`fixed w-full transition-all z-10`,
    css`
      ${tw`bg-white`}
      @media screen and (max-width: 640px) {
        &:hover {
          ${tw`bg-white`}
          nav {
            ${tw`block`}
            a,li {
              ${tw`text-gray-800`}
            }
          }
          h1 {
            ${tw`text-gray-900`}
          }
          i {
            ${tw`text-gray-600`}
          }
        }
      }

      h1 {
        ${tw`text-gray-900`}
      }
      i {
        ${tw`text-gray-600`}
      }
    `,
    tw`sm:hover:bg-transparent`,
  ],
  headerFixed: [
    tw`bg-gray-50!`,
    css`
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      ${tw`border-b`}
      h1 {
        ${tw`text-gray-900`}
      }
      i {
        ${tw`text-gray-600`}
      }
      a,
      li {
        ${tw`!text-gray-800`}
      }
    `,
  ],
  headerMenu: [
    tw`flex flex-col items-center justify-center bg-gray-200 -mx-4`,
    tw`sm:(flex-row gap-2 bg-transparent mx-auto) md:gap-5`,
    css`
      a,
      li {
        ${tw`text-gray-800`}
      }
      li {
        ${tw`py-3 w-full text-center hover:(bg-gray-100 text-blue-500 underline)`}
        ${tw`sm:(py-0 w-auto hover:bg-transparent)`}
      }
      a {
        ${tw`w-full block`}
        ${tw`sm:(w-auto inline)`}
      }
    `,
  ],
};

export default function Header({
  white = false,
  appOrigin,
  docOrigin,
  deployType,
}) {
  const [isFixed, setFixed] = useState(white);
  const t = useTranslate();
  const track = useTrackEvent("link statistics", "click");

  useEffect(() => {
    const handler = (e) => {
      const scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      setFixed(scrollTop > 0);
    };
    document.addEventListener("scroll", handler);
    return () => {
      document.removeEventListener("scroll", handler);
    };
  }, []);

  const { locale } = useIntl();

  return (
    <header css={[style.headerBasic, (white || isFixed) && style.headerFixed]}>
      <Container tw="relative min-h-[4.5rem] px-4 flex justify-between items-start flex-wrap">
        <Link
          tw="flex items-center gap-5 justify-center hover:no-underline"
          onMouseDown={() => track("home")}
          href="/"
        >
          <h1 tw="text-2xl font-black ">{t`website.name`}</h1>
          <i tw="[font-size: 12px] -mb-2 -ml-3.5">Beta</i>
        </Link>
        <FiMenu tw="m-5 md:hidden [align-self: center]" />
        <nav tw="hidden w-full md:(flex [align-self: center] w-auto)">
          <ul css={[style.headerMenu]}>
            <li>
              <Link
                onMouseDown={() => track("document")}
                target="_blank"
                href={
                  deployType === "normal"
                    ? `${docOrigin}/docs/${locale}/overview/`
                    : `${docOrigin}/docs/overview/`
                }
              >
                {t`nav.document`}
              </Link>
            </li>
            <li>
              <Link
                onMouseDown={() => track("study_example")}
                href={`/${locale}/examples`}
              >
                {t`nav.example`}
              </Link>
            </li>
            <li>
              <Link
                onMouseDown={() => track("price")}
                href={`/${locale}/pricing`}
              >
                {t`nav.price`}
              </Link>
            </li>
            <li>
              <Link
                onMouseDown={() => track("contactus")}
                href={`/${locale}/contact`}
              >{t`nav.contactUs`}</Link>
            </li>
            <li>
              <Link
                onMouseDown={() => track("about")}
                href={`${docOrigin}/docs/about`}
                target="_blank"
              >{t`nav.about`}</Link>
            </li>
            <li>
              <Link
                onMouseDown={() => track("login")}
                target="_blank"
                href={`${appOrigin}/login`}
              >
                <Button tw="rounded">{t`nav.free2Use`}</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
