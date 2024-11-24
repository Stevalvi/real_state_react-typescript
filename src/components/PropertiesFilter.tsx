import { useState } from "react";
import { properties } from "../data/properties";

interface Filters {
  type: string;
  location: string;
  rooms: string;
  bathrooms: string;
  stratum: string;
  minPrice: number;
  maxPrice: number;
  antique: string;
  minArea: number;
  maxArea: number;
  parking: boolean;
}

interface PropertiesFilterProps {
  onFilter: (filteredProperties: typeof properties) => void;
}

export default function PropertiesFilter({ onFilter }: PropertiesFilterProps) {
  const [filters, setFilters] = useState<Filters>({
    type: "",
    location: "",
    rooms: "",
    bathrooms: "",
    stratum: "",
    minPrice: 0,
    maxPrice: 0,
    antique: "",
    minArea: 0,
    maxArea: 0,
    parking: false,
  });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(value);
  };

  // Manejar los cambios de los filtros
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      setFilters({
        ...filters,
        [name]: e.target.checked,
      });
    } else {
      setFilters({
        ...filters,
        [name]: value,
      });
    }
  };

  // Aplicar filtros
  const applyFilters = () => {
    let result = properties;
    const minPrice = Number(filters.minPrice);
    const maxPrice = Number(filters.maxPrice);

    if (filters.type) {
      result = result.filter((property) => property.type === filters.type);
    }
    if (filters.location) {
      result = result.filter((property) =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    if (filters.rooms) {
      if (filters.rooms === "5+") {
        result = result.filter((property) => property.rooms >= 5);
      } else {
        const rooms = parseInt(filters.rooms);
        result = result.filter((property) => property.rooms === rooms);
      }
    }
    if (filters.bathrooms) {
      if (filters.bathrooms === "3+") {
        result = result.filter((property) => property.bathrooms >= 3);
      } else {
        const bathrooms = parseInt(filters.bathrooms);
        result = result.filter((property) => property.bathrooms === bathrooms);
      }
    }
    if (filters.stratum) {
      result = result.filter(
        (property) => property.stratum === parseInt(filters.stratum)
      );
    }
    if (minPrice > 0) {
      result = result.filter((property) => property.price >= minPrice);
    }
    if (maxPrice > 0) {
      result = result.filter((property) => property.price <= maxPrice);
    }
    if (filters.antique) {
      result = result.filter(
        (property) => property.antique === filters.antique
      );
    }
    if (filters.minArea > 0) {
      result = result.filter((property) => property.area >= filters.minArea);
    }
    if (filters.maxArea > 0) {
      result = result.filter((property) => property.area <= filters.maxArea);
    }
    if (filters.parking) {
      result = result.filter((property) => property.parking === true);
    }

    onFilter(result);
  };

  const clearFilters = () => {
    setFilters({
      type: "",
      location: "",
      rooms: "",
      bathrooms: "",
      stratum: "",
      minPrice: 0,
      maxPrice: 0,
      antique: "",
      minArea: 0,
      maxArea: 0,
      parking: false,
    });
    onFilter(properties);
  };

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4 p-6">
      <select
        name="type"
        value={filters.type}
        className="border p-2 rounded-md"
        onChange={handleFilterChange}
      >
        <option value="">Tipo de Inmueble</option>
        <option value="Casa">Casa</option>
        <option value="Apartamento">Apartamento</option>
        <option value="Casa Campestre">Casa Campestre</option>
        <option value="Finca">Finca</option>
      </select>

      <input
        type="text"
        name="location"
        value={filters.location}
        placeholder="Ubicación"
        className="border p-2 rounded-md"
        onChange={handleFilterChange}
      />

      <select
        name="rooms"
        value={filters.rooms}
        className="border p-2 rounded-md"
        onChange={handleFilterChange}
      >
        <option value="">Habitaciones</option>
        <option value="1">1 Habitación</option>
        <option value="2">2 Habitaciones</option>
        <option value="3">3 Habitaciones</option>
        <option value="4">4 Habitaciones</option>
        <option value="5+">5+ Habitaciones</option>
      </select>

      <select
        name="bathrooms"
        value={filters.bathrooms}
        className="border p-2 rounded-md"
        onChange={handleFilterChange}
      >
        <option value="">Baños</option>
        <option value="1">1 Baño</option>
        <option value="2">2 Baños</option>
        <option value="3+">3+ Baños</option>
      </select>

      <select
        name="stratum"
        value={filters.stratum}
        className="border p-2 rounded-md"
        onChange={handleFilterChange}
      >
        <option value="">Estrato</option>
        {[1, 2, 3, 4, 5, 6].map((stratum) => (
          <option key={stratum} value={stratum}>
            Estrato {stratum}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="minPrice"
        value={filters.minPrice > 0 ? formatCurrency(filters.minPrice) : ""}
        placeholder="Precio Mínimo"
        className="border p-2 rounded-md"
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, ""); // Eliminar caracteres no numéricos
          setFilters({ ...filters, minPrice: parseInt(value) || 0 });
        }}
        onFocus={(e) =>
          (e.target.value =
            filters.minPrice > 0 ? filters.minPrice.toString() : "")
        }
        onBlur={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value)) {
            setFilters({ ...filters, minPrice: value });
          }
        }}
      />
      <input
        type="text"
        name="maxPrice"
        value={filters.maxPrice > 0 ? formatCurrency(filters.maxPrice) : ""}
        placeholder="Precio Máximo"
        className="border p-2 rounded-md"
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, ""); // Eliminar caracteres no numéricos
          setFilters({ ...filters, maxPrice: parseInt(value) || 0 });
        }}
        onFocus={(e) =>
          (e.target.value =
            filters.maxPrice > 0 ? filters.maxPrice.toString() : "")
        }
        onBlur={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value)) {
            setFilters({ ...filters, maxPrice: value });
          }
        }}
      />

      <select
        name="antique"
        value={filters.antique}
        className="border p-2 rounded-md"
        onChange={handleFilterChange}
      >
        <option value="">Antiguedad</option>
        <option value="menores a 1 año">Menores a 1 año</option>
        <option value="de 1 a 8 años">De 1 a 8 años</option>
        <option value="de 9 a 15 años">De 9 a 15 años</option>
        <option value="de 15 a 30 años">De 15 a 30 años</option>
        <option value="más de 30 años">Más de 30 años</option>
      </select>

      <input
        type="number"
        name="minArea"
        value={filters.minArea || ""}
        placeholder="Área mínima (m²)"
        className="border p-2 rounded-md"
        onChange={handleFilterChange}
      />

      <input
        type="number"
        name="maxArea"
        value={filters.maxArea || ""}
        placeholder="Área máxima (m²)"
        className="border p-2 rounded-md"
        onChange={handleFilterChange}
      />

      <div className="flex items-center">
        <input
          type="checkbox"
          name="parking"
          checked={filters.parking}
          className="mr-2"
          onChange={handleFilterChange}
        />
        <label>Con Parqueadero</label>
      </div>

      <button
        className="border-blue-500 border-x border-y px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white"
        onClick={applyFilters}
      >
        Aplicar Filtros
      </button>

      {/* Botón para limpiar filtros */}
      <button
        className="border-red-500 border-x border-y px-4 py-2 rounded-md hover:bg-red-600 hover:text-white"
        onClick={clearFilters}
      >
        Limpiar Filtros
      </button>
    </div>
  );
}
