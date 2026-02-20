export default function BrutalistBlog() {
  const posts = [
    { title: "On the nature of simplicity", date: "2024-01-15", slug: "simplicity" },
    { title: "Building with constraints", date: "2024-01-08", slug: "constraints" },
    { title: "The terminal aesthetic", date: "2024-01-01", slug: "terminal" },
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-16 border-b-2 border-green-400 pb-4">
          <pre className="text-sm mb-2">
{`┌─────────────────────────────────────┐
│ yabalaban@terminal:~$              │
└─────────────────────────────────────┘`}
          </pre>
          <h1 className="text-2xl mb-2">&gt; YOUR_NAME</h1>
          <p className="text-sm opacity-75">developer / writer / thinker</p>
        </header>

        {/* Navigation */}
        <nav className="mb-12 flex gap-6 text-sm">
          <a href="#" className="hover:bg-green-400 hover:text-black px-2 py-1 transition-colors">
            [posts]
          </a>
          <a href="#" className="hover:bg-green-400 hover:text-black px-2 py-1 transition-colors">
            [about]
          </a>
          <a href="#" className="hover:bg-green-400 hover:text-black px-2 py-1 transition-colors">
            [contact]
          </a>
        </nav>

        {/* Posts */}
        <main>
          <div className="mb-6">
            <span className="text-sm opacity-75">$ ls -la posts/</span>
          </div>

          <div className="space-y-6">
            {posts.map((post, i) => (
              <article
                key={post.slug}
                className="border-l-2 border-green-400 pl-4 hover:bg-green-400 hover:bg-opacity-10 p-4 -ml-4 transition-colors cursor-pointer"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-xs opacity-50">#{String(i + 1).padStart(2, '0')}</span>
                  <time className="text-xs opacity-75">{post.date}</time>
                </div>
                <h2 className="text-lg">
                  <a href={`#${post.slug}`} className="hover:underline">
                    &gt; {post.title}
                  </a>
                </h2>
              </article>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-green-400 border-opacity-30 text-xs opacity-50">
          <p>█ cursor blinking...</p>
        </footer>
      </div>
    </div>
  );
}
