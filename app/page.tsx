export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">
          Gamma Partners
        </p>

        <h1 className="text-5xl font-bold mb-6">
          Relationship Intelligence Platform
        </h1>

        <p className="text-xl text-slate-300 mb-8">
          Build a clean relationship map, remember meaningful dates, and create
          personalized AI-powered cards for the people who matter most.
        </p>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-left">
          <h2 className="text-2xl font-semibold mb-4">
            eCard Prototype — Version 1
          </h2>

          <ul className="space-y-2 text-slate-300">
            <li>✓ Import contacts from Apple, Outlook, and Google exports</li>
            <li>✓ Detect duplicate contact records</li>
            <li>✓ Build golden contact cards</li>
            <li>✓ Identify birthdays, anniversaries, and missing data</li>
            <li>✓ Create personalized AI-generated cards</li>
          </ul>
        </div>
      </div>
    </main>
  );
}