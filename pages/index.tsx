import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ContactMe from "../components/ContactMe";
import LabelCard from "../components/LabelCard";
import DevUtil from "../components/LabelCard/DevUtil";
import Section from "../components/Section";
import SectionCard from "../components/SectionCard";
import { labelData, sectionData } from "../data/_data";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>飞语科技 - 关于我们</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section id="about">
        <h1 className="mb-32 text-6xl text-white font-serif align-middle">
          PROMPT AI 飞语科技全新发布 !
        </h1>
        <div className="flex gap-4 items-center justify-center">
          {sectionData.map((item) => (
            <SectionCard {...item} />
          ))}
        </div>
      </Section>
      <Section>
        <h1 className="mb-32 text-6xl text-white font-serif align-middle">
          一站式用户工作平台，满足用户全场景诉求！
        </h1>
        <DevUtil data={labelData} width={1020} height={540} />
      </Section>
      <Section id="contact">
        <h1 className="mb-32 text-6xl text-white font-serif align-middle">
          联系我们
        </h1>
        <div className="app-contact rounded-2xl p-8 flex gap-2 items-center">
          <div className="w-96 p-2">
            <div className="flex justify-around">
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src="/images/fallback.png"
                  alt="fallback"
                  width={64}
                  height={64}
                />
                <span className="text-white font-serif font-medium text-xl">
                  产品反馈
                </span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src="/images/cooperation.png"
                  alt="cooperation"
                  width={64}
                  height={64}
                />
                <span className="text-white font-serif font-medium text-xl">
                  合作交流
                </span>
              </div>
            </div>
            <p
              className="text-[#D1B4E4] text-base mt-8"
              style={{ textIndent: "1.5em" }}
            >
              <b>「Promot AI」</b>
              专为中小企业客户打造的下一代基于云的专业智能会话设计云平台。
              覆盖传统智能会话的功能，且基于可视化的理念，结合全新的技术和专业的智能对话经验，全面满足中小企业客户全面的智能会话设计需求，让客户能更快、更容易的将智能会话集成于自身的业务系统中！
            </p>
          </div>
          <ContactMe />
        </div>
      </Section>
    </div>
  );
};

export default Home;
