"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/menu", label: "Menú" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-rojo text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-3xl">🐉</span>
            <div>
              <h1 className="text-xl font-bold font-serif tracking-wider text-dorado">
                Zoffo-Wong
              </h1>
              <p className="text-xs text-crema/80 tracking-widest">
                RESTAURANTE CHINO
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-crema hover:text-dorado transition-colors font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="bg-dorado text-negro px-5 py-2 rounded-full font-bold hover:bg-dorado-hover transition-colors"
            >
              Pedir Ahora
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-crema p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-rojo-hover border-t border-dorado/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-crema hover:text-dorado transition-colors font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="block bg-dorado text-negro px-5 py-2 rounded-full font-bold text-center hover:bg-dorado-hover transition-colors"
            >
              Pedir Ahora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
