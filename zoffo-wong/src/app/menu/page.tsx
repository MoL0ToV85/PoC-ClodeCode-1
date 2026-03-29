"use client";

import { useState } from "react";
import PlatoCard from "@/components/PlatoCard";
import { categorias, getPlatosPorCategoria } from "@/data/menu";

export default function MenuPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("entradas");

  return (
    <>
      <section className="bg-negro py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl mb-4 block">🥢</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-dorado mb-4">
            Nuestro Menú
          </h1>
          <p className="text-crema/70 max-w-2xl mx-auto">
            Descubre nuestra carta completa de platos tradicionales de la
            cocina china chilena. Cada plato preparado con recetas familiares.
          </p>
        </div>
      </section>

      <section className="py-12 bg-crema">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaActiva(cat.id)}
                className={`px-5 py-3 rounded-full font-bold transition-all ${
                  categoriaActiva === cat.id
                    ? "bg-rojo text-white shadow-lg shadow-rojo/20"
                    : "bg-white text-negro hover:bg-rojo/10 border border-dorado/30"
                }`}
              >
                {cat.emoji} {cat.nombre}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getPlatosPorCategoria(categoriaActiva).map((plato) => (
              <PlatoCard key={plato.nombre} plato={plato} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
