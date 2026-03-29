export default function ContactoPage() {
  return (
    <>
      <section className="bg-negro py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl mb-4 block">📍</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-dorado mb-4">
            Contacto
          </h1>
          <p className="text-crema/70 max-w-2xl mx-auto">
            Visítanos o haz tu pedido por teléfono. ¡Te esperamos!
          </p>
        </div>
      </section>

      <section className="py-20 bg-crema">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-dorado/20 mb-8">
                <h2 className="text-2xl font-bold font-serif text-negro mb-6">
                  Información de Contacto
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <h3 className="font-bold text-negro mb-1">Dirección</h3>
                      <p className="text-negro/70">
                        Av. Irarrázaval 3456, Ñuñoa
                        <br />
                        Santiago, Chile
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📞</span>
                    <div>
                      <h3 className="font-bold text-negro mb-1">Teléfono</h3>
                      <p className="text-negro/70">+56 2 2234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📱</span>
                    <div>
                      <h3 className="font-bold text-negro mb-1">WhatsApp</h3>
                      <p className="text-negro/70">+56 9 8765 4321</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-dorado/20">
                <h2 className="text-2xl font-bold font-serif text-negro mb-6">
                  Horarios de Atención
                </h2>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-3 border-b border-dorado/20">
                    <span className="font-medium text-negro">Lunes a Viernes</span>
                    <span className="text-rojo font-bold">12:00 - 22:00</span>
                  </li>
                  <li className="flex justify-between items-center pb-3 border-b border-dorado/20">
                    <span className="font-medium text-negro">Sábado</span>
                    <span className="text-rojo font-bold">11:30 - 22:30</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium text-negro">Domingo</span>
                    <span className="text-rojo font-bold">11:30 - 17:00</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-dorado/20 h-full min-h-[400px]">
                <div className="p-4 bg-negro">
                  <h2 className="text-lg font-bold font-serif text-dorado">
                    📍 Nuestra Ubicación
                  </h2>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0!2d-70.6!3d-33.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI3JzAwLjAiUyA3MMKwMzYnMDAuMCJX!5e0!3m2!1ses!2scl!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del restaurante"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-rojo">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif text-white mb-4">
            ¿Listo para ordenar?
          </h2>
          <p className="text-crema/80 mb-8">
            Haz tu pedido por teléfono o visítanos en nuestro local.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+56222345678"
              className="bg-white text-rojo px-8 py-4 rounded-full font-bold text-lg hover:bg-crema transition-colors"
            >
              📞 Llamar Ahora
            </a>
            <a
              href="https://wa.me/56987654321?text=¡Hola! Me gustaría hacer un pedido en Zoffo-Wong 🐉"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
