import "twin.macro";
import Container from "~/components/Atoms/Container";
import tw, {css} from "twin.macro";
import useTranslate from "~/hooks/useTranslate";
import Button from "~/components/Atoms/Button";

const style = {
    templates: [
        tw`flex flex-col text-center justify-center gap-4 px-4`,
        tw`xl:(flex-row text-center)`,
        css`
      h3 {
        ${tw`text-gray-700 mb-8 text-center`}
        span {
          ${tw`px-2`}
          ${tw`xl:(pl-0)`}
        }
      }
      p {
        ${tw`line-clamp-5`}
      }
      li {
        ${tw`p-6`}
        ${tw`xl:w-1/4`}
        ${tw`shadow-xl rounded-md shadow-gray-400`}
      }
    `,
    ],
};
export default function Template({locale}) {
    const data = [
        {
            title: "Web-Knowledge-base",
            introduce: "We take PromptAI’s Help Document as a sample knowledge source, add a few frequently asked FAQs, and launch a website assistant add a few frequently asked FAQs, and launch a website assistant add a few frequently asked FAQs, and launch a website assistant add a few frequently asked FAQs, and launch a website assistant add a few frequently asked FAQs, and launch a website assistant",
            url: "https://www.baidu.com"
        }, {
            title: "Web-Knowledge-base",
            introduce: "We take PromptAI’s Help Document as a sample knowledge source, add a few frequently asked FAQs, and launch a website assistant",
            url: "https://www.baidu.com"
        }
    ]
    const t = useTranslate();
    return <section>
        <Container tw="flex flex-row justify-center flex-wrap items-center py-5 ">
            <ul css={[style.templates]} className="flex flex-row justify-center">
                {data.map((item, index) => {
                    return <li key={index}>
                        <h3>
                            <span>{item.title}</span>
                        </h3>
                        <p tw={"text-ellipsis"}>{item.introduce}</p>
                        <div tw={"flex justify-center mt-2"}>
                            <Button onClick={() => {window.open(item.url,"_blank")}}> Click to Try</Button>
                        </div>
                    </li>
                })}
            </ul>
        </Container>
    </section>;

};