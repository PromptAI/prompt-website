import "../styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import NavLink from "../components/NavLink";

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <div className="app-main">
        <header className="h-12 bg-opacity-80 bg-transparent z-50 flex items-center justify-between fixed left-0 top-0 py-8 px-4 w-full">
          <Link href="/">
            <div className="flex items-center gap-4">
              <Image
                src="/promptai.png"
                width={42}
                height={42}
                alt="logo"
                className="p-1 bg-white rounded"
              />
              <h1 className="text-white text-2xl font-black">PROMPT AI</h1>
              <i className="text-white">Beta</i>
            </div>
          </Link>
          <div className="flex gap-4 items-center text-base leading-none text-white font-serif font-medium">
            <NavLink href="#about" name="关于我们" match="/#about" />
            <span>|</span>
            <NavLink
              name="文档"
              href="https://doc.promptai.cn/docs/about/"
              target="_blank"
            />
            <span>|</span>
            <NavLink
              name="示例"
              href="https://doc.promptai.cn/docs/example/"
              target="_blank"
            />
            <span>|</span>
            <NavLink href="#contact" name="联系我们" match="/#contact" />
            <span>|</span>
            <NavLink
              name="免费试用"
              href="https://app.promptai.cn/"
              target="_blank"
            />
          </div>
        </header>
        <div className="overflow-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
