import { Global, css } from "@emotion/react";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css`
  :root {
    font-size: 14px;
  }
  html {
    -webkit-overflow-scrolling: smoothing;
    -webkit-tap-highlight-color: transparent;
  }
  html,
  body {
    ${tw`font-sans`}
    ${tw`antialiased`}
    ${tw`text-gray-700`}
  }

  @font-face {
    font-family: "Poppins";
    src: url(/fonts/Poppins-Regular.ttf);
    font-weight: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url(/fonts/Poppins-Medium.ttf);
    font-weight: 500;
  }

  @font-face {
    font-family: "Poppins";
    src: url(/fonts/Poppins-Black.ttf);
    font-weight: bold;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    ${tw`text-gray-900 leading-normal`}
  }

  h1 {
    ${tw`text-5xl my-5`}
  }
  h2 {
    ${tw`text-4xl my-4`}
  }
  h3 {
    ${tw`text-3xl my-3`}
  }
  h4 {
    ${tw`text-2xl my-2`}
  }

  p {
    ${tw`my-2`}
  }

  a {
    ${tw`hover:underline text-blue-600`}
  }
  .carousel-slider {
    ${tw`rounded-md shadow-2xl shadow-gray-400 overflow-hidden`}
  }
  .dot {
    ${tw`!bg-blue-600 !shadow-none !w-4 !h-4`}
  }
  .control-dots {
    top: -32px !important;
    bottom: unset !important;
    margin: 0 !important;
  }
  .carousel-slider {
    overflow: unset !important;
  }
  .line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
