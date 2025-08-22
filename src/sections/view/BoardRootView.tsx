"use client";

import Link from "next/link";

interface BoardRootViewProps {
  title: string; // 루트 뷰 제목
  description?: string; // 설명 문구
  boards: { href: string; label: string; emoji?: string }[]; // 하위 게시판 목록
}

export default function BoardRootView({ title, description, boards }: BoardRootViewProps) {
  return (
    <main className="w-full max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {description && <p className="mb-6 text-gray-600">{description}</p>}

      <ul className="space-y-4">
        {boards.map((board) => (
          <li key={board.href}>
            <Link
              href={board.href}
              className="block p-4 border rounded-md hover:bg-gray-50"
            >
              {board.emoji && <span className="mr-2">{board.emoji}</span>}
              {board.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
