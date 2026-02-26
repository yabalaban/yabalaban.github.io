import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen font-mono" style={{ background: 'rgb(var(--bg-primary))', color: 'rgb(var(--text-primary))' }}>
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgb(var(--text-primary)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--text-primary)) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 'var(--grid-opacity)'
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-20 pb-8" style={{ borderBottom: '1px solid rgb(var(--border-primary))' }}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12">
            {/* Left column */}
            <div>
              <h1 className="text-xl font-normal tracking-tight mb-3" style={{ color: 'rgb(var(--text-primary))' }}>
                Alexander Balaban
              </h1>
              <p className="text-xs mb-6" style={{ color: 'rgb(var(--text-tertiary))' }}>
                Software Engineer • Proud em-dash user (yes)
              </p>
              <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'rgb(var(--text-secondary))' }}>
                Random thoughts, code snippets, and memes.  
              </p>
            </div>

            {/* Right column - Links */}
            <div className="flex flex-col gap-1 text-xs">
              <a
                href="https://www.linkedin.com/in/yabalaban/"
                className="transition-colors px-3 py-1.5 border border-transparent rounded social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                → LinkedIn
              </a>
              <a
                href="https://x.com/yabalaban"
                className="transition-colors px-3 py-1.5 border border-transparent rounded social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                → X
              </a>
              <a
                href="mailto:hello@garagelabs.xyz"
                className="transition-colors px-3 py-1.5 border border-transparent rounded social-link"
              >
                → Email
              </a>
            </div>
          </div>
        </header>

        {/* Posts */}
        <main className="space-y-8">
          {posts.map((post, index) => (
            <article key={post.slug} className="group">
              <a href={`/posts/${post.slug}`} className="block border transition-all duration-200 p-6 post-card">
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-xs font-normal tabular-nums" style={{ color: 'rgb(var(--text-tertiary))' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <time className="block text-xs mb-2 font-normal" style={{ color: 'rgb(var(--text-tertiary))' }}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                      }).replace(/\//g, '.')}
                    </time>
                    <h2 className="text-base mb-2 transition-colors font-normal post-title">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgb(var(--text-secondary))' }}>
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="transition-colors text-xs post-arrow">
                    →
                  </span>
                </div>
              </a>
            </article>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-20 pt-8" style={{ borderTop: '1px solid rgb(var(--border-primary))' }}>
          <div className="flex justify-between items-center text-xs" style={{ color: 'rgb(var(--text-tertiary))' }}>
            <p></p>
            <p>GarageLabs © 2026</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
