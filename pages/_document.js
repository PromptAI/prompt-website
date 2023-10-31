// pages/_document.js
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { extractCritical } from "@emotion/server";

const getAnalyticsTag = () => {
  return {
    __html: `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?1de10bbcbfaa120312dca898b24bf91f";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`,
  };
};

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const critical = extractCritical(initialProps.html);
    initialProps.html = critical.html;
    initialProps.styles = (
      <React.Fragment>
        {initialProps.styles}
        <style
          data-emotion-css={critical.ids.join(" ")}
          dangerouslySetInnerHTML={{ __html: critical.css }}
        />
      </React.Fragment>
    );

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            data-emotion-css={this.props.ids?.join(" ")}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <script dangerouslySetInnerHTML={getAnalyticsTag()} />
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="6b5e52ca-458a-4262-8ab3-cd8e618d99ad"
          async
        ></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
