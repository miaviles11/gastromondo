import Link from "next/link"
import { Camera, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MobileNav from "../../components/mobile-nav"

export default function Precios() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
		  	<Link href="/" className="text-xl font-bold">
				<Image src="/logo.svg" alt="Gastro Mondo Logo" width={40} height={40} />
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
            <Button asChild className="hidden md:inline-flex bg-primary text-white">
              <Link href="/contacto">Contactar</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Pricing Header */}
        <section className="bg-tertiary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Tarifas</div>
              <h1 className="font-title text-3xl font-bold tracking-tight md:text-5xl">
                Planes adaptados a tus necesidades
              </h1>
              <p className="font-body max-w-[700px] text-muted-foreground md:text-lg">
                Ofrezco diferentes opciones para adaptarme a los requerimientos específicos de cada cliente.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col overflow-hidden border-0 shadow-lg border-primary">
                <div className="bg-primary/5 p-6">
                  <h3 className="font-subtitle text-2xl font-bold">Básico</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">€350</span>
                    <span className="ml-2 text-sm text-muted-foreground">/ sesión</span>
                  </div>
                  <p className="font-body mt-2 text-sm text-muted-foreground">
                    Ideal para pequeños negocios y emprendedores
                  </p>
                </div>
                <CardContent className="flex flex-1 flex-col justify-between p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Hasta 10 fotografías finales</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Sesión de 2 horas</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Edición profesional</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Entrega en 5 días laborables</span>
                    </li>
                  </ul>
                  <Button asChild className="mt-6 w-full bg-primary text-white">
                    <Link href="/contacto">Solicitar presupuesto</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="relative flex flex-col overflow-hidden border-0 shadow-lg border-primary">
                <div className="absolute right-4 top-4 rounded-full bg-secondary text-white px-3 py-1 text-xs font-medium">
                  Popular
                </div>
                <div className="bg-primary/10 p-6">
                  <h3 className="font-subtitle text-2xl font-bold">Profesional</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">€650</span>
                    <span className="ml-2 text-sm text-muted-foreground">/ sesión</span>
                  </div>
                  <p className="font-body mt-2 text-sm text-muted-foreground">
                    Perfecto para restaurantes y negocios establecidos
                  </p>
                </div>
                <CardContent className="flex flex-1 flex-col justify-between p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Hasta 20 fotografías finales</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Sesión de 4 horas</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Edición profesional avanzada</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Estilismo culinario básico</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Entrega en 3 días laborables</span>
                    </li>
                  </ul>
                  <Button asChild className="mt-6 w-full bg-primary text-white">
                    <Link href="/contacto">Solicitar presupuesto</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col overflow-hidden border-0 shadow-lg border-primary">
                <div className="bg-primary/5 p-6">
                  <h3 className="font-subtitle text-2xl font-bold">Premium</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">€950</span>
                    <span className="ml-2 text-sm text-muted-foreground">/ sesión</span>
                  </div>
                  <p className="font-body mt-2 text-sm text-muted-foreground">
                    Para proyectos exclusivos y campañas publicitarias
                  </p>
                </div>
                <CardContent className="flex flex-1 flex-col justify-between p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Hasta 30 fotografías finales</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Sesión de día completo</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Edición profesional premium</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Estilismo culinario completo</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Dirección de arte</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Entrega en 48 horas</span>
                    </li>
                  </ul>
                  <Button asChild className="mt-6 w-full bg-primary text-white">
                    <Link href="/contacto">Solicitar presupuesto</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <p className="font-body text-muted-foreground">
                ¿Necesitas un plan personalizado?{" "}
                <Link href="/contacto" className="font-medium text-primary hover:underline">
                  Contacta conmigo
                </Link>{" "}
                para discutir tus necesidades específicas.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Pricing Info */}
        <section className="bg-tertiary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="font-title text-2xl font-bold tracking-tight md:text-3xl">Servicios adicionales</h2>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <div>
                      <span className="font-subtitle font-medium">Retoque avanzado:</span>
                      <p className="font-body text-sm text-muted-foreground">
                        Retoque detallado para publicaciones de alta gama. €50 por imagen.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <div>
                      <span className="font-subtitle font-medium">Asistente de estilismo:</span>
                      <p className="font-body text-sm text-muted-foreground">
                        Profesional adicional para preparación de alimentos. €200 por sesión.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <div>
                      <span className="font-subtitle font-medium">Entrega urgente:</span>
                      <p className="font-body text-sm text-muted-foreground">
                        Recibe tus imágenes en 24 horas. Suplemento del 30%.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <div>
                      <span className="font-subtitle font-medium">Desplazamiento:</span>
                      <p className="font-body text-sm text-muted-foreground">
                        Fuera de Barcelona ciudad. €0,30/km + gastos.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-title text-2xl font-bold tracking-tight md:text-3xl">Paquetes especiales</h2>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <div>
                      <span className="font-subtitle font-medium">Paquete Apertura:</span>
                      <p className="font-body text-sm text-muted-foreground">
                        Ideal para nuevos restaurantes. Incluye fotografía de ambiente, 15 platos y 5 imágenes para
                        redes sociales. €850.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <div>
                      <span className="font-subtitle font-medium">Paquete Redes Sociales Trimestral:</span>
                      <p className="font-body text-sm text-muted-foreground">
                        3 sesiones mensuales con 10 imágenes cada una. €1500 por trimestre.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-4 w-4 text-primary" />
                    <div>
                      <span className="font-subtitle font-medium">Paquete Menú Completo:</span>
                      <p className="font-body text-sm text-muted-foreground">
                        Fotografía de todos los platos de tu carta. Desde €1200 dependiendo del número de platos.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
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
            </div>
            <div>
              <h3 className="font-subtitle mb-4 text-lg font-medium">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-sm text-muted-foreground hover:text-foreground">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/precios" className="text-sm text-muted-foreground hover:text-foreground">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-sm text-muted-foreground hover:text-foreground">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-subtitle mb-4 text-lg font-medium">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/servicios" className="text-sm text-muted-foreground hover:text-foreground">
                    Fotografía de Menús
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-sm text-muted-foreground hover:text-foreground">
                    Fotografía para Redes Sociales
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-sm text-muted-foreground hover:text-foreground">
                    Fotografía de Ambientes
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-sm text-muted-foreground hover:text-foreground">
                    Fotografía Editorial
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-sm text-muted-foreground hover:text-foreground">
                    Estilismo Culinario
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

