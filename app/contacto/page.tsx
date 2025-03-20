import Image from "next/image"
import Link from "next/link"
import { Camera, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import MobileNav from "../../components/mobile-nav"

export default function Contacto() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="h-6 w-6 text-primary" />
            <Link href="/" className="text-xl font-bold">
              Gastro Mondo
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="/servicios" className="text-sm font-medium transition-colors hover:text-primary">
              Servicios
            </Link>
            <Link href="/precios" className="text-sm font-medium transition-colors hover:text-primary">
              Precios
            </Link>
            <Link href="/contacto" className="text-sm font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex bg-primary text-black">
              <Link href="/contacto">Contactar</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Contact Header */}
        <section className="bg-tertiary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contacto</div>
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl font-title">¿Hablamos de tu proyecto?</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-lg font-body">
                Estoy aquí para ayudarte a crear imágenes impactantes que destaquen tu negocio gastronómico.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-title">
                  ¿Listo para elevar la imagen de tu negocio?
                </h2>
                <p className="text-muted-foreground md:text-lg font-body">
                  Contacta conmigo para discutir tu proyecto y cómo puedo ayudarte a destacar en el competitivo mundo
                  gastronómico.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium font-subtitle">Teléfono</p>
                      <p className="text-sm text-muted-foreground font-body">+34 600 123 456</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium font-subtitle">Email</p>
                      <p className="text-sm text-muted-foreground font-body">info@gastromondo.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium font-subtitle">Ubicación</p>
                      <p className="text-sm text-muted-foreground font-body">Barcelona, España</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="mb-3 text-lg font-medium font-subtitle">Horario de trabajo</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground font-body">Lunes - Viernes</span>
                      <span className="text-sm font-body">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground font-body">Sábado</span>
                      <span className="text-sm font-body">10:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground font-body">Domingo</span>
                      <span className="text-sm font-body">Cerrado</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex space-x-4">
                  <Link href="#" className="rounded-full bg-primary/10 p-2 text-secondary hover:bg-primary/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="rounded-full bg-primary/10 p-2 text-secondary hover:bg-primary/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="rounded-full bg-primary/10 p-2 text-secondary hover:bg-primary/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-bold font-subtitle">Envíame un mensaje</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-body"
                      >
                        Nombre
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-primary bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-body"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-body"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-primary bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-body"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-body"
                    >
                      Asunto
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-primary bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-body"
                      placeholder="Asunto del mensaje"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-body"
                    >
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-primary bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-body"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="menu">Fotografía de Menús</option>
                      <option value="social">Fotografía para Redes Sociales</option>
                      <option value="ambiente">Fotografía de Ambientes</option>
                      <option value="editorial">Fotografía Editorial</option>
                      <option value="arte">Dirección de Arte</option>
                      <option value="estilismo">Estilismo Culinario</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-body"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-primary bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-body"
                      placeholder="Escribe tu mensaje aquí"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-black">
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-tertiary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">FAQs</div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-title">Preguntas frecuentes</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg font-body">
                Respuestas a las dudas más comunes sobre mis servicios de fotografía gastronómica.
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-body">¿Cuánto tiempo dura una sesión fotográfica?</AccordionTrigger>
                  <AccordionContent className="font-body">
                    La duración de una sesión fotográfica depende del paquete contratado y del número de platos o
                    espacios a fotografiar. Las sesiones básicas duran aproximadamente 2 horas, las profesionales 4
                    horas, y las premium pueden extenderse durante todo un día. Siempre planificamos el tiempo necesario
                    para capturar todas las imágenes con la calidad que merecen.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-body">
                    ¿Necesito preparar algo para la sesión fotográfica?
                  </AccordionTrigger>
                  <AccordionContent className="font-body">
                    Para sesiones de fotografía de platos, es recomendable tener los ingredientes frescos y preparados.
                    En el caso de fotografía de ambientes, es importante que el espacio esté limpio y ordenado. Antes de
                    cada sesión, te enviaré una lista de recomendaciones específicas para tu proyecto. En los paquetes
                    que incluyen estilismo culinario, me encargaré de la preparación visual de los platos.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-body">¿Cuántas fotografías recibiré?</AccordionTrigger>
                  <AccordionContent className="font-body">
                    El número de fotografías finales depende del paquete contratado: el paquete Básico incluye hasta 10
                    fotografías, el Profesional hasta 20, y el Premium hasta 30. Todas las imágenes se entregan editadas
                    y optimizadas para su uso en diferentes medios. Si necesitas un número específico de imágenes,
                    podemos crear un paquete personalizado para ti.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="font-body">¿Cómo se realiza el pago?</AccordionTrigger>
                  <AccordionContent className="font-body">
                    Para reservar la fecha de la sesión, se requiere un depósito del 50% del total. El 50% restante se
                    abona tras la entrega de las imágenes finales. Acepto transferencias bancarias y pagos con tarjeta.
                    Para proyectos continuados o de gran envergadura, podemos establecer un plan de pagos personalizado.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="font-body">¿Trabajas fuera de Barcelona?</AccordionTrigger>
                  <AccordionContent className="font-body">
                    Sí, realizo sesiones fotográficas en toda España y, para proyectos especiales, también a nivel
                    internacional. Para sesiones fuera de Barcelona ciudad, se aplica un cargo adicional por
                    desplazamiento de €0,30/km más gastos de alojamiento si fuera necesario. Para proyectos
                    internacionales, se presupuestan los gastos de viaje de manera personalizada.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="font-body">¿Qué derechos tengo sobre las fotografías?</AccordionTrigger>
                  <AccordionContent className="font-body">
                    Recibirás una licencia de uso comercial para utilizar las imágenes en tu negocio, web, redes
                    sociales y material promocional. Los derechos de autor permanecen con el fotógrafo, lo que es
                    práctica estándar en la industria. Si necesitas derechos exclusivos o uso para campañas
                    publicitarias de gran escala, podemos acordar condiciones específicas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="font-body">
                    ¿Puedo solicitar cambios en las fotografías?
                  </AccordionTrigger>
                  <AccordionContent className="font-body">
                    Sí, todos los paquetes incluyen una ronda de revisiones para realizar ajustes menores en las
                    imágenes seleccionadas. Para ediciones más complejas o retoques avanzados, ofrezco este servicio con
                    un coste adicional de €50 por imagen. Mi objetivo es que quedes completamente satisfecho con el
                    resultado final.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground font-body">
                ¿No encuentras respuesta a tu pregunta?{" "}
                <Link href="#" className="font-medium text-primary hover:underline font-body">
                  Contáctame directamente
                </Link>{" "}
                y estaré encantado de ayudarte.
              </p>
            </div>
          </div>
        </section>

        {/* Map or Location Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Ubicación</div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-title">Dónde encontrarme</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg font-body">
                Mi estudio está ubicado en el centro de Barcelona, con fácil acceso en transporte público.
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-lg border">
              <div className="aspect-video w-full">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Mapa de ubicación"
                  width={1200}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold font-subtitle">Dirección</h3>
                  <p className="mt-2 text-sm text-muted-foreground font-body">
                    Calle Ejemplo, 123
                    <br />
                    08001 Barcelona
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-secondary"
                    >
                      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                      <path d="M15 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
                      <path d="M9 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                      <path d="M15 21a4 4 0 1 0 0-8 4 4 0 0 0 0-8Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold font-subtitle">Transporte</h3>
                  <p className="mt-2 text-sm text-muted-foreground font-body">
                    Metro: Línea 3 (Estación Ejemplo)
                    <br />
                    Bus: Líneas 45, 47, 120
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-secondary"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold font-subtitle">Aparcamiento</h3>
                  <p className="mt-2 text-sm text-muted-foreground font-body">
                    Parking público a 100m
                    <br />
                    Zona azul disponible en la calle
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Camera className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Gastro Mondo</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground font-body">
                Fotografía gastronómica profesional para restaurantes, chefs y empresas del sector alimentario.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium font-subtitle">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground font-body">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-sm text-muted-foreground hover:text-foreground font-body">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/precios" className="text-sm text-muted-foreground hover:text-foreground font-body">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-sm text-muted-foreground hover:text-foreground font-body">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium font-subtitle">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/servicios" className="text-sm text-muted-foreground hover:text-foreground font-body">
                    Fotografía de Menús
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-sm text-muted-foreground hover:text-foreground font-body">
                    Fotografía para Redes Sociales
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-sm text-muted-foreground hover:text-foreground font-body">
                    Fotografía de Ambientes
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-sm text-muted-foreground hover:text-foreground font-body">
                    Fotografía Editorial
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-sm text-muted-foreground hover:text-foreground font-body">
                    Estilismo Culinario
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium font-subtitle">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground font-body">+34 600 123 456</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground font-body">info@gastromondo.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground font-body">Barcelona, España</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-muted-foreground md:text-left font-body">
                &copy; {new Date().getFullYear()} Gastro Mondo. Todos los derechos reservados.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-body">
                  Política de privacidad
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-body">
                  Términos y condiciones
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

