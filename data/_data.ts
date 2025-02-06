type SectionData = {
  key: string;
  title: string;
  image: string;
  content: string;
};
export const sectionData: SectionData[] = [
  {
    key: "sample",
    title: "简易",
    image: "/images/mobile-op.png",
    content:
      "基于应用场景，专业的图形设计功能通过简洁易理解的方式暴露给客户，让客户能快速上手。在满足特殊或复杂场景时，可通过标准的接口进行快速定制或扩展",
  },
  {
    key: "convenient",
    title: "便捷",
    image: "/images/pointer.png",
    content: "将常用场景的会话进行专业整合，无需客户从头构建",
  },
  {
    key: "multivariate",
    title: "多元",
    image: "/images/meta-data.png",
    content:
      "多场景切换，作为一个真正意义上的“一揽子”智能会话服务，用户无需为不同的会话需求构建不同的会话方案，充分节约成本，并让会话系统发挥更大价值",
  },
  {
    key: "efficient",
    title: "高效",
    image: "/images/focus-point.png",
    content:
      "快速的设计构建智能会话系统，快速设计、快速构建、快速打包、快速部署，降低用户从零部署一个完整的会话系统的复杂度，让部署变得简单快速稳定",
  },
];
type LabelData = {
  key: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
  width?: number;
  height?: number;
  labels: string[];
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
};

