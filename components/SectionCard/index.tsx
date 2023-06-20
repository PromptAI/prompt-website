import Image from "next/image";
import styles from "./index.module.css";
interface SectionCardProps {
  title: string;
  image: string;
  content: string;
}
const IMAGE_SIZE = 78;
const SectionCard = ({ title, image, content }: SectionCardProps) => {
  return (
    <div className="w-80 p-2">
      <div className="w-full flex items-center justify-center font-serif text-[#A1A0A3] font-medium text-4xl">
        <span className={styles.title}>{title}</span>
      </div>
      <div className="w-full relative h-60 bg-[#8E97EB] mt-24 text-base font-serif text-[#E6E2EF] rounded shadow">
        <Image
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          src={image}
          alt={image}
          className="absolute top-[-36px] left-[8px] rotate-12"
        />
        <div className="h-full overflow-hidden flex justify-start items-center p-6">
          <p className="align-middle">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
