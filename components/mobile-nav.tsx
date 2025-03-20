"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="outline" size="icon" onClick={() => setIsOpen(true)} className="bg-primary text-white">
        <span className="sr-only">Abrir menú</span>
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <Camera className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold font-title">Gastro Mondo</span>
            </div>
            <Button variant="outline" size="icon" onClick={() => setIsOpen(false)}>
              <span className="sr-only">Cerrar menú</span>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="px-4 py-8">
            <ul className="flex flex-col space-y-6">
              <li>
                <Link
                  href="/"
                  className="text-lg font-medium font-subtitle text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-lg font-medium font-subtitle text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/precios"
                  className="text-lg font-medium font-subtitle text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-lg font-medium font-subtitle text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <div className="mt-8">
              <Button className="w-full bg-secondary text-white">
                <Link href="/contacto" onClick={() => setIsOpen(false)}>
                  Contactar
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

