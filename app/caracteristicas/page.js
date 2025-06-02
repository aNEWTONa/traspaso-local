"use client";
import {
  FaRulerCombined,
  FaStoreAlt,
  FaWarehouse,
  FaEye,
  FaSnowflake,
  FaDoorOpen,
  FaCommentDots,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Caracteristicas() {
  const caracteristicas = [
    {
      icon: <FaRulerCombined className="text-blue-600 text-5xl" />,
      texto: "85 m² útiles totalmente reformados.",
    },
    {
      icon: <FaStoreAlt className="text-blue-600 text-5xl" />,
      texto: "Ubicado en planta principal, junto a grandes marcas.",
    },
    {
      icon: <FaWarehouse className="text-blue-600 text-5xl" />,
      texto: "Incluye almacén privado y baño.",
    },
    {
      icon: <FaEye className="text-blue-600 text-5xl" />,
      texto: "Alta visibilidad desde pasillos centrales.",
    },
    {
      icon: <FaSnowflake className="text-blue-600 text-5xl" />,
      texto: "Climatización instalada.",
    },
    {
      icon: <FaDoorOpen className="text-blue-600 text-5xl" />,
      texto: "Libre de cargas, listo para entrar.",
    },
  ];

  return (
    <section className="bg-white min-h-screen py-20 px-6 text-gray-800">
      {/* Título y subtítulo */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold">Características del Local</h1>
        <div className="mt-2 w-300 h-1 bg-blue-500 mx-auto rounded-full transition-all duration-500" />
        <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
          Conoce al detalle los elementos clave de este espacio comercial. Te
          compartimos las principales características, aunque nada como visitarlo
          en persona: la realidad siempre supera a lo virtual.
        </p>
      </div>

      {/* Tarjetas con animación */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {caracteristicas.map((car, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-md hover:shadow-xl border border-blue-100 transition-transform transform hover:-translate-y-1 text-center"
          >
            <div className="mb-5 transition-transform duration-300 hover:scale-110">
              {car.icon}
            </div>
            <p className="text-lg font-medium text-gray-700">{car.texto}</p>
          </motion.div>
        ))}
      </div>

      {/* Nota final */}
      <div className="mt-16 text-center">
        <p className="inline-flex items-center gap-2 text-base text-gray-600 italic">
          <FaCommentDots className="text-purple-400 text-xl" />
          Precio de traspaso competitivo. Consultar condiciones específicas por alguna de nuestras vías de Contacto.
        </p>
      </div>
    </section>
  );
}
