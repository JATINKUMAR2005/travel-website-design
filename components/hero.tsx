export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 animate-in fade-in duration-700">
        <h1 className="text-balance text-3xl md:text-5xl font-semibold tracking-tight">
          Explore the world with confidence
        </h1>
        <p className="mt-3 max-w-prose text-pretty text-muted-foreground">
          Curated destinations, practical travel tips, and inspiring journeys—everything you need to plan your next
          adventure.
        </p>
        <div className="mt-6">
          <a
            href="/about"
            className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}
