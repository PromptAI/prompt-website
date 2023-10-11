import tw from "twin.macro";
import Container from "~/components/Atoms/Container";
import Button from "~/components/Atoms/Button";
import useTranslate from "~/hooks/useTranslate";
import Link from "next/link";
import useTrackEvent from "~/hooks/useTrackEvent";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const MoneyUnit = ({ money, unit }) => (
  <div tw="flex items-end justify-center" className="justify-center">
    <div tw="h-10">
      <p tw="m-0 text-4xl font-medium">{money}</p>
    </div>
    <span tw="opacity-80">/{unit}</span>
  </div>
);

const PricingCard = ({
  title,
  money,
  customMoney,
  items,
  className,
  children,
}) => {
  const t = useTranslate();
  return (
    <div
      tw="w-full md:max-w-md p-8 rounded-lg flex flex-col justify-between text-xl border shadow"
      className={className}
    >
      <div tw="space-y-8">
        <div tw="space-y-4">
          <span tw="font-medium opacity-60">{title}</span>
          {customMoney && customMoney}
          {!customMoney && <MoneyUnit money={money} unit={t`month`} />}
        </div>
        <ul tw="m-0 space-y-2">
          {items.map((item) => (
            <li
              key={item}
              tw="marker:text-gray-800 m-0 flex gap-4 items-center"
            >
              <AiOutlineCheckCircle tw="text-2xl" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div tw="mt-6">{children}</div>
    </div>
  );
};

const Trigger = (props) => (
  <TabsTrigger
    tw="data-[state=active]:(bg-blue-600 text-white) bg-gray-100 py-2 px-4 rounded-md hover:shadow text-lg font-medium"
    {...props}
  />
);
const Content = (props) => (
  <TabsContent
    tw="data-[state=inactive]:hidden mt-4 flex justify-center"
    {...props}
  />
);

const buildItems = (length, prefix) =>
  new Array(length).fill(0).map((_, i) => `${prefix}.${i}`);

export default function PricingSection({ appOrigin, locale }) {
  const t = useTranslate();
  const track = useTrackEvent("link statistics", "click");
  const cloud = useMemo(
    () => buildItems(4, "pricing.cloud.feature").map((k) => t`${k}`),
    [t]
  );
  const premises0 = useMemo(
    () => buildItems(3, "pricing.on-premises.0.feature").map((k) => t`${k}`),
    [t]
  );
  const premises1 = useMemo(
    () => buildItems(3, "pricing.on-premises.1.feature").map((k) => t`${k}`),
    [t]
  );
  const premises2 = useMemo(
    () => buildItems(3, "pricing.on-premises.2.feature").map((k) => t`${k}`),
    [t]
  );
  return (
    <Container tw="px-4 pb-10 space-y-8">
      <h2 tw="mb-0 font-medium">Pricing</h2>
      <Tabs defaultValue="cloud">
        <TabsList tw="flex justify-center items-center gap-4">
          <Trigger value="cloud">{t`pricing.cloud`}</Trigger>
          <Trigger value="on-premises">{t`pricing.on-premises`}</Trigger>
        </TabsList>
        <Content value="cloud">
          <PricingCard
            title={t`pricing.cloud`}
            money={t`pricing.cloud.money`}
            items={cloud}
            tw="md:max-w-2xl"
          >
            <Link
              target="_blank"
              href={`${appOrigin}/login`}
              onMouseDown={() => track("login")}
            >
              <Button tw="h-10 w-full rounded-md">{t`pricing.cloud.button`}</Button>
            </Link>
          </PricingCard>
        </Content>
        <Content value="on-premises">
          <div tw="flex justify-center flex-wrap gap-4 w-full">
            <PricingCard
              title={t`pricing.on-premises.0`}
              money={t`pricing.on-premises.0.money`}
              items={premises0}
            >
              <Link
                target="_blank"
                href={`${appOrigin}/login`}
                onMouseDown={() => track("login")}
              >
                <Button tw="h-10 w-full rounded-md">{t`pricing.on-premises.0.button`}</Button>
              </Link>
            </PricingCard>
            <PricingCard
              title={t`pricing.on-premises.1`}
              items={premises1}
              money={t`pricing.on-premises.1.money.0`}
            >
              <Link
                target="_blank"
                href={`${appOrigin}/login`}
                onMouseDown={() => track("login")}
              >
                <Button tw="h-10 w-full rounded-md">{t`pricing.on-premises.1.button`}</Button>
              </Link>
            </PricingCard>
            <PricingCard
              title={t`pricing.on-premises.2`}
              items={premises2}
              customMoney={
                <div tw="h-10 flex items-end justify-center">
                  <a
                    tw="m-0 text-3xl font-medium underline cursor-pointer"
                    href={`mailto:${
                      locale === "zh" ? "info@promptai.cn" : "info@promptai.us"
                    }`}
                  >
                    {t`pricing.on-premises.2.contact.us`}
                  </a>
                </div>
              }
            >
              <Button tw="h-10 w-full rounded-md invisible">-</Button>
            </PricingCard>
          </div>
        </Content>
      </Tabs>
      <div tw="p-4 rounded-lg bg-gray-50 space-y-4 text-xl">
        <p>
          <span tw="font-medium">(1)</span> {t`pricing.other.0`}
          <a
            tw="text-blue-600 ml-2 cursor-pointer underline"
            href={`mailto:${
              locale === "zh" ? "info@promptai.cn" : "info@promptai.us"
            }`}
          >
            {t`pricing.other.0.link.0`}
          </a>
          .
        </p>
        <p>
          <span tw="font-medium">(2)</span> {t`pricing.other.1`}
          <a
            tw="text-blue-600 ml-2 cursor-pointer underline"
            href="https://talk2bits.com"
            target="_blank"
            rel="noreferrer"
          >
            {t`pricing.other.1.link.0`}
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
