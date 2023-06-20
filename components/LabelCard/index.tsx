import Image from "next/image";
import React from "react";

interface LabelCardProps {
  image?: {
    url: string;
    width: number;
    height: number;
  };
  labels: string[];
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}
const LabelCard = ({
  image,
  labels,
  width,
  height,
  ...position
}: LabelCardProps) => {
  return (
    <div
      className="app-contact rounded-md p-2 flex absolute justify-center items-center gap-4"
      style={{
        width: width || "max-content",
        height: height || "max-content",
        ...position,
      }}
    >
      {image && (
        <div className="flex justify-center items-center">
          <Image
            src={image.url}
            alt={image.url}
            width={image.width}
            height={image.height}
            className="mr-2"
          />
        </div>
      )}
      <div className="flex flex-col gap-1 justify-center items-center">
        {labels.map((label, index) => (
          <div key={index + label}>
            <h2 className="text-white font-bold text-xl leading-none flex justify-center items-center">
              {label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabelCard;
