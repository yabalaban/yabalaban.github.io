import { getSortedPostsData } from '@/lib/posts';

export default function EditorialBlog() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-mono">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-2xl mb-2 font-normal">
            Your Name
          </h1>
          <p className="text-sm text-neutral-500">
            Essays & Thoughts
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-12 flex gap-6 text-sm border-b border-neutral-200 pb-3">
          <a
            href="/"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Archive
          </a>
        </nav>

        {/* Posts */}
        <main className="space-y-10">
          {posts.map((post) => (
            <article key={post.slug} className="group border-b border-neutral-200 pb-10 last:border-0">
              <time className="block text-xs text-neutral-400 mb-2">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <h2 className="text-xl mb-3 group-hover:text-neutral-600 transition-colors">
                <a href={`/posts/${post.slug}`}>
                  {post.title}
                </a>
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                {post.excerpt}
              </p>
              <a
                href={`/posts/${post.slug}`}
                className="inline-block text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Read more →
              </a>
            </article>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-neutral-200 text-center">
          <p className="text-xs text-neutral-400">
            © 2024
          </p>
        </footer>
      </div>
    </div>
  );
}
