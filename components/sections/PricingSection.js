import tw from "twin.macro";
import Container from "~/components/Atoms/Container";
import Button from "~/components/Atoms/Button";
import Loading from "~/components/Atoms/Loading";
import useTranslate from "~/hooks/useTranslate";
import { useState } from "react";
import { marked } from "marked";
import { useEffect } from "react";

const PricingCard = ({ title, items }) => {
  return (
    <div
      tw="w-full md:max-w-sm px-2 py-4 bg-gray-50 rounded border flex flex-col justify-between"
      className="justify-between"
    >
      <div tw="flex justify-center">
        <span tw="text-xl font-medium">{title}</span>
      </div>
      <ul tw="m-0 mt-4 list-inside list-disc space-y-2">
        {items.map((item) => (
          <li key={item} tw="marker:text-gray-800 m-0 px-4">
            {item}
          </li>
        ))}
      </ul>
      <Button tw="rounded mt-4 h-9">Free to Build</Button>
    </div>
  );
};
const a1 = new Array(3).fill("You are an individual or an enterprise");
const a2 = new Array(4).fill("You are an individual or an enterprise");
const a3 = new Array(5).fill("You are an individual or an enterprise");

export default function PricingSection() {
  const t = useTranslate();
  const [state, setState] = useState({ loading: false, html: "" });
  useEffect(() => {
    (async () => {
      setState({ loading: true, html: "" });
      const res = await fetch(`/docs/pricing-faqs.md`);
      const text = await res.text();
      setState({ loading: false, html: marked(text) });
    })();
  }, []);
  return (
    <Container tw="px-4 pb-10 space-y-4">
      <h2 tw="mb-0 font-medium">Pricing</h2>
      <div tw="flex flex-wrap gap-8">
        <PricingCard title="免费版" items={a1} />
        <PricingCard title="本地版" items={a2} />
        <PricingCard title="云版" items={a3} />
      </div>
      {state.loading && <Loading tw="h-full">{t`loading`}</Loading>}
      {state.html && (
        <article
          dangerouslySetInnerHTML={{ __html: state.html }}
          tw="text-xl max-w-none font-sans prose prose-slate prose-headings:font-medium"
        />
      )}
    </Container>
  );
}
