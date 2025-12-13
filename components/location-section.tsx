import { Clock, MapPin, Phone, Mail } from "lucide-react"

export function LocationSection() {
  return (
    <section id="ubicacion" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-semibold">Visítanos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Ubicación y Horarios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Te esperamos con los brazos abiertos en nuestra casa. ¡Ven a disfrutar de una experiencia gastronómica
            única!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661610845044!2d-99.16869708509427!3d19.427023645880843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sZocalo%2C%20Mexico%20City%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1637700000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de La Casa del Sol"
            />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-card rounded-xl p-6 shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground text-lg mb-1">Dirección</h3>
                <p className="text-muted-foreground">
                  Av. Reforma 123, Col. Centro
                  <br />
                  Ciudad de México, CDMX 06600
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-xl p-6 shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground text-lg mb-2">Horarios</h3>
                <div className="text-muted-foreground space-y-1">
                  <div className="flex justify-between">
                    <span>Lunes - Jueves:</span>
                    <span className="font-medium">12:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Viernes - Sábado:</span>
                    <span className="font-medium">12:00 PM - 12:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-medium">11:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card rounded-xl p-6 shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow">
              <div className="bg-accent/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground text-lg mb-1">Contacto</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Tel: +52 (55) 1234-5678</p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    info@lacasadelsol.mx
                  </p>
                </div>
              </div>
            </div>

            {/* Special Note */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎉</span>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Eventos Privados</h3>
                  <p className="text-muted-foreground text-sm">
                    ¿Planeas una celebración especial? Contamos con salón privado para hasta 50 personas. ¡Contáctanos
                    para más información!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
