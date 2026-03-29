import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-negro text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-negro/60 via-negro/80 to-negro" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="text-6xl sm:text-7xl">🐉</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif text-dorado mb-4 tracking-tight">
            Zoffo-Wong
          </h1>
          <p className="text-lg sm:text-xl text-crema/90 mb-2 tracking-[0.3em] uppercase">
            Restaurante Chino
          </p>
          <p className="text-base sm:text-lg text-crema/70 mb-10 max-w-xl mx-auto">
            La auténtica comida china chilena desde 1985.
            Tradición familiar, sabores que conquistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-rojo text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rojo-hover transition-colors shadow-lg shadow-rojo/30"
            >
              Ver Menú
            </Link>
            <Link
              href="/contacto"
              className="border-2 border-dorado text-dorado px-8 py-4 rounded-full font-bold text-lg hover:bg-dorado hover:text-negro transition-colors"
            >
              Pedir Ahora
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-crema to-transparent" />
    </section>
  );
}
