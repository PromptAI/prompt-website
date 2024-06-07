import "twin.macro";
import Container from "~/components/Atoms/Container";
import tw, {css} from "twin.macro";
import useTranslate from "~/hooks/useTranslate";
import Image from "next/image";

const style = {
    templates: [
        tw`flex flex-col text-left justify-center gap-4 px-4 `,
        tw`xl:(flex-row text-left)`,
        css`
          h3 {
            ${tw`text-gray-700 mb-8 text-left`}
            span {
              ${tw`px-2`}
              ${tw`xl:(pl-0)`}
            }
          }
          div {
            ${tw`flex justify-between`}
          }

          p {
            ${tw`line-clamp-5`}
          }

          li {
            ${tw`cursor-pointer`}
            ${tw`p-6`}
            ${tw`xl:w-1/3`}
            ${tw`shadow-xl rounded-lg shadow-gray-400`}
          }
        `,
    ],
};
export default function Template({locale}) {
    const data = [
        {
            title: "Website Assistant",
            introduce: "Quickly build a website assistant using a Web (URL) and FAQ",
            url: "https://app.promptai.us/templates/p_dn1qvapxdxj4",
            image: "/images/web.svg"
        }, {
            title: "GPT Survey",
            introduce: "The fastest way to create a conversational bot is providing a GPT prompt.",
            url: "https://app.promptai.us/templates/p_dn1t6ybs9iww",
            image: "/images/GPT.svg"
        }
    ]
    return <section>
        <Container tw="flex flex-row justify-center flex-wrap items-center py-5 ">
            <ul css={[style.templates]} className="flex flex-row justify-center ">
                {data.map((item, index) => {
                    return <li key={index}
                               onMouseOver={() => {
                                   document.getElementById(index + "").style.display = 'block';
                               }}
                               onMouseOut={() => {
                                   document.getElementById(index + "").style.display = 'none';
                               }}
                               className={"rounded-lg"}
                               onClick={() => {
                                   window.open(item.url, "_blank")
                               }}>
                        <div>
                            <Image src={item.image} alt={""}/>
                            <Image id={index + ""}
                                   style={{display: "none"}}
                                   src={"/images/openRightMini.svg"}
                                   alt={""}/>
                        </div>
                        <h3>
                            <span>{item.title}</span>
                        </h3>
                        <p tw={"text-ellipsis"}>{item.introduce}</p>
                    </li>;
                })}
            </ul>
        </Container>
    </section>;

};