"use client";
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Lightbox dinámico para evitar errores de SSR
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });
const Thumbnails = dynamic(() =>
  import("yet-another-react-lightbox/plugins/thumbnails").then(mod => mod.default),
  { ssr: false }
);

export default function Fotos() {
  const [index, setIndex] = useState(-1);

  const fotos = useMemo(() => [
    { src: "/foto1.jpg", alt: "Zona de mostrador principal" },
    { src: "/foto2.jpg", alt: "Entrada del local con luz natural" },
    { src: "/foto3.jpg", alt: "Vista general con estanterías organizadas" },
    { src: "/foto4.jpg", alt: "Recepción del establecimiento" },
    { src: "/foto5.jpg", alt: "Zona de productos bien iluminada" },
    { src: "/foto6.jpg", alt: "Perspectiva del fondo del local" },
  ], []);

  return (
    <section className="bg-white min-h-screen text-gray-800 py-16 px-6">
      {/* Título y subtítulo */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Descubre cada detalle del local</h1>
        <div className="mt-2 w-300 h-1 bg-blue-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 text-lg mt-4">Una galería visual para ayudarte a tomar la mejor decisión</p>
      </div>

      {/* Galería en mosaico */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-w-7xl mx-auto">
        {fotos.map((foto, idx) => (
          <img
            key={idx}
            src={foto.src}
            alt={foto.alt}
            onClick={() => setIndex(idx)}
            className="rounded-2xl shadow-md cursor-pointer hover:scale-[1.08] transition-transform duration-300 object-cover h-44 sm:h-48 w-full"
          />
        ))}
      </div>

      {/* Lightbox */}
      {typeof window !== "undefined" && (
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={fotos.map(f => ({ ...f, title: f.alt }))}
          plugins={[Thumbnails]}
        />
      )}
    </section>
  );
}
