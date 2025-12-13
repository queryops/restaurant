"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "María González",
    role: "Cliente frecuente",
    image: "/placeholder.svg?height=80&width=80",
    text: "Los tacos al pastor son los mejores que he probado fuera de México. El ambiente es increíble y el servicio siempre excepcional. ¡Mi lugar favorito para celebrar!",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Food Blogger",
    image: "/placeholder.svg?height=80&width=80",
    text: "Como crítico gastronómico, puedo decir que La Casa del Sol ofrece una experiencia auténtica. Las enchiladas de mole son una obra maestra culinaria.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Organizadora de eventos",
    image: "/placeholder.svg?height=80&width=80",
    text: "Hemos celebrado varios cumpleaños aquí y siempre superan nuestras expectativas. El mariachi, la comida y el ambiente hacen cada evento memorable.",
    rating: 5,
  },
  {
    name: "Roberto Hernández",
    role: "Chef retirado",
    image: "/placeholder.svg?height=80&width=80",
    text: "Reconozco la autenticidad cuando la veo. Las técnicas tradicionales y los ingredientes de calidad se notan en cada platillo. Felicitaciones al equipo.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-8xl opacity-10">🌮</div>
      <div className="absolute bottom-10 right-10 text-8xl opacity-10">🌶️</div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm tracking-[0.2em] uppercase font-semibold">Testimonios</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">Lo que Dicen Nuestros Clientes</h2>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute inset-0 translate-x-10 pointer-events-none"
                }`}
              >
                <div className="text-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-accent object-cover"
                  />
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-primary-foreground/90 text-pretty">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-accent text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-accent scale-125"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
