"use client";

import Link from "next/link";

interface NoticeDetailViewProps {
  id: string;
}

type Notice = {
  title: string;
  date: string;
  content: string;
};

export default function NoticeDetailView({ id }: NoticeDetailViewProps) {
  // 더미 데이터
  const notices: Record<string, Notice> = {
  "1": {
    title: "🔔 서버 점검 안내",
    date: "2025.08.22",
    content: "2025년 8월 25일 새벽 2시 ~ 6시 서버 점검이 예정되어 있습니다.",
  },
  "2": {
    title: "🎉 신규 기능 업데이트 안내",
    date: "2025.08.15",
    content: "이번 업데이트에서는 새로운 게시판과 댓글 시스템이 추가됩니다.",
  },
  "3": {
    title: "📢 커뮤니티 가이드라인 변경",
    date: "2025.08.10",
    content: "건전한 커뮤니티를 위해 일부 가이드라인이 변경되었습니다.",
  },
};

const notice = notices[id];

  if (!notice) {
    return (
      <main className="w-full max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-xl font-bold">존재하지 않는 공지사항입니다 😢</h1>
        <Link href="/notice" className="text-blue-600 hover:underline mt-4 block">
          ← 공지사항 목록으로
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-2">{notice.title}</h1>
      <p className="text-gray-500 mb-6">{notice.date}</p>
      <article className="prose max-w-none mb-10">{notice.content}</article>
      <Link href="/notice" className="text-blue-600 hover:underline">
        ← 공지사항 목록으로
      </Link>
    </main>
  );
}
