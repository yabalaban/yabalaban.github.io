export default function Home() {
  const designs = [
    {
      name: "Brutalist Terminal",
      path: "/brutalist",
      description: "Raw, terminal-inspired with monospace fonts and green-on-black aesthetic",
      color: "bg-black text-green-400 border-green-400"
    },
    {
      name: "Editorial Typography",
      path: "/editorial",
      description: "Classic serif fonts with generous whitespace and refined layout",
      color: "bg-neutral-50 text-neutral-900 border-neutral-300"
    },
    {
      name: "Minimalist Cards",
      path: "/cards",
      description: "Clean card-based layout with subtle shadows and modern spacing",
      color: "bg-gray-50 text-gray-900 border-gray-300"
    },
    {
      name: "Neo-Minimalist",
      path: "/neo",
      description: "Contemporary design with subtle gradients and refined typography",
      color: "bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900 border-slate-300"
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-light mb-4">Personal Blog Design Options</h1>
          <p className="text-gray-600">Choose your aesthetic direction</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designs.map((design) => (
            <a
              key={design.path}
              href={design.path}
              className={`${design.color} p-8 rounded-lg border-2 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group`}
            >
              <h2 className="text-2xl font-medium mb-3 group-hover:underline">
                {design.name}
              </h2>
              <p className="text-sm opacity-75">
                {design.description}
              </p>
              <div className="mt-4 text-sm opacity-50">
                Click to preview →
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500">
          <p>Each design is fully implemented and ready to customize</p>
        </footer>
      </div>
    </div>
  );
}
