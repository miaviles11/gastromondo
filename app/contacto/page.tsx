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
            <Button asChild className="hidden md:inline-flex bg-primary text-white">
              <Link href="/contacto">Contactar</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

	<main className="flex-1"></main>

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

