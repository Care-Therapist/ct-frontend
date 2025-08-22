export const boardCategories = {
  stories: {
    name: "함께 겪는 이야기",
    description: "뇌졸중, 척수손상 환우분들이 서로의 경험을 나누는 공간",
    children: [
      { slug: "stroke", label: "뇌졸중", emoji: "🧠" },
      { slug: "sci", label: "척수손상", emoji: "🦽" },
    ],
  },
  recovery: {
    name: "함께 극복하기",
    description: "재활 과정에서의 다양한 치료 경험을 공유하는 공간",
    children: [
      { slug: "occupational", label: "작업치료", emoji: "👐" },
      { slug: "physical", label: "물리치료", emoji: "🏋️‍♂️" },
      { slug: "speech", label: "언어치료", emoji: "🗣️" },
      // 추후 추가하면 된다!
    ],
  },
} as const;
