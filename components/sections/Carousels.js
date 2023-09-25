import "twin.macro";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "~/components/Atoms/Container";
import useTranslate from "~/hooks/useTranslate";

const images = [
  { src: "/th.webp", key: "0" },
  { src: "/logo.png", key: "1" },
  { src: "/th.webp", key: "2" },
  { src: "/th.webp", key: "3" },
];
export default function Carousels() {
  const t = useTranslate();
  return (
    <Container tw="px-5 text-center">
      <h2>{t`carousel.title`}</h2>
      <Carousel
        infiniteLoop
        showStatus={false}
        interval={3000}
        autoPlay
        animationHandler="fade"
        stopOnHover
        showArrows={false}
        shouThumbs={false}
      >
        {images.map(({ src, key }, index) => (
          <div key={src + index}>
            <Image
              src={src}
              tw="object-cover h-[40rem]"
              alt={t`carousel.images.${key}`}
              width={300}
              height={200}
            />
            <p className="legend">{t`carousel.images.${key}`}</p>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}
