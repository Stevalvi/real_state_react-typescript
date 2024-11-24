import { useState } from "react";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import PropertyCard from "../components/PropertyCard";
import PropertiesFilter from "../components/PropertiesFilter";
import { properties } from "../data/properties";
import PropertyPublish from "../components/PropertyPublish";

export default function Properties() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const aboutImages = ["/casa1.jpg", "/casa2.jpg", "/casa3.png"];

  return (
    <>
      <Slider
        images={aboutImages}
        messageText="En Terraplén trabajamos por hacer realidad tus proyectos"
      />

      <h1
        className="uppercase font-bold text-center mt-5 text-white p-5 text-lg"
        style={{
          background:
            "linear-gradient(90deg, rgba(212,211,227,1) 10%, rgba(0,0,0,1) 51%, rgba(212,211,227,1) 90%",
        }}
      >
        Nuestras propiedades
      </h1>

      <PropertiesFilter onFilter={setFilteredProperties} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No se encontraron propiedades.
          </p>
        )}
      </div>

      <div className="my-48">
        <PropertyPublish />
      </div>

      <Footer />
    </>
  );
}
