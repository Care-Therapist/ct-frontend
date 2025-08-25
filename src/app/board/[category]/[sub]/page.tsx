import { boardCategories } from "@/config/boardConfig";
import BoardView from "@/sections/view/BoardView";

interface SubPageProps {
  params: { category: string; sub: string };
}

export default async function SubBoardPage({ params }: SubPageProps) {
  const categoryConfig = boardCategories[params.category as keyof typeof boardCategories];
  const subConfig = categoryConfig?.children.find((c) => c.name === params.sub);

  if (!subConfig) {
    return <div className="p-10">존재하지 않는 게시판입니다 😢</div>;
  }

  const res = await fetch(`{process.env.API_URL}${subConfig.endpoint}`, 
    // {cache: "no-store"}
  )
  const posts = await res.json();

  return <BoardView title={`${categoryConfig.name} - ${subConfig.label}`} posts={posts} />;
}
