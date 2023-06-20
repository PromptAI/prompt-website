import "twin.macro";
import { useState } from "react";
import Container from "~/components/Atoms/Container";
import Input from "~/components/Atoms/Input";
import Button from "~/components/Atoms/Button";
import { useForm } from "react-hook-form";
import useTranslate from "~/hooks/useTranslate";
import Link from "next/link";
import useTrackEvent from "~/hooks/useTrackEvent";

const READY = 1;
const SUCCESS = 2;
const ERROR = 3;

const STATUS = {
  READY,
  SUCCESS,
  ERROR,
};
const email_partten =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/;
const mobile_partten = /(?:0|86|\+86)?1[3-9]\d{9}/;

export default function Contactus({ appOrigin, locale }) {
  const t = useTranslate();
  const track = useTrackEvent("contactus statistics", "send");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(STATUS.READY);

  const onSubmit = (data) => {
    const { mobile = "", email = "" } = data;
    const mobileIsEmpty = !mobile.trim();
    const emailIsEmpty = !email.trim();

    if (mobileIsEmpty && emailIsEmpty) {
      setError(
        "mobile",
        { type: "pattern", message: t`contactus.mustOneofTwo` },
        { shouldFocus: true }
      );
      setError("email", {
        type: "pattern",
        message: t`contactus.mustOneofTwo`,
      });
      return;
    }
    setLoading(true);
    fetch(`${appOrigin}/rpc/contact/comment`, {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data),
    })
      .then(() => {
        setStatus(STATUS.SUCCESS);
        track("sendContactusSuccess");
      })
      .catch(() => setStatus(STATUS.ERROR))
      .finally(() => setLoading(false));
  };
  return (
    <Container tw="pb-20" id="contactus">
      <div tw="p-5 max-w-[900px] mx-10 sm:mx-auto rounded-md [box-shadow: 0 25px 90px -10px rgb(0 0 0 / 0.25)] flex flex-col xl:flex-row">
        <div tw="h-32 flex flex-col items-center justify-center bg-center -mx-5 -my-5 mb-5 rounded-tl-md rounded-tr-md xl:(h-auto w-2/5 -ml-5 -my-5 mr-5 rounded-none rounded-bl-md rounded-tl-md)">
          <h1 tw="m-0">{t`contactus.title`}</h1>
          <p>
            <Link
              tw="px-0.5 bg-white text-blue-600"
              href={`mailto:${
                locale === "zh" ? "info@promptai.cn" : "info@promptai.us"
              }`}
            >
              {locale === "zh" ? "info@promptai.cn" : "info@promptai.us"}
            </Link>
          </p>
        </div>
        <form tw="flex-1 min-w-0" onSubmit={handleSubmit(onSubmit)}>
          {status === STATUS.SUCCESS && (
            <div tw="h-[400px] flex flex-col justify-center items-center">
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                tw="fill-green-400"
              >
                <path d="M512 32C246.4 32 32 249.6 32 512s217.6 480 480 480 480-217.6 480-480S774.4 32 512 32z m268.8 380.8L496 697.6c-25.6 25.6-60.8 25.6-83.2 0L243.2 528c-25.6-25.6-25.6-60.8 0-83.2s60.8-25.6 83.2 0l128 128 240-240c25.6-25.6 60.8-25.6 83.2 0 25.6 19.2 25.6 54.4 3.2 80z"></path>
              </svg>
              <span tw="text-white text-2xl font-medium font-serif mt-12">
                {t`contactus.success`}
              </span>
            </div>
          )}
          {(status === STATUS.READY || status === STATUS.ERROR) && (
            <div tw="h-[400px] flex flex-col">
              <div tw="flex w-full gap-2">
                <div tw="flex flex-col basis-1/2">
                  <Input
                    type="text"
                    placeholder={t`contactus.name`}
                    {...register("name", {
                      required: t`contactus.name.required`,
                    })}
                  />
                  <span tw="h-6 text-red-500 text-xs font-serif leading-none font-bold flex items-center">
                    <>{errors.name && errors.name.message}</>
                  </span>
                </div>
                <div tw="flex flex-col basis-1/2">
                  <Input
                    type="text"
                    placeholder={t`contactus.mobile`}
                    {...register("mobile", {
                      required: false,
                      pattern: {
                        value: mobile_partten,
                        message: t`contactus.mobile.invalid`,
                      },
                    })}
                  />
                  <span tw="h-6 text-red-500 text-xs font-serif leading-none font-bold flex items-center">
                    <>{errors.mobile && errors.mobile.message}</>
                  </span>
                </div>
              </div>
              <div tw="flex flex-col">
                <Input
                  type="text"
                  placeholder={t`contactus.email`}
                  {...register("email", {
                    required: false,
                    pattern: {
                      value: email_partten,
                      message: t`contactus.email.invalid`,
                    },
                  })}
                />
                <span tw="h-6 text-red-500 text-xs font-serif leading-none font-bold flex items-center">
                  <>{errors.email && errors.email.message}</>
                </span>
              </div>
              <div tw="flex-1 min-h-0 flex flex-col">
                <Input
                  tw="flex-1 min-h-0"
                  rows={9}
                  style={{ resize: "none" }}
                  placeholder={t`contactus.messageBody`}
                  {...register("content", {
                    required: t`contactus.messageBody.required`,
                  })}
                />
                <span tw="h-6 text-red-500 text-xs font-serif leading-none font-bold flex items-center">
                  <>{errors.content && errors.content.message}</>
                </span>
              </div>

              <div tw="flex justify-end items-center">
                {status === STATUS.ERROR && (
                  <span tw="mr-4 font-serif text-white bg-red-500 p-2 leading-none flex justify-center items-center rounded"></span>
                )}
                <Button type="submit" disabled={loading}>
                  {loading
                    ? t`contactus.button.sending`
                    : t`contactus.button.text`}
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </Container>
  );
}
