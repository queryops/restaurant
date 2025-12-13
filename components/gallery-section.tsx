"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  { src: "/placeholder.svg?height=400&width=600", alt: "Interior del restaurante" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Chef preparando tacos" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Variedad de platillos" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Cócteles y bebidas" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Postres tradicionales" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Mariachi en vivo" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Celebraciones familiares" },
  { src: "/placeholder.svg?height=400&width=400", alt: "Ingredientes frescos" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galeria" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-semibold">Galería</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Momentos Inolvidables
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Descubre el ambiente único de La Casa del Sol, donde la tradición mexicana cobra vida en cada rincón.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-xl cursor-pointer group",
                index === 0 || index === 3 || index === 6 ? "md:col-span-2" : "",
              )}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-10 w-10" />
          </button>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Imagen ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
