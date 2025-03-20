import Image from "next/image"
import Link from "next/link"
import { Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileNav from "../../components/mobile-nav"

export default function Servicios() {
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
            <Button asChild className="hidden md:inline-flex bg-primary text-black">
              <Link href="/contacto">Contactar</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Portfolio Header */}
        <section className="bg-tertiary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Portfolio</div>
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl font-title text-black">
                Mis trabajos destacados
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-lg font-body text-black">
                Una selección de proyectos fotográficos realizados para restaurantes y marcas del sector gastronómico.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button variant="outline" size="sm" className="rounded-full bg-primary text-black">
                  Todos
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full bg-tertiary text-black">
                  Restaurantes
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full bg-tertiary text-black">
                  Menús
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full bg-tertiary text-black">
                  Productos
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full bg-tertiary text-black">
                  Editorial
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Restaurante Alma", category: "Ambiente", description: "Fotografía de interiores y platos" },
                { title: "Menú Degustación", category: "Menú", description: "Serie completa de 7 platos" },
                { title: "Pastelería Dulce", category: "Producto", description: "Colección de postres artesanales" },
                { title: "Revista Gourmet", category: "Editorial", description: "Reportaje gastronómico" },
                { title: "Cocina Mediterránea", category: "Menú", description: "Especialidades de temporada" },
                { title: "Bar Craft", category: "Ambiente", description: "Coctelería y ambiente nocturno" },
                { title: "Panadería Artesanal", category: "Producto", description: "Proceso de elaboración del pan" },
                { title: "Restaurante Fusión", category: "Ambiente", description: "Espacio y concepto gastronómico" },
                { title: "Cafetería Botánica", category: "Ambiente", description: "Espacio y productos de café" },
              ].map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs text-primary">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white font-subtitle">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-200 font-body">{item.description}</p>
                    <Button variant="outline" size="sm" className="mt-4 text-white bg-primary">
                      Ver proyecto
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="bg-tertiary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Proyectos Destacados
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-title text-black">
                Colaboraciones especiales
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg font-body text-black">
                Proyectos fotográficos completos realizados para clientes destacados del sector gastronómico.
              </p>
            </div>
            <div className="mt-12 space-y-12">
              {[
                {
                  title: "Restaurante Estrella Michelin",
                  description:
                    "Fotografía completa para el relanzamiento del restaurante, incluyendo ambiente, menú y equipo.",
                  image: "/placeholder.svg?height=600&width=1200",
                  reverse: false,
                },
                {
                  title: "Libro de Cocina Mediterránea",
                  description:
                    "Más de 50 fotografías para un libro de recetas de cocina mediterránea publicado internacionalmente.",
                  image: "/placeholder.svg?height=600&width=1200",
                  reverse: true,
                },
                {
                  title: "Campaña para Marca de Productos Gourmet",
                  description:
                    "Serie fotográfica para campaña publicitaria de una reconocida marca de productos gourmet.",
                  image: "/placeholder.svg?height=600&width=1200",
                  reverse: false,
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className={`grid gap-8 items-center ${project.reverse ? "md:grid-cols-2 md:grid-flow-dense" : "md:grid-cols-2"}`}
                >
                  <div className={project.reverse ? "md:col-start-2" : ""}>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={1200}
                        height={600}
                        className="w-full transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-2xl font-bold font-subtitle text-black">{project.title}</h3>
                    <p className="text-muted-foreground font-body text-black">{project.description}</p>
                    <div className="pt-4">
                      <Button asChild className="bg-primary text-black">
                        <Link href="#">Ver proyecto completo</Link>
                      </Button>
                    </div>
                  </div>
                </div>
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
              <p className="mt-4 text-sm text-muted-foreground font-body text-black">
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
              <h3 className="mb-4 text-lg font-medium font-subtitle text-black">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground font-body text-black">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios"
                    className="text-sm text-muted-foreground hover:text-foreground font-body text-black"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/precios"
                    className="text-sm text-muted-foreground hover:text-foreground font-body text-black"
                  >
                    Precios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-sm text-muted-foreground hover:text-foreground font-body text-black"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium font-subtitle text-black">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#servicios"
                    className="text-sm text-muted-foreground hover:text-foreground font-body text-black"
                  >
                    Fotografía de Menús
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#servicios"
                    className="text-sm text-muted-foreground hover:text-foreground font-body text-black"
                  >
                    Fotografía para Redes Sociales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#servicios"
                    className="text-sm text-muted-foreground hover:text-foreground font-body text-black"
                  >
                    Fotografía de Ambientes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium font-subtitle text-black">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground font-body text-black">+34 600 123 456</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground font-body text-black">info@gastromondo.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground font-body text-black">Barcelona, España</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-muted-foreground md:text-left font-body text-black">
                &copy; {new Date().getFullYear()} Gastro Mondo. Todos los derechos reservados.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-body text-black">
                  Política de privacidad
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-body text-black">
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

