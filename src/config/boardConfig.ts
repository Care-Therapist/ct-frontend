export const boardCategories = {
  stories: {
    name: "stories",                
    label: "함께 겪는 이야기",
    emoji: "🤝",
    endpoint: "/api/v1/board/stories",
    description: "뇌졸중, 척수손상 환우분들이 서로의 경험을 나누는 공간",
    children: [
      {
        name: "stroke",              
        label: "뇌졸중",
        emoji: "🧠",
        endpoint: "/api/v1/board/stories/stroke",
      },
      {
        name: "sci",
        label: "척수손상",
        emoji: "🦽",
        endpoint: "/api/v1/board/stories/sci",
      },
    ],
  },
  recovery: {
    name: "recovery",
    label: "함께 극복하기",
    emoji: "💪",
    endpoint: "/api/v1/board/recovery",
    description: "재활 과정에서의 다양한 치료 경험을 공유하는 공간",
    children: [
      {
        name: "occupational",
        label: "작업치료",
        emoji: "👐",
        endpoint: "/api/v1/board/recovery/occupational",
      },
      {
        name: "physical",
        label: "물리치료",
        emoji: "🏋️‍♂️",
        endpoint: "/api/v1/board/recovery/physical",
      },
      {
        name: "speech",
        label: "언어치료",
        emoji: "🗣️",
        endpoint: "/api/v1/board/recovery/speech",
      },
    ],
  },
} as const;
