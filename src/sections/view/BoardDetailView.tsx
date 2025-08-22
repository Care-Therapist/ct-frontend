"use client";

import Link from "next/link";

interface PostDetail {
  title: string;
  author: string;
  date: string;
  content: string;
}

interface BoardDetailViewProps {
  id: string;
  category: string;   // ex) "작업치료", "물리치료", "언어치료"
  posts: Record<string, PostDetail>;
  backHref: string;
}

export default function BoardDetailView({ id, category, posts, backHref }: BoardDetailViewProps) {
  const post = posts[id];

  if (!post) {
    return (
      <main className="w-full max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-xl font-bold">존재하지 않는 글입니다 😢</h1>
        <Link href={backHref} className="text-blue-600 hover:underline mt-4 block">
          ← {category} 목록으로
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-1">작성자 {post.author}</p>
      <p className="text-gray-500 mb-6">{post.date}</p>

      <article className="prose max-w-none mb-10">{post.content}</article>

      <Link href={backHref} className="text-blue-600 hover:underline">
        ← {category} 목록으로
      </Link>
    </main>
  );
}
