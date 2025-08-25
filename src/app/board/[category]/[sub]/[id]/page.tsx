import { boardCategories } from "@/config/boardConfig";
import BoardDetailView from "@/sections/view/BoardDetailView";

interface DetailPageProps {
  params: { category: string; sub: string; id: string };
}

export default function PostDetailPage({ params }: DetailPageProps) {
  const categoryConfig = boardCategories[params.category as keyof typeof boardCategories];
  const subConfig = categoryConfig?.children.find((c) => c.name === params.sub);

  if (!subConfig) {
    return <div className="p-10">존재하지 않는 게시판입니다 😢</div>;
  }

  // 더미 데이터 (나중에 API 연결)
  const posts = {
    "1": {
      title: `[${subConfig.label}] 첫 번째 글`,
      author: "홍길동",
      date: "2025.08.22",
      content: "이것은 더미 상세 콘텐츠입니다.",
    },
    "2": {
      title: `[${subConfig.label}] 두 번째 글`,
      author: "김철수",
      date: "2025.08.21",
      content: "이것도 더미 상세 콘텐츠...",
    },
  };

  return (
    <BoardDetailView
      id={params.id}
      category={subConfig.label}
      posts={posts}
      backHref={`/board/${params.category}/${params.sub}`}
    />
  );
}
