import Hero from "@/components/Hero";
import SeccionMenu from "@/components/SeccionMenu";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <SeccionMenu />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-4xl mb-4 block">🏮</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-negro mb-6">
                Nuestra Historia
              </h2>
              <p className="text-negro/70 leading-relaxed mb-4">
                Fundado en 1985 por la familia Wong, nuestro restaurante ha sido
                un referente de la gastronomía china en Santiago por más de tres
                décadas. Tres generaciones mantienen viva la tradición de recetas
                cantonesas adaptadas al paladar chileno.
              </p>
              <p className="text-negro/70 leading-relaxed mb-8">
                Cada plato es preparado con ingredientes frescos y técnicas
                tradicionales transmitidas de generación en generación. Nuestro
                compromiso es ofrecerte la auténtica experiencia de la comida
                china chilena.
              </p>
              <Link
                href="/nosotros"
                className="inline-block border-2 border-rojo text-rojo px-6 py-3 rounded-full font-bold hover:bg-rojo hover:text-white transition-colors"
              >
                Conoce Más
              </Link>
            </div>
            <div className="bg-negro rounded-2xl p-8 text-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-rojo/10 rounded-xl p-6 border border-rojo/20">
                  <p className="text-4xl font-bold font-serif text-dorado mb-2">35+</p>
                  <p className="text-crema/70 text-sm">Años de tradición</p>
                </div>
                <div className="bg-rojo/10 rounded-xl p-6 border border-rojo/20">
                  <p className="text-4xl font-bold font-serif text-dorado mb-2">50+</p>
                  <p className="text-crema/70 text-sm">Platos en el menú</p>
                </div>
                <div className="bg-rojo/10 rounded-xl p-6 border border-rojo/20">
                  <p className="text-4xl font-bold font-serif text-dorado mb-2">3</p>
                  <p className="text-crema/70 text-sm">Generaciones</p>
                </div>
                <div className="bg-rojo/10 rounded-xl p-6 border border-rojo/20">
                  <p className="text-4xl font-bold font-serif text-dorado mb-2">∞</p>
                  <p className="text-crema/70 text-sm">Sabor auténtico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-rojo">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            ¿Listo para ordenar?
          </h2>
          <p className="text-crema/80 mb-8 max-w-xl mx-auto">
            Haz tu pedido por teléfono, WhatsApp o visítanos en nuestro local.
            Delivery disponible en toda la comuna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+56222345678"
              className="bg-white text-rojo px-8 py-4 rounded-full font-bold text-lg hover:bg-crema transition-colors"
            >
              📞 Llamar Ahora
            </a>
            <Link
              href="/contacto"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-rojo transition-colors"
            >
              📍 Ver Ubicación
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
