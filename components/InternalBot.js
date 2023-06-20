import { useEffect } from "react";

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));
const Bot = {
  instance: null,
  script: null,
  async init(origin) {
    if (!Bot.script) {
      const script = document.createElement("script");
      Bot.script = script;
      script.src = `${origin}/ava/static/sdk.js`;
      document.head.appendChild(script);
    }

    if (Bot.instance || document.querySelector(".chatbot")) {
      return;
    }
    Bot.instance = {
      destroy() {
        void 0;
      },
    };
    const maxRetry = 30;
    let tryCount = 0;
    while (tryCount <= maxRetry) {
      if (!("Chatbot" in global)) {
        await delay();
        tryCount += 1;
        continue;
      }

      Bot.instance = new global.Chatbot({
        name: "Prompt AI",
        id: "a1_p_c0ru7u2vklc0",
        token: "NDMwYjc0NzEtZmU0NC00NDM4LTk5ZTUtY2M0N2UzOWM5ZTc3",
        project: "p_c0ru7u2vklc0",
        server: origin,
      });
      break;
    }
  },
  destroy() {
    if (Bot.instance) {
      document.head.removeChild(this.script);

      Bot.instance.destroy();
      Bot.instance = null;
      Bot.script = null;
    }
  },
};
export default function InternalBot({ origin }) {
  useEffect(() => {
    Bot.init(origin);

    return () => {
      Bot.destroy();
    };
  }, [origin]);
  return <></>;
}
