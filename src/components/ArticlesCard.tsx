import { useNavigate } from "react-router-dom";
import { Articles } from "../types";

interface ArticlesCardProps {
  articles: Articles;
}

export default function ArticlesCard({ articles }: ArticlesCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/article/${articles.id}`);
  };

  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img
        src={articles.images[0]}
        alt={articles.tittle}
        className="h-48 w-full object-cover font-bold"
      />
      <div className="p-4">
        <h2 className="text-xl text-gray-600  font-bold">{articles.tittle}</h2>

        <button
          className="mt-4 border-indigo-500 border-x border-y hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-md w-full"
          onClick={handleViewDetails}
        >
          Ver Articulo
        </button>
      </div>
    </div>
  );
}
