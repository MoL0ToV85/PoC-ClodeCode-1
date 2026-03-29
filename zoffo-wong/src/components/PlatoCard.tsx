import { Plato, formatPrecio } from "@/data/menu";

export default function PlatoCard({ plato }: { plato: Plato }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 border border-dorado/20 group">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold font-serif text-negro group-hover:text-rojo transition-colors">
          {plato.nombre}
        </h3>
        {plato.popular && (
          <span className="bg-dorado text-negro text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap ml-2">
            ⭐ Popular
          </span>
        )}
      </div>
      <p className="text-sm text-negro/60 mb-4 leading-relaxed">
        {plato.descripcion}
      </p>
      <p className="text-xl font-bold text-rojo font-serif">
        {formatPrecio(plato.precio)}
      </p>
    </div>
  );
}
