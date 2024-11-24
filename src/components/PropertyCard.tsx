import { useNavigate } from "react-router-dom";
import { Properties } from "../types";

interface PropertyCardProps {
  property: Properties;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/property/${property.id}`);
  };

  // Función para formatear el precio como COP
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img
        src={property.images[0]}
        alt={property.tittle}
        className="h-48 w-full object-cover font-bold"
      />
      <div className="p-4">
        <h2 className="text-xl text-gray-600  font-bold">{property.tittle}</h2>
        <p className="text-gray-600 mt-4">
          <b>Precio:</b> {formatCurrency(property.price)}
        </p>
        <p className="text-gray-600">
          <b>Habitaciones:</b> {property.rooms}
        </p>
        <p className="text-gray-600">
          <b>Baños:</b> {property.bathrooms}
        </p>
        <p className="text-gray-600">
          <b>Área:</b> {property.area}m²
        </p>
        <p className="text-gray-600">
          <b>Parqueadero:</b> {property.parking ? "Sí" : "No"}
        </p>
        <p className="text-gray-600 mt-4">{property.description}</p>
        <button
          className="mt-4 border-indigo-500 border-x border-y hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-md w-full"
          onClick={handleViewDetails}
        >
          Ver Propiedad
        </button>
      </div>
    </div>
  );
}
