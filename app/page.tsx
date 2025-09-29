import { Hero } from "@/components/hero"
import { DestinationsGrid } from "@/components/destinations-grid"
import { IndiaExplorer } from "@/components/india-explorer"

export default function HomePage() {
  return (
    <main role="main">
      <Hero />
      <DestinationsGrid />
      <IndiaExplorer />
    </main>
  )
}
