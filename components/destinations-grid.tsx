"use client"

import { useMemo, useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { DestinationCard } from "@/components/destination-card"

type Destination = {
  title: string
  description: string
  imageSrc: string
  category: "Beach" | "City" | "Nature" | "Culture"
}

const DESTINATIONS: Destination[] = [
  // Beach
  {
    title: "Santorini, Greece",
    description: "White-washed villages perched on cliffs, caldera views, and golden sunsets over the Aegean.",
    imageSrc: "/santorini-clifftop-village.jpg",
    category: "Beach",
  },
  {
    title: "Bali, Indonesia",
    description: "Lush rice terraces, serene temples, and surf-friendly beaches for tropical escapes.",
    imageSrc: "/bali-beach.jpg",
    category: "Beach",
  },
  {
    title: "Maldives",
    description: "Crystal-clear lagoons, overwater villas, and vibrant coral reefs ideal for snorkeling.",
    imageSrc: "/maldives-overwater.jpg",
    category: "Beach",
  },

  // City
  {
    title: "Paris, France",
    description: "Eiffel Tower vistas, café culture, and world-class art from the Louvre to the Seine.",
    imageSrc: "/paris-eiffel.jpg",
    category: "City",
  },
  {
    title: "New York City, USA",
    description: "Iconic skyline, Broadway shows, and diverse neighborhoods alive day and night.",
    imageSrc: "/newyork-skyline.jpg",
    category: "City",
  },
  {
    title: "Rome, Italy",
    description: "Ancient wonders meet vibrant street life—Colosseum, piazzas, and unforgettable cuisine.",
    imageSrc: "/rome-colosseum.jpg",
    category: "City",
  },

  // Nature
  {
    title: "Banff, Canada",
    description: "Turquoise lakes, alpine peaks, and scenic trails across the Canadian Rockies.",
    imageSrc: "/banff-lake-mountains.jpg",
    category: "Nature",
  },
  {
    title: "Reykjavík, Iceland",
    description: "Gateway to glaciers and geothermal spas, with northern lights in winter months.",
    imageSrc: "/reykjavik-aurora.jpg",
    category: "Nature",
  },
  {
    title: "Machu Picchu, Peru",
    description: "Misty mountain citadel of the Inca, reached by breathtaking hikes or scenic trains.",
    imageSrc: "/machu-picchu.jpg",
    category: "Nature",
  },

  // Culture
  {
    title: "Kyoto, Japan",
    description: "Historic temples, tea houses, and tranquil gardens in Japan’s cultural heart.",
    imageSrc: "/kyoto-temple-autumn.png",
    category: "Culture",
  },
  {
    title: "Marrakech, Morocco",
    description: "Labyrinthine souks, ornate riads, and the colors and spices of Jemaa el-Fnaa.",
    imageSrc: "/marrakech-souk.jpg",
    category: "Culture",
  },
  {
    title: "Sydney, Australia",
    description: "Harbor city with the Opera House, coastal walks, and an easy-going outdoor lifestyle.",
    imageSrc: "/sydney-opera.jpg",
    category: "Culture",
  },
]

const CATEGORIES = ["All", "Beach", "City", "Nature", "Culture"] as const
type Category = (typeof CATEGORIES)[number]

export function DestinationsGrid() {
  const [category, setCategory] = useState<Category>("All")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return DESTINATIONS.filter((d) => {
      const matchCategory = category === "All" ? true : d.category === category
      const matchQuery = q.length === 0 || d.title.toLowerCase().includes(q) || d.description.toLowerCase().includes(q)
      return matchCategory && matchQuery
    })
  }, [category, query])

  return (
    <section aria-labelledby="explore" className="mx-auto max-w-6xl px-4 pb-16 md:pb-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="explore" className="text-xl md:text-2xl font-semibold tracking-tight">
            Explore places
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Filter by theme or search to find your next adventure.</p>
        </div>
        <div className="w-full md:w-80">
          <Input
            placeholder="Search destinations..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search destinations"
          />
        </div>
      </div>

      <div className="mt-4">
        <Tabs value={category} onValueChange={(v) => setCategory(v as Category)}>
          <TabsList className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <TabsTrigger key={c} value={c}>
                {c}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((d) => (
          <DestinationCard
            key={`${d.title}-${d.category}`}
            title={d.title}
            description={d.description}
            imageSrc={d.imageSrc}
          />
        ))}
      </div>
    </section>
  )
}
