export default function Home() {
  return (
    <section className="relative min-h-screen text-white flex items-center justify-center">
      {/* 🎥 Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video-local.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* 💬 Contenido sobre el video */}
      <div className="relative z-10 text-center px-6 py-8 bg-white/80 text-gray-800 backdrop-blur-md rounded-2xl shadow-xl max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">¡Traspaso de local comercial!</h1>
        <p className="text-lg md:text-xl max-w-lg mx-auto text-gray-700">
          Oportunidad única para adquirir un local en el{' '}
          <span className="whitespace-nowrap font-semibold">
            Centro Comercial BurgoCentro Las Rozas de Madrid
          </span>. Ideal para comercio, servicios o franquicia.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="/caracteristicas"
            className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
          >
            Ver características
          </a>
          <a
            href="/contacto"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
          >
            Contactar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
