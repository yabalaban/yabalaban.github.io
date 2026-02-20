import { getPostData, getAllPostSlugs } from '@/lib/posts';

// Generate static paths for all posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-mono">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back link */}
        <a
          href="/editorial"
          className="inline-block mb-8 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          ← Back
        </a>

        {/* Article header */}
        <article>
          <header className="mb-8 pb-6 border-b border-neutral-200">
            <time className="block text-xs text-neutral-400 mb-3">
              {new Date(postData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <h1 className="text-2xl font-normal">
              {postData.title}
            </h1>
          </header>

          {/* Article content */}
          <div
            className="prose prose-sm max-w-none"
            style={{
              fontSize: '0.9rem',
              lineHeight: 1.6,
              color: '#262626'
            }}
            dangerouslySetInnerHTML={{ __html: postData.content || '' }}
          />
        </article>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-neutral-200">
          <a
            href="/editorial"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            ← Back
          </a>
        </footer>
      </div>
    </div>
  );
}
