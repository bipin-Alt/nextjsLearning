export default function Loading() {
  return (
    <main className="px-6 py-10 max-w-5xl mx-auto">
      <div className="space-y-6">
        <div className="h-10 w-2/5 rounded-full bg-slate-200" />
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="h-72 rounded-3xl bg-slate-200" />
          <div className="space-y-4">
            <div className="h-16 rounded-3xl bg-slate-200" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="h-20 rounded-3xl bg-slate-200" />
              <div className="h-20 rounded-3xl bg-slate-200" />
            </div>
            <div className="h-24 rounded-3xl bg-slate-200" />
          </div>
        </div>
      </div>
    </main>
  );
}
