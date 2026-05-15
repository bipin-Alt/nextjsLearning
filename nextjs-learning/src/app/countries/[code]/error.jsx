"use client";

export default function Error({ error, reset }) {
  return (
    <main className="px-6 py-10 max-w-5xl mx-auto">
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-red-900 shadow-sm">
        <h1 className="text-3xl font-semibold mb-3">Something went wrong</h1>
        <p className="mb-4 text-slate-800">{error?.message ?? "Unable to load the country."}</p>
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex rounded-full bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
