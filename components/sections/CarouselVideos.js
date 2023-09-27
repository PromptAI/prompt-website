import tw from "twin.macro";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Video = ({ url, isSelected }) => {
  return (
    <video
      muted
      controls
      src={url}
      tw="w-full h-full object-fill rounded-md shadow-gray-400 bg-gray-50 p-1"
    />
  );
};

const CarouselVideios = () => {
  return (
    <Carousel
      stopOnHover
      infiniteLoop
      autoPlay
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      renderItem={(item, props) => <item.type {...item.props} {...props} />}
    >
      <Video key="youtube-1" url="/videos/en/index_1.mp4" />
      <Video key="youtube-2" url="/videos/en/index_2.mp4" />
    </Carousel>
  );
};

export default CarouselVideios;
