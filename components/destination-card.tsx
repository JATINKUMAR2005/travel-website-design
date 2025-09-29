import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type DestinationCardProps = {
  title: string
  description: string
  imageSrc: string
}

export function DestinationCard({ title, description, imageSrc }: DestinationCardProps) {
  return (
    <Card className="h-full overflow-hidden transition-transform hover:-translate-y-0.5">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img src={imageSrc || "/placeholder.svg"} alt={`${title} scenic view`} className="h-full w-full object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
