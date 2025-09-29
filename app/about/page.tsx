export default function AboutPage() {
  return (
    <main role="main">
      <section className="relative">
        <div
          className="h-56 w-full bg-center bg-cover"
          style={{
            backgroundImage: "url('/mountains-at-sunrise.jpg')",
          }}
          aria-hidden="true"
        />
        <div className="mx-auto -mt-10 max-w-6xl px-4">
          <div className="rounded-md border border-border bg-card p-6 md:p-8 shadow-sm">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">About Travelogue</h1>
            <p className="mt-3 text-muted-foreground text-pretty">
              Travelogue is your companion for discovering inspiring places and planning meaningful journeys. We curate
              destinations and tips so you can focus on the experience.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-8">
        <div className="grid gap-2">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="text-muted-foreground">
            To make travel easier, more accessible, and more enriching through clear guidance and carefully curated
            recommendations.
          </p>
        </div>

        <div className="grid gap-2">
          <h2 className="text-xl font-semibold">Our Vision</h2>
          <p className="text-muted-foreground">
            A world where every traveler feels confident exploring new places while respecting local cultures and
            environments.
          </p>
        </div>

        <div className="grid gap-2">
          <h2 className="text-xl font-semibold">Why Choose Us</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Curated guides that save you time</li>
            <li>Balanced, trustworthy recommendations</li>
            <li>Mobile-first, accessible design insights</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
