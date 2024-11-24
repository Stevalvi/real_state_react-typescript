import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Definimos el tipo de las props
interface SliderProps {
  images: string[];
  messageText?: string;
}

export default function Slider({ images, messageText }: SliderProps) {
  // Estado para la imagen actual
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Funciones para cambiar la imagen
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Efecto para cambiar automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  // Funciones para el sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slider */}
      {images.map((image: string, index: number) => (
        <div
          key={index}
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      {/* Overlay para oscurecer */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Contenido del Header */}
      <div className="absolute top-0 left-0 w-full p-5 text-white z-10">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:mx-40">
          {/* Logo */}
          <Link to="/">
            <img
              className="rounded-full w-32 h-32 mx-auto lg:mx-0"
              src="/logo-inmobiliaria.png"
              alt="Logo Inmobiliaria"
            />
          </Link>

          {/* Botón de menú para dispositivos móviles */}
          <button
            className="lg:hidden absolute top-5 right-2 text-white text-3xl p-4"
            onClick={toggleSidebar}
            aria-label="Abrir menú"
          >
            &#9776; {/* Icono de menú hamburguesa */}
          </button>

          {/* Texto adicional debajo del logo en dispositivos pequeños */}
          {messageText && (
            <div className="mt-36 lg:mt-0 text-center lg:hidden">
              <h2 className="text-lg font-semibold">{messageText}</h2>
            </div>
          )}

          {/* Navegación horizontal para dispositivos grandes */}
          <nav className="hidden lg:flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lime-500 bg-black uppercase font-bold hover:bg-black p-3 rounded-3xl"
                  : "text-white uppercase font-bold hover:bg-black p-3 rounded-3xl"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                isActive
                  ? "text-lime-500 bg-black uppercase font-bold hover:bg-black p-3 rounded-3xl"
                  : "text-white uppercase font-bold hover:bg-black p-3 rounded-3xl"
              }
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/propiedades"
              className={({ isActive }) =>
                isActive
                  ? "text-lime-500 bg-black uppercase font-bold hover:bg-black p-3 rounded-3xl"
                  : "text-white uppercase font-bold hover:bg-black p-3 rounded-3xl"
              }
            >
              Propiedades
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive
                  ? "text-lime-500 bg-black uppercase font-bold hover:bg-black p-3 rounded-3xl"
                  : "text-white uppercase font-bold hover:bg-black p-3 rounded-3xl"
              }
            >
              Contacto
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Mensaje adicional para dispositivos grandes */}
      {messageText && (
        <div className="absolute bottom-4 left-4 text-white lg:bottom-20 lg:left-40 lg:w-[40%] lg:text-3xl lg:leading-tight hidden lg:block">
          <h2 className="text-xl lg:text-3xl lg:leading-snug italic">
            {messageText}
          </h2>
        </div>
      )}

      {/* Posiciona el ícono de WhatsApp en la parte inferior derecha, en lugar de la imagen */}
      {/* Posiciona el ícono de WhatsApp en la parte inferior derecha, en lugar de la imagen */}
      <a
        href="https://wa.me/3155088277?text=Hola,%20podría%20brindarme%20información%20sobre%20"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute fixed bottom-8 right-2 lg:bottom-20 lg:right-48 z-50 flex flex-col items-center"
      >
        {/* Texto sobre el ícono */}
        <span className="text-white mb-2 text-sm font-semibold">
          ¡Chatea con nosotros!
        </span>
        <FontAwesomeIcon
          icon={faWhatsapp}
          beat
          style={{ color: "#63E6BE", fontSize: "3rem" }}
        />
      </a>

      {/* Sidebar para dispositivos móviles */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black p-5 text-white transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="text-white mb-5"
          onClick={toggleSidebar}
          aria-label="Cerrar menú"
        >
          &#10006; {/* Icono de cerrar */}
        </button>
        <nav className="flex flex-col gap-4">
          <NavLink
            to="/"
            onClick={toggleSidebar}
            className="uppercase font-bold hover:text-lime-500"
          >
            Inicio
          </NavLink>
          <NavLink
            to="/nosotros"
            onClick={toggleSidebar}
            className="uppercase font-bold hover:text-lime-500"
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/propiedades"
            onClick={toggleSidebar}
            className="uppercase font-bold hover:text-lime-500"
          >
            Propiedades
          </NavLink>
          <NavLink
            to="/contacto"
            onClick={toggleSidebar}
            className="uppercase font-bold hover:text-lime-500"
          >
            Contacto
          </NavLink>
        </nav>
        <Link to="/">
          <img
            className="rounded-full w-32 h-32 mx-auto lg:mx-0 mt-80 ms-5"
            src="/logo-inmobiliaria.png"
            alt="Logo Inmobiliaria"
          />
        </Link>
      </div>

      {/* Overlay para cerrar el sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Indicadores de puntos */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index: number) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
