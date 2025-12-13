"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" ref={sectionRef} className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <img
                src="/mexican-chef-preparing-traditional-food-kitchen.jpg"
                alt="Chef preparando comida tradicional mexicana"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">25+</div>
                <div className="text-sm opacity-90">Años de tradición</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-semibold">Nuestra Historia</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Tradición y Sabor en Cada Platillo
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Desde 1998, La Casa del Sol ha sido el hogar de la auténtica cocina mexicana en la ciudad. Nuestras
                recetas han pasado de generación en generación, preservando los sabores que nos conectan con nuestras
                raíces.
              </p>
              <p>
                Cada ingrediente es seleccionado cuidadosamente, desde los chiles importados de Oaxaca hasta el maíz
                nixtamalizado para nuestras tortillas hechas a mano. Creemos que la buena comida nace del amor y el
                respeto por la tradición.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { icon: "🌽", title: "Ingredientes Frescos", desc: "Selección diaria del mercado" },
                { icon: "👨‍🍳", title: "Chefs Expertos", desc: "Cocina tradicional mexicana" },
                { icon: "🏆", title: "Premiados", desc: "Reconocidos por la crítica" },
                { icon: "❤️", title: "Hecho con Amor", desc: "Recetas familiares" },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <div className="font-semibold text-foreground">{feature.title}</div>
                    <div className="text-sm text-muted-foreground">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
