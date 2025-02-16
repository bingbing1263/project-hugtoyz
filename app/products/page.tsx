import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const products = [
  {
    id: 1,
    category: "plush",
    name: "Cuddly Bear",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=1974&auto=format&fit=crop",
    description: "A soft and huggable teddy bear, perfect for bedtime cuddles.",
  },
  {
    id: 2,
    category: "plush",
    name: "Rainbow Unicorn",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1558679908-541bcf1249ff?q=80&w=2070&auto=format&fit=crop",
    description: "Magical unicorn plush with rainbow mane and sparkly details.",
  },
  {
    id: 3,
    category: "educational",
    name: "Learning Blocks",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=2075&auto=format&fit=crop",
    description: "Colorful blocks for learning shapes, colors, and numbers.",
  },
  {
    id: 4,
    category: "educational",
    name: "Science Kit",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1533279443086-d1c19a186416?q=80&w=1989&auto=format&fit=crop",
    description: "Hands-on science experiments for young minds.",
  },
]

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="text-lg text-muted-foreground">
          Discover our collection of carefully crafted toys that bring joy and learning to children.
        </p>
      </div>

      <div className="mb-8 flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-9"
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="plush">Plush Toys</TabsTrigger>
          <TabsTrigger value="educational">Educational</TabsTrigger>
          <TabsTrigger value="action">Action Figures</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-semibold">{product.price}</span>
                    <Button size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}