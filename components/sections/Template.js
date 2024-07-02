import "twin.macro";
import Container from "~/components/Atoms/Container";
import tw, {css} from "twin.macro";
import React from "react";
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
          ul {
            ${tw`grid grid-cols-4 gap-4 justify-center `}
          }
        `,
    ],
};
export default function Template({locale}) {
    const data1 = [
        {
            title: "Laws",
            introduce: "Answer all questions about housing laws and regulations.",
            url: "https://app.promptai.us/templates/p_dqcmq1jpj400",
            image: "/images/house.svg"
        }
       , {
            title: "Survey",
            introduce: "The fastest way to create a conversational bot is providing a GPT prompt.",
            url: "https://app.promptai.us/templates/p_dn1t6ybs9iww",
            image: "/images/survey.svg"
        }, {
            title: "Ollama - Github",
            introduce: "Chat with Ollama documentation.",
            url: "https://app.promptai.us/templates/p_dq4q6b0ue22o",
            image: "/images/ollama.svg"
        },
    ]
    const data2 = [
        {
            title: "Website Assistant",
            introduce: "Quickly build a website assistant using a Web (URL) and FAQ",
            url: "https://app.promptai.us/templates/p_dn1qvapxdxj4",
            image: "/images/web.svg"
        },{
            title: "WHO Health Topic",
            introduce: "Participate in discussions on WHO health topics.",
            url: "https://app.promptai.us/templates/p_dq4p0kgl7itc",
            image: "/images/line-health.svg"
        }, {
            title: "ADHD",
            introduce: "Learn more about ADHD.",
            url: "https://app.promptai.us/templates/p_dp0b7j29a39c",
            image: "/images/health.svg"
        }
    ]
    return <section>
        <Container >
            <ul css={[style.templates]} className="grid grid-cols-4 gap-4 justify-center ">
                {data1.map((item, index) => {
                    return <li key={index}
                               onMouseOver={() => {
                                   document.getElementById(index + "-ul-1").style.display = 'block';
                               }}
                               onMouseOut={() => {
                                   document.getElementById(index + "-ul-1").style.display = 'none';
                               }}
                               className={"rounded-lg"}
                               onClick={() => {
                                   window.open(item.url, "_blank")
                               }}>
                        <div>
                            <Image src={item.image} width="32" height="32" alt={""}/>
                            <Image id={index + "-ul-1"}
                                   width="32" height="32"
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

            <ul css={[style.templates]} className="grid grid-cols-4 gap-4 justify-center ">
                {data2.map((item, index) => {
                    return <li key={index}
                               onMouseOver={() => {
                                   document.getElementById(index + "-ul-2").style.display = 'block';
                               }}
                               onMouseOut={() => {
                                   document.getElementById(index + "-ul-2").style.display = 'none';
                               }}
                               className={"rounded-lg"}
                               onClick={() => {
                                   window.open(item.url, "_blank")
                               }}>
                        <div>
                            <Image src={item.image} width="32" height="32" alt={""}/>
                            <Image id={index + "-ul-2"}
                                   width="32" height="32"
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