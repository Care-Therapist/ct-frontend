"use client";

import Link from "next/link";

export default function NoticeView() {
  // 더미 데이터
  const notices = [
    { id: "1", title: "🔔 서버 점검 안내", date: "2025.08.22" },
    { id: "2", title: "🎉 신규 기능 업데이트 안내", date: "2025.08.15" },
    { id: "3", title: "📢 커뮤니티 가이드라인 변경", date: "2025.08.10" },
  ];

  return (
    <main className="w-full max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">공지사항</h1>
      <ul className="space-y-4">
        {notices.map((notice) => (
          <li key={notice.id}>
            <Link
              href={`/notice/${notice.id}`}
              className="block p-4 border rounded-md hover:bg-gray-50"
            >
              <div className="font-semibold">{notice.title}</div>
              <div className="text-sm text-gray-500">{notice.date}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
