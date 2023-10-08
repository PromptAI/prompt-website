import tw from "twin.macro";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState } from "react";
import useTranslate from "~/hooks/useTranslate";

const Video = ({ url }, ref) => {
  return (
    <video
      ref={ref}
      controls
      src={url}
      tw="w-full h-full object-fill rounded-md shadow-gray-400 bg-gray-50 p-1"
      className="video-pause"
    />
  );
};

const VideoWithRef = React.forwardRef(Video);

const CarouselVideios = () => {
  const [index, setIndex] = useState(0);
  const t = useTranslate();

  const handleChange = (i) => {
    setIndex(i);
    Array.from(document.querySelectorAll(".video-pause")).forEach((ele) =>
      ele.pause()
    );
  };

  return (
    <div tw="w-3/4 mx-auto mt-8">
      <div tw="h-16 text-xl font-medium">
        <p>{t`carousel.description.${index}`}</p>
      </div>
      <Carousel
        stopOnHover
        infiniteLoop
        autoPlay
        interval={15000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        onChange={handleChange}
      >
        <VideoWithRef key="youtube-1" url="/videos/en/index_1.mp4" />
        <VideoWithRef key="youtube-2" url="/videos/en/index_2.mkv" />
        <VideoWithRef key="youtube-3" url="/videos/en/index_3.mp4" />
        <VideoWithRef key="youtube-4" url="/videos/en/index_4.mp4" />
      </Carousel>
    </div>
  );
};

export default CarouselVideios;
