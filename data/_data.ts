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
export const labelData: LabelData[] = [
  {
    key: "1",
    labels: ["专有领域", "语音识别"],
    image: {
      url: "/images/voice.png",
      width: 64,
      height: 64,
    },
    width: 280,
    height: 128,
    top: 140,
    left: 0,
  },
  {
    key: "2",
    labels: ["同音异义"],
    top: 300,
    left: 50,
  },
  {
    key: "3",
    labels: ["数据收集"],
    top: 80,
    left: 60,
  },
  {
    key: "4",
    labels: ["专有领域", "BERT 模型"],
    image: {
      url: "/images/module.png",
      width: 72,
      height: 72,
    },
    width: 300,
    height: 160,
    top: 50,
    left: 300,
  },
  {
    key: "5",
    labels: ["高准确率"],
    bottom: 180,
    right: 120,
  },
  {
    key: "6",
    labels: ["报警"],
    image: {
      url: "/images/alart.png",
      width: 36,
      height: 36,
    },
    right: 240,
    bottom: 160,
  },
  {
    key: "7",
    labels: ["监控"],
    image: {
      url: "/images/monitor.png",
      width: 36,
      height: 36,
    },
    height: 64,
    left: 170,
    top: 60,
  },
  {
    key: "8",
    labels: ["订单", "管理"],
    image: {
      url: "/images/report.png",
      width: 64,
      height: 64,
    },
    top: 285,
    left: 180,
  },
  {
    key: "9",
    labels: ["大规模私有和", "云端对话部署"],
    image: {
      url: "/images/cloud.png",
      width: 64,
      height: 64,
    },
    width: 260,
    height: 140,
    top: 245,
    left: 360,
  },
  {
    key: "10",
    labels: ["报表"],
    image: {
      url: "/images/report-chart.png",
      width: 36,
      height: 36,
    },
    top: 75,
    right: 280,
  },
  {
    key: "11",
    labels: ["账户管理"],
    top: 105,
    right: 164,
  },
  {
    key: "12",
    labels: ["运维"],
    image: {
      url: "/images/devops.png",
      width: 72,
      height: 72,
    },
    width: 340,
    height: 148,
    top: 160,
    right: 40,
  },
  {
    key: "13",
    labels: ["用户运营"],
    bottom: 160,
    right: 0,
  },
];
