export default function Home() {
  return (
    <main className="min-h-[70vh] p-8">
      <section className="rounded-xl border-4 border-[var(--foreground)] bg-[var(--background)] p-8 text-center shadow-[8px_8px_0_0_var(--foreground)]">
        <h1 className="text-4xl font-extrabold tracking-tight">Brouwerij Klein Zwitserland</h1>
        <p className="mt-4 text-lg">Fresh beers. Bold vibes. Secure checkout.</p>
        <a
          href="/shop"
          className="mt-6 inline-block rounded-xl bg-[color:var(--foreground)] px-6 py-3 font-semibold text-[color:var(--background)] transition-transform hover:-translate-y-0.5"
        >
          Shop now
        </a>
      </section>
    </main>
  );
}
