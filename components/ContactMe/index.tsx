import { isEmpty } from "lodash";
import { useState } from "react";
import { useForm } from "react-hook-form";

enum STATUS {
  READR,
  SUCCESS,
  ERROR,
}
const email_partten =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/;
const mobile_partten = /(?:0|86|\+86)?1[3-9]\d{9}/;
const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(STATUS.READR);

  const onSubmit = (data: any) => {
    const { mobile, email } = data;
    const mobileIsEmpty = isEmpty(mobile),
      emailIsEmpty = isEmpty(email);
    if (mobileIsEmpty && emailIsEmpty) {
      setError(
        "mobile",
        { type: "pattern", message: "电话和邮箱，二选一必填" },
        { shouldFocus: true }
      );
      setError("email", { type: "pattern", message: "电话和邮箱，二选一必填" });
      return;
    }
    setLoading(true);
    fetch("https://app.promptai.cn/rpc/contact/comment", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data),
    })
      .then(() => setStatus(STATUS.SUCCESS))
      .catch(() => setStatus(STATUS.ERROR))
      .finally(() => setLoading(false));
  };
  return (
    <form className="w-96 p-2 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      {status === STATUS.SUCCESS && (
        <div className="h-[400px] flex flex-col justify-center items-center">
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            className="fill-green-400"
          >
            <path d="M512 32C246.4 32 32 249.6 32 512s217.6 480 480 480 480-217.6 480-480S774.4 32 512 32z m268.8 380.8L496 697.6c-25.6 25.6-60.8 25.6-83.2 0L243.2 528c-25.6-25.6-25.6-60.8 0-83.2s60.8-25.6 83.2 0l128 128 240-240c25.6-25.6 60.8-25.6 83.2 0 25.6 19.2 25.6 54.4 3.2 80z"></path>
          </svg>
          <span className="text-white text-2xl font-medium font-serif mt-12">
            我们已收到您的信息，谢谢！
          </span>
        </div>
      )}
      {(status === STATUS.READR || status === STATUS.ERROR) && (
        <div className="h-[400px]">
          <div className="flex w-full gap-2">
            <div className="flex flex-col basis-1/2">
              <input
                type="text"
                placeholder="姓名"
                className="h-8 rounded px-2 w-full"
                {...register("name", { required: "姓名必填" })}
              />
              <span className="h-6 text-red-500 text-xs font-serif leading-none font-bold flex items-center">
                <>{errors.name && errors.name.message}</>
              </span>
            </div>
            <div className="flex flex-col basis-1/2">
              <input
                type="text"
                placeholder="电话"
                className="w-full h-8 rounded px-2"
                {...register("mobile", {
                  required: false,
                  pattern: { value: mobile_partten, message: "格式不对" },
                })}
              />
              <span className="h-6 text-red-500 text-xs font-serif leading-none font-bold flex items-center">
                <>{errors.mobile && errors.mobile.message}</>
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="邮箱"
              className="w-full h-8 rounded px-2"
              {...register("email", {
                required: false,
                pattern: { value: email_partten, message: "格式不对" },
              })}
            />
            <span className="h-6 text-red-500 text-xs font-serif leading-none font-bold flex items-center">
              <>{errors.email && errors.email.message}</>
            </span>
          </div>
          <div className="flex flex-col">
            <textarea
              rows={9}
              style={{ resize: "none" }}
              placeholder="消息"
              className="w-full rounded p-2"
              {...register("content", { required: "消息必填" })}
            />
            <span className="h-6 text-red-500 text-xs font-serif leading-none font-bold flex items-center">
              <>{errors.content && errors.content.message}</>
            </span>
          </div>
          <div className="flex justify-end items-center">
            {status === STATUS.ERROR && (
              <span className="mr-4 font-serif text-white bg-red-500 p-2 leading-none flex justify-center items-center rounded">
                出错了，请稍后重试...
              </span>
            )}
            <button
              type="submit"
              disabled={loading}
              className="rounded font-serif text-white py-2 px-4 text-center leading-none bg-[#786acd] hover:bg-blue-500"
            >
              {loading ? "留言中..." : "留 言"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactMe;
