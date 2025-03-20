import Image from "next/image"
import Link from "next/link"
import { Camera, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MobileNav from "../components/mobile-nav"

export default function Home() {
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
              Portfolio
            </Link>
            <Link href="/precios" className="text-sm font-medium transition-colors hover:text-primary">
              Precios
            </Link>
            <Link href="/contacto" className="text-sm font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex">
              <Link href="/contacto">Contactar</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Background Image with Gradient Overlay */}
      <div className="relative w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.jpeg?height=800&width=1920"
            alt="Fondo gastronómico"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background"></div>
        </div>
      </div>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section id="inicio" className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="Fotografía gastronómica profesional"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center px-4 py-32 text-center md:py-48">
            <h1 className="font-title text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Capturando la esencia de la gastronomía
            </h1>
            <p className="font-body mt-6 max-w-md text-lg text-gray-200 md:text-xl">
              Fotografía profesional para restaurantes, chefs y empresas del sector gastronómico
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full bg-secondary text-white">
                <Link href="#servicios">Ver Servicios</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-background/20 text-white hover:bg-background/30"
              >
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section - Sin fondo */}
        <section id="sobre-mi" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <Image
                  src="/Me.jpg?height=600&width=600"
                  alt="Fotógrafo profesional"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Sobre Mí</div>
                <h2 className="font-title text-3xl font-bold tracking-tight md:text-4xl">
                  Pasión por la gastronomía y la fotografía
                </h2>
                <p className="font-body text-muted-foreground md:text-lg">
                  Soy un fotógrafo especializado en el sector gastronómico con más de 8 años de experiencia. Mi pasión
                  es capturar la esencia de cada plato, transmitiendo sus sabores, texturas y aromas a través de
                  imágenes impactantes.
                </p>
                <p className="font-body text-muted-foreground md:text-lg">
                  Trabajo con restaurantes, chefs, hoteles y empresas del sector alimentario para crear contenido visual
                  que destaque sus creaciones culinarias y potencie su presencia en medios digitales e impresos.
                </p>
                <div className="mt-2 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="font-body text-sm font-medium">
                      Formación en Fotografía Gastronómica (Barcelona)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="font-body text-sm font-medium">Colaboración con más de 50 restaurantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="font-body text-sm font-medium">Publicaciones en revistas especializadas</span>
                  </div>
                </div>
                <div className="flex items-center pt-4">
                  <Link href="/servicios" className="flex items-center text-primary hover:underline">
                    Ver mi portfolio <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - 3 principales */}
        <section id="servicios" className="py-16 md:py-24 bg-tertiary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Servicios</div>
              <h2 className="font-title text-3xl font-bold tracking-tight md:text-4xl">
                Servicios fotográficos especializados
              </h2>
              <p className="font-body max-w-[700px] text-muted-foreground md:text-lg">
                Ofrezco soluciones fotográficas completas para el sector gastronómico, adaptadas a las necesidades
                específicas de cada cliente.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Fotografía de Menús"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <h3 className="font-subtitle mb-2 text-xl font-bold">Fotografía de Menús</h3>
                  <p className="font-body text-muted-foreground">
                    Capturo cada plato de tu menú con la iluminación y composición perfectas para destacar sus
                    cualidades. Ideal para cartas digitales, menús impresos y catálogos.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span className="font-body">Fotografía de platos individuales</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span className="font-body">Composiciones de menú completo</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span className="font-body">Edición profesional incluida</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Fotografía para Redes Sociales"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <h3 className="font-subtitle mb-2 text-xl font-bold">Fotografía para Redes Sociales</h3>
                  <p className="font-body text-muted-foreground">
                    Contenido visual atractivo y optimizado para Instagram, Facebook y otras plataformas digitales.
                    Aumenta tu engagement con imágenes profesionales.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span className="font-body">Paquetes mensuales de contenido</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span className="font-body">Formatos adaptados a cada red social</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span className="font-body">Asesoramiento en estrategia visual</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Fotografía de Ambientes"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <h3 className="font-subtitle mb-2 text-xl font-bold">Fotografía de Ambientes</h3>
                  <p className="font-body text-muted-foreground">
                    Capturo la esencia y atmósfera de tu restaurante o espacio gastronómico para atraer a nuevos
                    clientes y mostrar la experiencia completa.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span className="font-body">Interiores y exteriores del local</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span className="font-body">Detalles decorativos y ambientales</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span className="font-body">Sesiones en diferentes momentos del día</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 flex justify-center">
              <Button asChild size="lg" className="bg-secondary text-white">
                <Link href="/precios">Ver Precios</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Proceso de Trabajo
              </div>
              <h2 className="font-title text-3xl font-bold tracking-tight md:text-4xl">Cómo trabajamos juntos</h2>
              <p className="font-body max-w-[700px] text-muted-foreground md:text-lg">
                Un proceso claro y eficiente para conseguir los mejores resultados en cada proyecto fotográfico.
              </p>
            </div>
            <div className="mt-12">
              <div className="grid gap-8 md:grid-cols-4">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    1
                  </div>
                  <div className="mt-4 h-24 w-0.5 bg-gradient-to-b from-primary to-transparent md:hidden"></div>
                  <h3 className="font-subtitle mt-4 text-xl font-bold md:mt-6">Consulta Inicial</h3>
                  <p className="font-body mt-2 text-sm text-muted-foreground">
                    Conversamos sobre tu proyecto, objetivos y necesidades específicas.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    2
                  </div>
                  <div className="mt-4 h-24 w-0.5 bg-gradient-to-b from-primary to-transparent md:hidden"></div>
                  <h3 className="font-subtitle mt-4 text-xl font-bold md:mt-6">Planificación</h3>
                  <p className="font-body mt-2 text-sm text-muted-foreground">
                    Desarrollamos un plan detallado, incluyendo estilismo y composición.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    3
                  </div>
                  <div className="mt-4 h-24 w-0.5 bg-gradient-to-b from-primary to-transparent md:hidden"></div>
                  <h3 className="font-subtitle mt-4 text-xl font-bold md:mt-6">Sesión Fotográfica</h3>
                  <p className="font-body mt-2 text-sm text-muted-foreground">
                    Realizamos la sesión con atención meticulosa a cada detalle.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    4
                  </div>
                  <h3 className="font-subtitle mt-4 text-xl font-bold md:mt-6">Entrega Final</h3>
                  <p className="font-body mt-2 text-sm text-muted-foreground">
                    Edición profesional y entrega de imágenes optimizadas para su uso.
                  </p>
                </div>
              </div>
              <div className="mt-12 hidden md:block">
                <div className="relative h-0.5 w-full bg-muted">
                  <div className="absolute left-[12.5%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
                  <div className="absolute left-[37.5%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
                  <div className="absolute left-[62.5%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
                  <div className="absolute left-[87.5%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Nueva */}
        <section className="py-16 md:py-24 bg-tertiary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonios</div>
              <h2 className="font-title text-3xl font-bold tracking-tight md:text-4xl">Lo que dicen mis clientes</h2>
              <p className="font-body max-w-[700px] text-muted-foreground md:text-lg">
                Descubre las experiencias de restaurantes y chefs que han confiado en mis servicios fotográficos.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "María López",
                  role: "Chef Ejecutiva, Restaurante Alma",
                  image: "/placeholder.svg?height=100&width=100",
                  quote:
                    "Las fotografías que realizó para nuestro nuevo menú capturaron perfectamente la esencia de cada plato. Desde entonces, hemos notado un aumento significativo en los pedidos de esos platos específicos.",
                },
                {
                  name: "Carlos Martínez",
                  role: "Propietario, Café Botánico",
                  image: "/placeholder.svg?height=100&width=100",
                  quote:
                    "Trabajar con Gastro Mondo fue una experiencia excepcional. Entendió exactamente lo que queríamos transmitir con nuestro espacio y lo plasmó en imágenes que ahora son el centro de nuestra estrategia de marketing.",
                },
                {
                  name: "Laura Sánchez",
                  role: "Directora de Marketing, Grupo Gastronómico BCN",
                  image: "/placeholder.svg?height=100&width=100",
                  quote:
                    "Las sesiones fotográficas para nuestras redes sociales han transformado nuestra presencia digital. El engagement ha aumentado un 45% desde que empezamos a utilizar sus imágenes.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current text-secondary" />
                      ))}
                    </div>
                    <p className="font-body mb-6 text-muted-foreground italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="font-body text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
              <p className="font-body mt-4 text-sm text-muted-foreground">
                Fotografía gastronómica profesional para restaurantes, chefs y empresas del sector alimentario.
              </p>
              <div className="mt-6 flex space-x-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
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
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
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
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
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
                <Link
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
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
                    <line x1="12" x2="12" y1="8" y2="16" />
                    <line x1="8" x2="16" y1="12" y2="12" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <span className="sr-only">Pinterest</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-subtitle mb-4 text-lg font-medium">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="font-body text-sm text-muted-foreground hover:text-foreground">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="font-body text-sm text-muted-foreground hover:text-foreground">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/precios" className="font-body text-sm text-muted-foreground hover:text-foreground">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="font-body text-sm text-muted-foreground hover:text-foreground">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-subtitle mb-4 text-lg font-medium">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#servicios" className="font-body text-sm text-muted-foreground hover:text-foreground">
                    Fotografía de Menús
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="font-body text-sm text-muted-foreground hover:text-foreground">
                    Fotografía para Redes Sociales
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="font-body text-sm text-muted-foreground hover:text-foreground">
                    Fotografía de Ambientes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-subtitle mb-4 text-lg font-medium">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="font-body text-sm text-muted-foreground">+34 600 123 456</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-body text-sm text-muted-foreground">info@gastromondo.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-body text-sm text-muted-foreground">Barcelona, España</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="font-body text-center text-sm text-muted-foreground md:text-left">
                &copy; {new Date().getFullYear()} Gastro Mondo. Todos los derechos reservados.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="font-body text-sm text-muted-foreground hover:text-foreground">
                  Política de privacidad
                </Link>
                <Link href="#" className="font-body text-sm text-muted-foreground hover:text-foreground">
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

