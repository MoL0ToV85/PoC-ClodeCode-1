import Link from "next/link";
import PlatoCard from "./PlatoCard";
import { getPlatosPopulares } from "@/data/menu";

export default function SeccionMenu() {
  const populares = getPlatosPopulares();

  return (
    <section className="py-20 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">🥢</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-negro mb-4">
            Lo Más Pedidos
          </h2>
          <p className="text-negro/60 max-w-2xl mx-auto">
            Los favoritos de nuestros clientes. Platos clásicos de la cocina
            china chilena preparados con recetas familiares transmitidas por
            generaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {populares.map((plato) => (
            <PlatoCard key={plato.nombre} plato={plato} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/menu"
            className="inline-block bg-rojo text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rojo-hover transition-colors shadow-lg shadow-rojo/20"
          >
            Ver Menú Completo
          </Link>
        </div>
      </div>
    </section>
  );
}
