"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "tacos", name: "Tacos", icon: "🌮" },
  { id: "enchiladas", name: "Enchiladas", icon: "🫔" },
  { id: "quesadillas", name: "Quesadillas", icon: "🧀" },
  { id: "bebidas", name: "Bebidas", icon: "🍹" },
  { id: "postres", name: "Postres", icon: "🍮" },
]

const menuItems = {
  tacos: [
    {
      name: "Tacos al Pastor",
      price: "$12.99",
      desc: "Cerdo marinado en achiote, piña, cilantro y cebolla",
      image: "/tacos-al-pastor-with-pineapple-cilantro.jpg",
    },
    {
      name: "Tacos de Carnitas",
      price: "$13.99",
      desc: "Cerdo confitado, salsa verde, cebolla encurtida",
      image: "/carnitas-tacos-with-green-salsa.jpg",
    },
    {
      name: "Tacos de Birria",
      price: "$14.99",
      desc: "Res estofada en chile guajillo, consomé aparte",
      image: "/birria-tacos-with-consomme-red-broth.jpg",
    },
    {
      name: "Tacos de Pescado",
      price: "$15.99",
      desc: "Pescado empanizado, chipotle, col morada",
      image: "/fish-tacos-with-cabbage-and-chipotle.jpg",
    },
  ],
  enchiladas: [
    {
      name: "Enchiladas Verdes",
      price: "$16.99",
      desc: "Pollo, salsa de tomatillo, crema, queso fresco",
      image: "/green-enchiladas-with-cream-and-cheese.jpg",
    },
    {
      name: "Enchiladas Rojas",
      price: "$16.99",
      desc: "Res deshebrada, salsa de chile rojo, cebolla",
      image: "/red-enchiladas-with-beef-and-onion.jpg",
    },
    {
      name: "Enchiladas Suizas",
      price: "$17.99",
      desc: "Pollo, salsa cremosa de jalapeño, gratinadas",
      image: "/suiza-enchiladas-with-melted-cheese.jpg",
    },
    {
      name: "Enchiladas de Mole",
      price: "$18.99",
      desc: "Pollo, mole poblano tradicional, ajonjolí",
      image: "/mole-enchiladas-with-sesame-seeds.jpg",
    },
  ],
  quesadillas: [
    {
      name: "Quesadilla de Queso",
      price: "$9.99",
      desc: "Queso Oaxaca derretido, tortilla de maíz",
      image: "/cheese-quesadilla-melted-oaxaca.jpg",
    },
    {
      name: "Quesadilla de Pollo",
      price: "$12.99",
      desc: "Pollo a la plancha, queso, pico de gallo",
      image: "/chicken-quesadilla-with-pico-de-gallo.jpg",
    },
    {
      name: "Quesadilla de Flor de Calabaza",
      price: "$13.99",
      desc: "Flor de calabaza, epazote, queso",
      image: "/squash-blossom-quesadilla-traditional-mexican.jpg",
    },
    {
      name: "Quesadilla de Champiñones",
      price: "$12.99",
      desc: "Champiñones salteados, queso, chile poblano",
      image: "/mushroom-quesadilla-with-poblano-pepper.jpg",
    },
  ],
  bebidas: [
    {
      name: "Agua de Horchata",
      price: "$4.99",
      desc: "Arroz, canela, vainilla, almendra",
      image: "/horchata-mexican-rice-drink-white.jpg",
    },
    {
      name: "Agua de Jamaica",
      price: "$4.99",
      desc: "Flor de jamaica, azúcar, limón",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Margarita Clásica",
      price: "$10.99",
      desc: "Tequila, triple sec, limón, sal",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Michelada",
      price: "$8.99",
      desc: "Cerveza, jugo de tomate, chile, limón",
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
  postres: [
    {
      name: "Churros con Chocolate",
      price: "$7.99",
      desc: "Churros calientes, chocolate mexicano",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Flan Napolitano",
      price: "$6.99",
      desc: "Flan cremoso, caramelo, canela",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Tres Leches",
      price: "$8.99",
      desc: "Bizcocho, tres leches, crema batida",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Helado de Mango",
      price: "$5.99",
      desc: "Helado artesanal, mango fresco, chamoy",
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("tacos")

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-semibold">Nuestro Menú</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Sabores que Enamoran
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Explora nuestra selección de platillos tradicionales mexicanos, preparados con ingredientes frescos y
            recetas que han pasado de generación en generación.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium transition-all",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80",
              )}
            >
              <span className="text-xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div
              key={item.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {item.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
