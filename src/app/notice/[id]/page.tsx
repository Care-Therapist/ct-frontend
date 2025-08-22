import NoticeDetailView from "@/sections/view/NoticeDetailView";

interface NoticeDetailPageProps {
  params: {
    id: string;
  };
}

export default function NoticeDetailPage({ params }: NoticeDetailPageProps) {
  const { id } = params;

  return <NoticeDetailView id={id} />;
}
