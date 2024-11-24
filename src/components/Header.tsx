import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Definimos el tipo de las props
interface SliderProps {
  images: string[];
  messageText: string;
}

export default function Header({ images, messageText }: SliderProps) {
  // Estado para la imagen actual
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Funciones para el sidebar
  function toggleSidebar() {
    // Abre y cierra el sidebar
    // Representa si la barra lateral está abierta (true) o cerrada (false)
    setIsSidebarOpen(!isSidebarOpen); //Si isSidebarOpen es true, entonces !isSidebarOpen será false (y viceversa)
  }

  return (
    <div
      className="relative w-full h-[500px] overflow-hidden" // overflow-hidden oculta el contenido que se desborda fuera del contenedor
      style={{
        backgroundImage: `url(${images})`, // Imagen dinámica
        backgroundSize: "cover", // Asegura que la imagen cubra todo el fondo
        backgroundPosition: "center", // Centra la imagen
      }}
    >
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
          {messageText && ( // Si hay un mensa entonces ejecuto esto
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
        <div className="absolute text-white lg:bottom-20 lg:left-40 lg:w-[40%] lg:text-3xl lg:leading-tight hidden lg:block">
          <h2 className="text-xl lg:text-3xl lg:leading-snug italic">
            {messageText}
          </h2>
        </div>
      )}

      {/* Posiciona el ícono de WhatsApp en la parte inferior derecha, en lugar de la imagen */}
      <a
        href="https://wa.me/3155088277"
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
      {/*fixed hace que el sidebar se posicione por encima del contenido */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black p-5 text-white transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="text-blue-800 mb-5"
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
    </div>
  );
}
