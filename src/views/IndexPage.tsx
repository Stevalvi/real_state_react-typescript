import Footer from "../components/Footer";
import Slider from "../components/Slider";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";
import { useNavigate } from "react-router-dom";
import PropertyPublish from "../components/PropertyPublish";
import ArticlesCard from "../components/ArticlesCard";
import { articles } from "../data/articles";

export default function IndexPage() {
  const homeImages = ["/paisaje.jpg", "/paisaje2.jpg", "/paisaje3.jpg"];
  const navigate = useNavigate();

  // Seleccionar la propiedad destacada (ID 2)
  const featuredPropertyId = 2;
  const featuredProperty = properties.find(
    (prop) => prop.id === featuredPropertyId
  );

  const handleViewDetails = () => {
    navigate(`/property/${featuredPropertyId}`);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(value);
  };

  // Seleccionar algunas propiedades destacadas (por ejemplo, las primeras 6)
  const featuredProperties = properties.slice(0, 6);
  const featuredArticles = articles.slice(0, 3);

  return (
    <>
      <Slider
        images={homeImages}
        messageText="Para cada gusto y necesidad, le tenemos su propiedad"
      />

      <h1
        className="uppercase font-bold text-center mt-5 text-white p-5 text-3xl"
        style={{
          background:
            "linear-gradient(90deg, rgba(212,211,227,1) 10%, rgba(0,0,0,1) 51%, rgba(212,211,227,1) 90%",
        }}
      >
        Nuestras propiedades
      </h1>

      {/* Sección de propiedades destacadas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Botón para ver todas las propiedades */}
      <div className="text-center my-6">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          onClick={() => navigate("/propiedades")}
        >
          Ver todas las propiedades
        </button>
      </div>

      <div className="my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Columna izquierda: Imagen de la casa */}
          <div className="w-full lg:h-[500px]">
            <img
              src="/casa5.webp"
              alt="Casa destacada"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Columna derecha: Detalles de la propiedad */}
          <div className="p-14 rounded-lg shadow-lg flex flex-col lg:h-[500px] bg-sky-900 relative">
            <h2 className="text-center text-3xl font-bold text-white">
              Propiedad Destacada
            </h2>
            <h2 className="text-2xl font-bold mb-4 text-white mt-10">
              {featuredProperty?.tittle || "Propiedad no disponible"}
            </h2>

            <ul className="text-white mb-4">
              <li>
                <strong>
                  <b>Precio:</b>
                </strong>{" "}
                {featuredProperty?.price
                  ? formatCurrency(featuredProperty.price)
                  : "N/A"}
              </li>
              <li>
                <strong>
                  <b>Habitaciones:</b>
                </strong>{" "}
                {featuredProperty?.rooms || "N/A"}
              </li>
              <li>
                <strong>
                  <b>Baños:</b>
                </strong>{" "}
                {featuredProperty?.bathrooms || "N/A"}
              </li>
              <li>
                <strong>
                  <b>Área:</b>
                </strong>{" "}
                {featuredProperty?.area || "N/A"}m²
              </li>
              <li>
                <strong>
                  <b>Parqueadero:</b>
                </strong>{" "}
                {featuredProperty?.parking ? "Sí" : "No"}
              </li>
            </ul>
            <p className="text-white mb-4">
              {featuredProperty?.description || "Descripción no disponible"}
            </p>
            <button
              className="bg-blue-500 font-bold text-white px-6 py-3 rounded-md hover:bg-blue-600 self-start absolute bottom-[-20px] lg:bottom-14 left-24 lg:left-14"
              onClick={handleViewDetails}
            >
              Ver más detalles
            </button>
          </div>
        </div>
      </div>

      <div className="my-48">
        <PropertyPublish />
      </div>

      <div className="my-28">
        <h2
          className="text-center font-bold text-3xl p-5 text-white"
          style={{
            background:
              "linear-gradient(90deg, rgba(212,211,227,1) 10%, rgba(0,0,0,1) 51%, rgba(212,211,227,1) 90%",
          }}
        >
          Artículos
        </h2>
        {/* Sección de propiedades destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {featuredArticles.map((articles) => (
            <ArticlesCard articles={articles} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
