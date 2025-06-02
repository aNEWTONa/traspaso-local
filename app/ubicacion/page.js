import { FaMapMarkerAlt } from "react-icons/fa";

export default function Ubicacion() {
  return (
    <section className="bg-white min-h-screen text-gray-800 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="flex justify-center mb-4 text-blue-600 text-4xl">
          <FaMapMarkerAlt />
        </div>
        <h1 className="text-4xl font-bold mb-4">
          ¡Ubicación estratégica en uno de los centros comerciales más transitados de Las Rozas!
        </h1>
        <p className="text-lg text-gray-600">
          📍 <span className="font-medium">Centro Comercial BurgoCentro Las Rozas – Local 40 Naturhouse</span>
        </p>
      </div>

      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.652926827359!2d-3.877117!3d40.49000099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418362ea56f0d3%3A0xafe808102930c19d!2sNaturhouse%20Las%20Rozas!5e1!3m2!1ses!2ses!4v1748857740908!5m2!1ses!2ses"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl shadow-xl max-w-5xl w-full"
        ></iframe>
      </div>
      <p className="text-center text-gray-700 mt-6">
        📌 Pulsa en el mapa para explorar la zona o calcular tu ruta.
      </p>

    </section>
  );
}
