import Link from "next/link";

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-negro py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl mb-4 block">🏮</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-dorado mb-4">
            Sobre Nosotros
          </h1>
          <p className="text-crema/70 max-w-2xl mx-auto">
            Tres generaciones compartiendo la auténtica comida china chilena.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-negro mb-6">
                Nuestra Historia
              </h2>
              <p className="text-negro/70 leading-relaxed mb-4">
                Zoffo-Wong nació en 1985 cuando el Sr. Wong, un inmigrante
                chileno de origen cantonés, decidió abrir un pequeño restaurante
                en el corazón de Santiago. Su visión era simple: traer los
                sabores auténticos de la cocina cantonesa adaptados al paladar
                chileno.
              </p>
              <p className="text-negro/70 leading-relaxed mb-4">
                Lo que comenzó como un pequeño local familiar se ha convertido
                en un referente de la gastronomía china en Chile. Nuestras
                recetas han sido perfeccionadas a lo largo de tres generaciones,
                manteniendo siempre el compromiso con la calidad y el sabor
                auténtico.
              </p>
              <p className="text-negro/70 leading-relaxed">
                Hoy, la tercera generación de la familia Wong continúa el legado,
                combinando las tradiciones culinarias heredadas con técnicas
                modernas para ofrecer una experiencia gastronómica única.
              </p>
            </div>
            <div className="bg-crema rounded-2xl p-8 border border-dorado/20">
              <h3 className="text-2xl font-bold font-serif text-rojo mb-6 text-center">
                Nuestros Valores
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🍜</span>
                  <div>
                    <h4 className="font-bold text-negro mb-1">Tradición</h4>
                    <p className="text-negro/60 text-sm">
                      Recetas transmitidas de generación en generación,
                      preservando los sabores originales.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🥬</span>
                  <div>
                    <h4 className="font-bold text-negro mb-1">Calidad</h4>
                    <p className="text-negro/60 text-sm">
                      Ingredientes frescos seleccionados diariamente para
                      garantizar el mejor sabor.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  <div>
                    <h4 className="font-bold text-negro mb-1">Familia</h4>
                    <p className="text-negro/60 text-sm">
                      Un ambiente cálido y familiar donde cada cliente es
                      recibido como en casa.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🇨🇱</span>
                  <div>
                    <h4 className="font-bold text-negro mb-1">
                      Fusión Chileno-China
                    </h4>
                    <p className="text-negro/60 text-sm">
                      La riqueza de la cocina cantonesa con el toque chileno
                      que nos hace únicos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-crema">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif text-negro mb-6">
            Lo Que Nos Hace Únicos
          </h2>
          <p className="text-negro/70 leading-relaxed mb-8">
            La comida china en Chile es única en el mundo. Platos como el Arroz
            Chaufán, el Chapsui y el Wantán Frito se han convertido en parte
            esencial de la gastronomía chilena. En Zoffo-Wong, honramos esta
            tradición única que existe solo en nuestro país.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-dorado/20">
              <p className="text-3xl font-bold font-serif text-rojo mb-2">35+</p>
              <p className="text-negro/60 text-sm">Años de tradición</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-dorado/20">
              <p className="text-3xl font-bold font-serif text-rojo mb-2">50+</p>
              <p className="text-negro/60 text-sm">Platos únicos</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-dorado/20">
              <p className="text-3xl font-bold font-serif text-rojo mb-2">100%</p>
              <p className="text-negro/60 text-sm">Sabor auténtico</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-rojo">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif text-white mb-4">
            ¿Quieres conocer nuestro menú?
          </h2>
          <p className="text-crema/80 mb-8">
            Descubre todos nuestros platos tradicionales de la cocina china chilena.
          </p>
          <Link
            href="/menu"
            className="inline-block bg-dorado text-negro px-8 py-4 rounded-full font-bold text-lg hover:bg-dorado-hover transition-colors"
          >
            Ver Menú Completo
          </Link>
        </div>
      </section>
    </>
  );
}
