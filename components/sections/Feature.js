import tw, { css } from "twin.macro";
import Container from "~/components/Atoms/Container";
import useTranslate from "~/hooks/useTranslate";

const style = {
  features: [
    tw`flex flex-col text-center`,
    tw`xl:(flex-row text-left)`,
    css`
      h3 {
        ${tw`text-gray-700 mb-8`}
        span {
          ${tw`border-b-2 border-b-blue-600 px-2`}
          ${tw`xl:(pl-0)`}
        }
      }
      li {
        ${tw`p-6`}
        ${tw`xl:w-1/4`}
      }
    `,
  ],
};

export default function Feature() {
  const t = useTranslate();
  return (
    <section>
      <Container tw="flex flex-row justify-center flex-wrap items-center py-10 pb-20">
        <h2 tw="text-center">{t`feature.title`}</h2>
        <ul css={[style.features]}>
          <li>
            <h3>
              <span>{t`feature.1.title`}</span>
            </h3>
            <div>{t`feature.1.description`}</div>
          </li>
          <li>
            <h3>
              <span>{t`feature.2.title`}</span>
            </h3>
            <div>{t`feature.2.description`}</div>
          </li>
          <li>
            <h3>
              <span>{t`feature.3.title`}</span>
            </h3>
            <div>{t`feature.3.description`}</div>
          </li>
          <li>
            <h3>
              <span>{t`feature.4.title`}</span>
            </h3>
            <div>{t`feature.4.description`}</div>
          </li>
        </ul>

        <h4 tw="my-10">{t`feature.bottom.title`}</h4>
      </Container>
    </section>
  );
}
