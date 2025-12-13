"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/mexican-restaurant-interior-warm-lighting-tacos.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-pulse">🌵</div>
      <div className="absolute top-40 right-20 text-5xl opacity-20 animate-pulse delay-300">🌶️</div>
      <div className="absolute bottom-40 left-20 text-5xl opacity-20 animate-pulse delay-500">🎸</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-pulse delay-700">🪅</div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-block">
          <span className="text-accent text-lg tracking-[0.3em] uppercase font-medium">Auténtica Cocina Mexicana</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
          La Casa del Sol
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
          Descubre los sabores tradicionales de México en cada bocado. Una experiencia culinaria que despertará todos
          tus sentidos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full transition-transform hover:scale-105"
          >
            <a href="#menu">Ver Menú</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-foreground text-lg px-8 py-6 rounded-full transition-transform hover:scale-105"
          >
            <a href="#reservar">Reservar Mesa</a>
          </Button>
        </div>

        {/* Daily Special Badge */}
        <div className="mt-12 inline-flex items-center gap-3 bg-accent/90 text-accent-foreground px-6 py-3 rounded-full">
          <span className="text-2xl">🔥</span>
          <span className="font-medium">Especial del día: Tacos al Pastor con Piña</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#nosotros"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground animate-bounce"
      >
        <ChevronDown className="h-10 w-10" />
      </a>
    </section>
  )
}
