import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

// Definimos el tipo de las props

export default function Footer() {
  return (
    <>
      <div className="bg-black">
        <div className="xl:w-[1200px] lg:mx-auto p-5 flex flex-col md:flex-row md:justify-between">
          <div>
            <h2 className="text-white font-bold text-lg md:text-center">
              Navegación
            </h2>
            <nav className="flex flex-col">
              <NavLink
                to="/"
                className="uppercase font-bold mt-5 rounded-3xl text-white"
              >
                Inicio
              </NavLink>
              <NavLink
                to="/nosotros"
                className="uppercase font-bold mt-5 rounded-3xl text-white"
              >
                Nosotros
              </NavLink>
              <NavLink
                to="/propiedades"
                className="uppercase font-bold mt-5 rounded-3xl text-white"
              >
                Propiedades
              </NavLink>
              <NavLink
                to="/contacto"
                className="uppercase font-bold mt-5 rounded-3xl text-white"
              >
                Contacto
              </NavLink>
            </nav>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="text-white font-bold text-lg md:text-center">
              Inmobiliaria
            </h2>
            <div className="flex flex-col">
              <div className="text-white mt-5">
                <h3 className="md:text-center">Servicios</h3>
                <p>Ventas de propiedades</p>
              </div>
              <div className="text-white mt-5">
                <div className="flex gap-2 md:justify-center">
                  <svg
                    fill="#fff"
                    width="20px"
                    height="20px"
                    viewBox="0 0 32.00 32.00"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                    stroke-width="0.00032"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>clock</title>{" "}
                      <path d="M0 7.008q0 1.856 0.992 3.52 1.184-3.328 3.712-5.824t5.824-3.712q-1.696-0.992-3.52-0.992-2.912 0-4.96 2.080t-2.048 4.928zM2.016 16q0 2.784 1.056 5.312t2.944 4.48v4.224q0 0.832 0.576 1.408t1.408 0.576 1.408-0.576 0.608-1.408v-1.408q2.912 1.408 5.984 1.408t6.016-1.408v1.408q0 0.832 0.576 1.408t1.408 0.576 1.408-0.576 0.608-1.408v-4.224q1.888-1.952 2.944-4.448t1.056-5.344-1.12-5.44-2.976-4.48-4.48-2.976-5.44-1.12-5.44 1.12-4.48 2.976-2.976 4.48-1.088 5.44zM6.016 16q0-2.048 0.768-3.872t2.144-3.2 3.2-2.144 3.872-0.8q2.72 0 5.024 1.344t3.648 3.648 1.344 5.024q0 2.016-0.8 3.872t-2.144 3.2-3.2 2.144-3.872 0.768q-2.72 0-5.024-1.312t-3.616-3.648-1.344-5.024zM14.016 16q0 0.832 0.576 1.408t1.408 0.576h4q0.832 0 1.408-0.576t0.608-1.408-0.608-1.408-1.408-0.608h-1.984v-1.984q0-0.832-0.608-1.408t-1.408-0.608-1.408 0.608-0.576 1.408v4zM21.472 0.992q3.328 1.216 5.824 3.712t3.712 5.824q0.992-1.664 0.992-3.52 0-2.88-2.048-4.928t-4.96-2.080q-1.824 0-3.52 0.992z"></path>{" "}
                    </g>
                  </svg>
                  <h3 className="md:text-center">Horario</h3>
                </div>

                <p>Lunes a Viernes:</p>
                <p>8:00a.m. - 1:00p.m.</p>
                <p>2:00p.m. - 6:00p.m.</p>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="text-white font-bold text-lg mb-52 md:text-center">
              Síganos en nuestras redes
            </h2>

            <div className="absolute">
              <a
                href="https://wa.me/3155088277" // Reemplaza con tu número de WhatsApp
                target="_blank"
                rel="noopener noreferrer"
                className="absolute fixed bottom-32 right-85 md:left-16 xl:left-auto xl:bottom-28 xl:right-[-130px] flex flex-col"
              >
                {/* Texto sobre el ícono */}
                <span className="text-white mb-2 text-sm font-semibold">
                  WhatsApp
                </span>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  beat
                  style={{ color: "#63E6BE", fontSize: "3rem" }}
                />
              </a>

              <a
                href="https://www.instagram.com/inmobiliariaterraplen/profilecard/?igsh=MWxwZXR6ZTNwMWVteg==" // Reemplaza con tu usuario de Instagram
                target="_blank"
                rel="noopener noreferrer"
                className="absolute fixed bottom-11 right-85 md:left-16 lg:left-auto lg:bottom-7 lg:right-[-130px] flex flex-col"
              >
                {/* Texto sobre el ícono */}
                <span className="text-white mb-2 text-sm font-semibold">
                  Instagram
                </span>
                <FontAwesomeIcon
                  icon={faInstagram}
                  beat
                  style={{ color: "#E4405F", fontSize: "3rem" }}
                />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100074865516576&mibextid=ZbWKwL" // Reemplaza con tu página de Facebook
                target="_blank"
                rel="noopener noreferrer"
                className="absolute fixed bottom-[-40px] right-85 md:left-16 lg:left-auto lg:bottom-[-60px] lg:right-[-130px] flex flex-col"
              >
                {/* Texto sobre el ícono */}
                <span className="text-white mb-2 text-sm font-semibold">
                  Facebook
                </span>
                <FontAwesomeIcon
                  icon={faFacebook}
                  beat
                  style={{ color: "#1877F2", fontSize: "3rem" }}
                />
              </a>
            </div>
          </div>
        </div>
        <footer className="text-white text-center p-5 mt-10">
          &copy; Copyright 2024 Inmobiliaria Terraplén. Todos los derechos
          reservados.
        </footer>
      </div>
    </>
  );
}
