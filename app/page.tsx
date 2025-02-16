import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-8">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555448248-2571daf6344b?q=80&w=2067&auto=format&fit=crop"
          alt="Colorful toys background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
            Toyz for Hugging
          </h1>
          <p className="max-w-[600px] text-lg text-white/90 md:text-xl">
            Discover our collection of huggable, lovable toys that bring joy and comfort to children worldwide.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/products">
              Explore Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">Featured Products</h2>
        <Carousel className="mx-auto max-w-5xl">
          <CarouselContent>
            {[
              {
                title: "Cuddly Bear",
                image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=1974&auto=format&fit=crop",
                price: "$29.99",
              },
              {
                title: "Rainbow Unicorn",
                image: "https://images.unsplash.com/photo-1558679908-541bcf1249ff?q=80&w=2070&auto=format&fit=crop",
                price: "$34.99",
              },
              {
                title: "Learning Blocks",
                image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=2075&auto=format&fit=crop",
                price: "$24.99",
              },
            ].map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent className="p-4">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
                    <p className="text-sm text-muted-foreground">{product.price}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Value Proposition */}
      <section className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Heart className="mb-4 h-12 w-12 text-pink-500" />
              <h3 className="mb-2 text-xl font-semibold">Made with Love</h3>
              <p className="text-sm text-muted-foreground">
                Each toy is crafted with care and attention to detail, ensuring the highest quality for your little ones.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Shield className="mb-4 h-12 w-12 text-green-500" />
              <h3 className="mb-2 text-xl font-semibold">Safe & Durable</h3>
              <p className="text-sm text-muted-foreground">
                All our toys meet the highest safety standards and are built to last through countless adventures.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Truck className="mb-4 h-12 w-12 text-blue-500" />
              <h3 className="mb-2 text-xl font-semibold">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Quick and reliable shipping to bring smiles to children's faces as soon as possible.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="container">
        <h2 className="mb-8 text-3xl font-bold">Latest News</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "New Collection Launch",
              date: "March 15, 2024",
              excerpt: "Introducing our latest collection of educational toys designed to make learning fun.",
            },
            {
              title: "Sustainability Initiative",
              date: "March 10, 2024",
              excerpt: "HugToyz commits to using eco-friendly materials in all new product lines.",
            },
            {
              title: "Community Impact",
              date: "March 5, 2024",
              excerpt: "How our toys are making a difference in children's development worldwide.",
            },
          ].map((post, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="mb-2 text-sm text-muted-foreground">{post.date}</p>
                <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>
                <Button variant="outline" asChild>
                  <Link href="/blog">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}