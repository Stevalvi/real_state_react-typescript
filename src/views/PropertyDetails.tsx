import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { properties } from "../data/properties";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((prop) => prop.id === Number(id));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir y cerrar el modal

  // Cambiar imagen cada 3 segundos automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === property!.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, [property]);

  if (!property) {
    return <div className="text-center mt-10">Propiedad no encontrada.</div>;
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(value);
  };

  // Funciones para navegar en el slider
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para abrir el modal
  const openModal = () => setIsModalOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

  const UsImages = ["/propiedad.jpeg"];

  return (
    <>
      <Header
        images={UsImages}
        messageText=' "Compra la casa de tus sueños" '
      />
      <div className="max-w-4xl mx-auto p-4 mt-10 mb-10">
        {/* Card contenedor de la imagen y la información */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Slider de imágenes */}
          <div className="relative">
            <img
              src={`/${property.images[currentIndex]}`} // Usamos la ruta relativa desde la carpeta public
              alt={`Imagen ${currentIndex + 1}`}
              className="w-full lg:h-96 object-cover mb-4 rounded-lg cursor-pointer"
              onClick={openModal} // Al hacer clic se abre el modal
            />
            {/* Botones de navegación */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              ⬅️
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              ➡️
            </button>
          </div>

          {/* Modal para ampliar la imagen */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="relative">
                <img
                  src={`/${property.images[currentIndex]}`}
                  alt={`Imagen ampliada ${currentIndex + 1}`}
                  className="w-[600px] h-[600px] object-contain"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-white text-3xl bg-transparent border-none"
                >
                  ✖️
                </button>
              </div>
            </div>
          )}
          <h1 className="text-3xl font-bold mb-7 mt-5">{property.tittle}</h1>
          <div className="grid lg:grid-cols-2 mt-5">
            <p className="text-gray-700 mb-2">
              <b>Precio:</b> {formatCurrency(property.price)}
            </p>
            <p className="text-gray-700 mb-2">
              <b>Habitaciones:</b> {property.rooms}
            </p>
            <p className="text-gray-700 mb-2">
              <b>Baños:</b> {property.bathrooms}
            </p>
            <p className="text-gray-700 mb-2">
              <b>Área:</b> {property.area}m²
            </p>
            <p className="text-gray-700 mb-2">
              <b>Ubicación:</b> {property.location}
            </p>
            <p className="text-gray-700 mb-2">
              <b>Estrato:</b> {property.stratum}
            </p>
            <p className="text-gray-700 mb-2">
              <b>Antiguedad:</b> {property.antique}
            </p>
            <p className="text-gray-700 mb-2">
              <b>Parqueadero:</b> {property.parking ? "Sí" : "No"}
            </p>
          </div>
          <p className="text-lg mb-4 font-bold mt-7">{property.description}</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
