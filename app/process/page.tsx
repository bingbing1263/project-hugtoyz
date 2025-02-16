import Image from "next/image"
import { CheckCircle2, Lightbulb, Pencil, Settings, Truck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    icon: Lightbulb,
    title: "Ideation",
    description: "Our creative team brainstorms innovative toy concepts that combine fun with educational value.",
  },
  {
    icon: Pencil,
    title: "Design",
    description: "Expert designers create detailed sketches and 3D models, focusing on safety and aesthetics.",
  },
  {
    icon: Settings,
    title: "Production",
    description: "Using premium materials, our skilled craftspeople bring designs to life with meticulous attention to detail.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Control",
    description: "Rigorous testing ensures each toy meets our high standards for safety and durability.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Carefully packaged toys are shipped to bring joy to children around the world.",
  },
]

export default function ProcessPage() {
  return (
    <div className="container py-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Our Design & Production Process</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          From concept to creation, discover how we craft toys that inspire imagination and bring smiles to children's faces.
        </p>
      </div>

      <div className="relative mb-16">
        <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-border" />
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="flex-1">
                <Card>
                  <CardContent className="p-6">
                    <step.icon className="mb-4 h-8 w-8 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {index + 1}
              </div>
              <div className="flex-1" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Quality Assurance</h2>
          <p className="mb-6 text-muted-foreground">
            Every toy undergoes extensive testing to ensure it meets international safety standards and our own rigorous quality requirements.
          </p>
          <ul className="space-y-4">
            {[
              "Safety testing for all age groups",
              "Durability stress tests",
              "Non-toxic material certification",
              "Choking hazard prevention",
              "Quality control inspections",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop"
            alt="Quality control process"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}