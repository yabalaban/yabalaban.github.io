export default function CardBlog() {
  const posts = [
    {
      title: "On the nature of simplicity",
      date: "Jan 15, 2024",
      category: "Design",
      readTime: "5 min",
      slug: "simplicity"
    },
    {
      title: "Building with constraints",
      date: "Jan 8, 2024",
      category: "Development",
      readTime: "7 min",
      slug: "constraints"
    },
    {
      title: "The terminal aesthetic",
      date: "Jan 1, 2024",
      category: "Thoughts",
      readTime: "4 min",
      slug: "terminal"
    },
    {
      title: "Minimalism in code",
      date: "Dec 28, 2023",
      category: "Development",
      readTime: "6 min",
      slug: "minimalism"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <h1 className="text-4xl font-light mb-3 text-gray-900">Your Name</h1>
            <p className="text-gray-600 mb-6">Designer, developer, writer</p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Posts
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </header>

        {/* Posts Grid */}
        <main>
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6 px-1">
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`#${post.slug}`}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4 text-xs">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <time className="text-sm text-gray-500">{post.date}</time>
              </a>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <p className="text-sm text-gray-400">
            Built with Next.js • Hosted on GitHub Pages
          </p>
        </footer>
      </div>
    </div>
  );
}
