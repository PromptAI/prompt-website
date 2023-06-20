import React from "react";
import LabelCard from "..";

interface DevUtilItem {
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
interface DevUtilProps {
  data: DevUtilItem[];
  width: number;
  height: number;
}
const DevUtil = ({ data, width, height }: DevUtilProps) => {
  return (
    <div className="text-white relative" style={{ width, height }}>
      {data.map((item) => (
        <LabelCard {...item} />
      ))}
    </div>
  );
};

export default DevUtil;
