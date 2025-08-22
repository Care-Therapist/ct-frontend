import { boardCategories } from "@/config/boardConfig";
import BoardView from "@/sections/view/BoardView";

interface SubPageProps {
  params: { category: string; sub: string };
}

export default function SubBoardPage({ params }: SubPageProps) {
  const categoryConfig = boardCategories[params.category as keyof typeof boardCategories];
  const subConfig = categoryConfig?.children.find((c) => c.slug === params.sub);

  if (!subConfig) {
    return <div className="p-10">존재하지 않는 게시판입니다 😢</div>;
  }

  // 더미 데이터 (나중에 fetch로 교체)
  const posts = [
    { id: "1", title: `${subConfig.label} 게시판 첫 글`, author: "홍길동", date: "2025.08.22" },
    { id: "2", title: `${subConfig.label} 관련 경험담`, author: "김철수", date: "2025.08.21" },
  ];

  return <BoardView title={`${categoryConfig.name} - ${subConfig.label}`} posts={posts} />;
}
