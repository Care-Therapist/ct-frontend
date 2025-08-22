"use client";

interface Post {
  id: string;
  title: string;
  author: string;
  date: string;
}

interface BoardViewProps {
  title: string;
  posts: Post[];
}

export default function BoardView({ title, posts }: BoardViewProps) {
  return (
    <main className="w-full max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded-md hover:bg-gray-50 cursor-pointer"
          >
            <div className="font-semibold">{post.title}</div>
            <div className="text-sm text-gray-500">
              작성자 {post.author} · {post.date}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
