export default function NeoBlog() {
  const posts = [
    {
      title: "On the nature of simplicity",
      date: "2024.01.15",
      slug: "simplicity"
    },
    {
      title: "Building with constraints",
      date: "2024.01.08",
      slug: "constraints"
    },
    {
      title: "The terminal aesthetic",
      date: "2024.01.01",
      slug: "terminal"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 -z-10" />

      <div className="max-w-4xl mx-auto px-8 py-24">
        {/* Header */}
        <header className="mb-32">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h1 className="text-5xl font-extralight tracking-tight text-slate-900 mb-2">
                Your Name
              </h1>
              <div className="h-px w-16 bg-gradient-to-r from-slate-900 to-transparent" />
            </div>
            <nav className="flex gap-8 text-sm font-light">
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 transition-colors relative group"
              >
                Posts
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-slate-900 group-hover:w-full transition-all duration-300" />
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 transition-colors relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-slate-900 group-hover:w-full transition-all duration-300" />
              </a>
            </nav>
          </div>
          <p className="text-slate-600 font-light text-lg max-w-xl">
            Thoughts on design, development, and the spaces in between.
          </p>
        </header>

        {/* Posts */}
        <main className="space-y-1">
          {posts.map((post, i) => (
            <a
              key={post.slug}
              href={`#${post.slug}`}
              className="group flex items-baseline gap-8 py-6 px-6 -mx-6 hover:bg-slate-50 hover:bg-opacity-50 transition-all duration-200 rounded-lg"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <time className="text-sm font-light text-slate-400 tabular-nums min-w-[100px]">
                {post.date}
              </time>
              <h2 className="text-2xl font-light text-slate-900 group-hover:text-slate-600 transition-colors flex-1">
                {post.title}
              </h2>
              <span className="text-slate-300 group-hover:text-slate-600 transition-all duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-slate-100">
          <div className="flex justify-between items-center text-sm font-light text-slate-400">
            <p>© 2024</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-600 transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-slate-600 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-slate-600 transition-colors">
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
