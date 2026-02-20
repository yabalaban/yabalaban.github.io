export default function EditorialBlog() {
  const posts = [
    {
      title: "On the nature of simplicity",
      date: "January 15, 2024",
      excerpt: "Exploring how constraints breed creativity and why less is often more in both design and life.",
      slug: "simplicity"
    },
    {
      title: "Building with constraints",
      date: "January 8, 2024",
      excerpt: "The beauty of working within boundaries and how limitations can unlock unexpected solutions.",
      slug: "constraints"
    },
    {
      title: "The terminal aesthetic",
      date: "January 1, 2024",
      excerpt: "A meditation on brutalist design, raw interfaces, and the poetry of command lines.",
      slug: "terminal"
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="max-w-2xl mx-auto px-8 py-20">
        {/* Header */}
        <header className="mb-32 text-center">
          <h1 className="text-5xl mb-6" style={{ fontFamily: 'Georgia, Garamond, serif', fontWeight: 400, letterSpacing: '-0.02em' }}>
            Your Name
          </h1>
          <p className="text-sm tracking-wider uppercase text-neutral-500" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.15em' }}>
            Essays & Thoughts
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-24 flex justify-center gap-12 text-sm">
          <a
            href="#"
            className="text-neutral-600 hover:text-neutral-900 transition-colors border-b border-transparent hover:border-neutral-900 pb-1"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Writing
          </a>
          <a
            href="#"
            className="text-neutral-600 hover:text-neutral-900 transition-colors border-b border-transparent hover:border-neutral-900 pb-1"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            About
          </a>
          <a
            href="#"
            className="text-neutral-600 hover:text-neutral-900 transition-colors border-b border-transparent hover:border-neutral-900 pb-1"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Archive
          </a>
        </nav>

        {/* Posts */}
        <main className="space-y-20">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <time className="block text-xs tracking-wider uppercase text-neutral-400 mb-4" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.12em' }}>
                {post.date}
              </time>
              <h2 className="text-3xl mb-4 group-hover:text-neutral-600 transition-colors" style={{ fontFamily: 'Georgia, serif', fontWeight: 400, lineHeight: 1.3 }}>
                <a href={`#${post.slug}`}>
                  {post.title}
                </a>
              </h2>
              <p className="text-neutral-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {post.excerpt}
              </p>
              <a
                href={`#${post.slug}`}
                className="inline-block mt-6 text-sm text-neutral-500 hover:text-neutral-900 transition-colors border-b border-neutral-300 hover:border-neutral-900"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Read more →
              </a>
            </article>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-neutral-200 text-center">
          <p className="text-xs text-neutral-400" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.1em' }}>
            © 2024
          </p>
        </footer>
      </div>
    </div>
  );
}
