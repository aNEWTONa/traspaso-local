import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contacto() {
  const telefono = "609681121";
  const mensaje = "Hola, estoy interesado en el local en traspaso que he visto en la web.";
  const correo = "naturhouseburgocentro@gmail.com";

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-16"
      style={{
        backgroundImage: "url('/fondo-contacto.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "contain", // o "cover", "auto" según el tipo de patrón
      }}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-10 text-center backdrop-blur-sm bg-opacity-90">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Estamos aquí para ayudarte
        </h1>
        <p className="text-base text-gray-600 mb-10">
          ¿Tienes preguntas sobre el local o deseas concertar una visita? Ponte en contacto con nosotros sin compromiso.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 mb-10">
          {/* Teléfono */}
          <a
            href={`tel:${telefono}`}
            className="flex flex-col items-center bg-blue-50 rounded-xl px-6 py-5 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <FaPhoneAlt className="text-blue-600 text-2xl mb-2" />
            <p className="text-sm text-gray-500">Teléfono</p>
            <p className="text-base font-semibold text-blue-700 mt-1 hover:underline">
              {telefono}
            </p>
          </a>

          {/* Correo */}
          <a
            href={`mailto:${correo}`}
            className="flex flex-col items-center bg-blue-50 rounded-xl px-6 py-5 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <FaEnvelope className="text-blue-600 text-2xl mb-2" />
            <p className="text-sm text-gray-500">Correo electrónico</p>
            <p className="text-base font-semibold text-blue-700 mt-1 hover:underline overflow-x-auto whitespace-nowrap">
              {correo}
            </p>
          </a>
        </div>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/34${telefono}?text=${encodeURIComponent(mensaje)}`}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition text-base font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-xl" />
          Escríbenos por WhatsApp
        </a>
      </div>
    </section>
  );
}
