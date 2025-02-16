import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Heart className="h-6 w-6 text-pink-500" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built with love by{" "}
            <Link
              href="/"
              className="font-medium underline underline-offset-4"
            >
              HugToyz
            </Link>
            . © 2024 All rights reserved.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <Link
              href="/privacy"
              className="text-sm underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm underline-offset-4 hover:underline"
            >
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}