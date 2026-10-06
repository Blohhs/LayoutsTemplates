import Link from 'next/link';

interface Post {
  id: string;
  title: string;
}

export default function BlogPage() {
  const posts: Post[] = [
    { id: '1', title: 'Почему быть просто орехи завтра?' },
    { id: '2', title: 'Введение в App Router' },
    { id: '3', title: 'Layouts и Templates на практике' },
  ];

  return (
    <div>
      <h1>Блог</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '8px' }}>
            <Link href={`/blog/${post.id}`} style={{ color: '#1a7f8a' }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}