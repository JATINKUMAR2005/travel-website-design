"use client"
import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Place = {
  id: string
  name: string
  region: string
  tag: "Heritage" | "Beach" | "Mountains" | "Spiritual" | "City" | "Nature"
  image: string
  blurb: string
}

const PLACES: Place[] = [
  {
    id: "agra-taj",
    name: "Taj Mahal",
    region: "Agra, Uttar Pradesh",
    tag: "Heritage",
    image: "/india/taj-mahal.jpg",
    blurb: "The ivory-white marble mausoleum on the banks of the Yamuna.",
  },
  {
    id: "jaipur-hawa",
    name: "Hawa Mahal",
    region: "Jaipur, Rajasthan",
    tag: "Heritage",
    image: "/india/jaipur-hawa-mahal.jpg",
    blurb: "The Palace of Winds with intricate pink sandstone facades.",
  },
  {
    id: "varanasi-ghats",
    name: "Ghats of Varanasi",
    region: "Varanasi, Uttar Pradesh",
    tag: "Spiritual",
    image: "/india/varanasi-ghats.jpg",
    blurb: "Ancient riverfront steps along the sacred Ganges.",
  },
  {
    id: "goa-beach",
    name: "Palolem Beach",
    region: "Goa",
    tag: "Beach",
    image: "/india/goa-beach.jpg",
    blurb: "Palm-fringed crescent beach with a laid-back vibe.",
  },
  {
    id: "ladakh-pangong",
    name: "Pangong Lake",
    region: "Ladakh",
    tag: "Mountains",
    image: "/india/ladakh-pangong.jpg",
    blurb: "High-altitude, color-shifting lake amid stark Himalayan vistas.",
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwaters",
    region: "Alleppey, Kerala",
    tag: "Nature",
    image: "/india/kerala-backwaters.jpg",
    blurb: "Serene canals and lagoons best explored by houseboat.",
  },
  {
    id: "hampi",
    name: "Hampi Temples",
    region: "Hampi, Karnataka",
    tag: "Heritage",
    image: "/india/hampi-temples.jpg",
    blurb: "Ruins of the Vijayanagara Empire set in a boulder-strewn landscape.",
  },
  {
    id: "udaipur-lake",
    name: "Lake Pichola",
    region: "Udaipur, Rajasthan",
    tag: "City",
    image: "/india/udaipur-lake.jpg",
    blurb: "Romantic lakeside palaces and ghats in the City of Lakes.",
  },
  {
    id: "mumbai-marine",
    name: "Marine Drive",
    region: "Mumbai, Maharashtra",
    tag: "City",
    image: "/india/mumbai-marine-drive.jpg",
    blurb: "Iconic Queen’s Necklace along the Arabian Sea.",
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    region: "Uttarakhand",
    tag: "Spiritual",
    image: "/india/rishikesh-ganges.jpg",
    blurb: "Yoga capital by the Ganges with suspension bridges and ashrams.",
  },
  {
    id: "darjeeling",
    name: "Darjeeling Tea Estates",
    region: "West Bengal",
    tag: "Mountains",
    image: "/india/darjeeling-tea.jpg",
    blurb: "Misty slopes with world-famous teas and Himalayan views.",
  },
]

const TAGS: Place["tag"][] = ["Heritage", "Beach", "Mountains", "Spiritual", "City", "Nature"]

export function IndiaExplorer() {
  const [q, setQ] = useState("")
  const [activeTag, setActiveTag] = useState<Place["tag"] | "All">("All")
  const [visibleCount, setVisibleCount] = useState(8)

  const filtered = useMemo(() => {
    const text = q.trim().toLowerCase()
    return PLACES.filter((p) => {
      const matchesText =
        !text ||
        p.name.toLowerCase().includes(text) ||
        p.region.toLowerCase().includes(text) ||
        p.blurb.toLowerCase().includes(text)
      const matchesTag = activeTag === "All" || p.tag === activeTag
      return matchesText && matchesTag
    })
  }, [q, activeTag])

  const shown = filtered.slice(0, visibleCount)
  const canShowMore = visibleCount < filtered.length

  return (
    <section aria-labelledby="india-heading" className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-6 md:mb-8">
          <h2 id="india-heading" className="text-balance text-2xl md:text-3xl font-semibold text-foreground">
            Explore India
          </h2>
          <p className="text-pretty text-muted-foreground mt-2">
            Discover calm beaches, spiritual towns, heritage marvels, and mountain escapes—curated for curious
            travelers.
          </p>
        </header>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search Indian places by name, region, or vibe"
            className="w-full md:max-w-md"
            aria-label="Search Indian places"
          />
          <div className="flex flex-wrap gap-2">
            <FilterPill label="All" active={activeTag === "All"} onClick={() => setActiveTag("All")} />
            {TAGS.map((t) => (
              <FilterPill key={t} label={t} active={activeTag === t} onClick={() => setActiveTag(t)} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {shown.map((p) => (
            <Card key={p.id} className="overflow-hidden bg-card border border-border hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3]">
                <img
                  src={p.image || "/placeholder.svg"}
                  alt={`${p.name} in ${p.region}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{p.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">{p.region}</p>
                <p className="text-sm mt-2">{p.blurb}</p>
                <div className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-xs text-accent-foreground border border-border">
                    {p.tag}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-muted-foreground mt-6">No places match your search. Try a different term or tag.</p>
        )}

        {canShowMore && (
          <div className="flex justify-center mt-8">
            <Button variant="default" onClick={() => setVisibleCount((c) => c + 6)}>
              Show more
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

function FilterPill(props: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-sm transition-colors",
        props.active
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-background text-foreground border-border hover:bg-muted",
      )}
      aria-pressed={props.active}
      aria-label={`Filter by ${props.label}`}
    >
      {props.label}
    </button>
  )
}
