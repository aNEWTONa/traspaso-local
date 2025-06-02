import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Traspaso Local – Centro Comercial',
  description: 'Anuncio visual del traspaso de un local en zona comercial',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-800 font-sans">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="flex justify-center gap-8 py-4 text-base font-semibold text-gray-700">
            {[
              { name: 'Inicio', href: '/' },
              { name: 'Características del Local', href: '/caracteristicas' },
              { name: 'Fotos', href: '/fotos' },
              { name: 'Ubicación', href: '/ubicacion' },
              { name: 'Contacto', href: '/contacto' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group px-2 py-1 transition text-gray-700 hover:text-blue-600"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
