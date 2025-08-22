import { boardCategories } from "@/config/boardConfig";
import BoardRootView from "@/sections/view/BoardRootView";

interface CategoryPageProps {
  params: { category: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryConfig = boardCategories[params.category as keyof typeof boardCategories];

  if (!categoryConfig) {
    return <div className="p-10">존재하지 않는 카테고리입니다 😢</div>;
  }

  return (
    <BoardRootView
      title={categoryConfig.name}
      description={categoryConfig.description}
      boards={categoryConfig.children.map((child) => ({
        href: `/board/${params.category}/${child.slug}`,
        label: child.label,
        emoji: child.emoji,
      }))}
    />
  );
}
