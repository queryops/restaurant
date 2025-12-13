"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const phoneNumber = "525512345678"
  const message = encodeURIComponent("¡Hola! Me gustaría hacer un pedido o reservación en La Casa del Sol.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {isTooltipVisible && (
        <div className="absolute bottom-full right-0 mb-3 bg-card text-card-foreground p-4 rounded-xl shadow-xl w-64 animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={() => setIsTooltipVisible(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-sm mb-3">¿Tienes alguna pregunta o quieres hacer un pedido? ¡Escríbenos por WhatsApp!</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#25D366] text-white py-2 rounded-lg font-medium hover:bg-[#20bd5a] transition-colors"
          >
            Abrir Chat
          </a>
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setIsTooltipVisible(!isTooltipVisible)}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-110 animate-bounce"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    </div>
  )
}
