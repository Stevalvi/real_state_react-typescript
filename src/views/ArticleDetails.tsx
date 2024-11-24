import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { articles } from "../data/articles"; // Asegúrate de importar correctamente tu data

export default function ArticleDetails() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((art) => art.id === Number(id)); // Encuentra el artículo por ID
  const ArticleImages = ["/articulo4.jpg"];

  // Si no se encuentra el artículo, muestra un mensaje
  if (!article) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Artículo no encontrado</h1>
        <p className="text-gray-600 mt-4">
          Lo sentimos, no pudimos encontrar el artículo solicitado.
        </p>
      </div>
    );
  }

  // Divide la descripción en párrafos por el delimitador '\n\n'
  const descriptionParagraphs = article.description.split("\n\n");

  return (
    <>
      <Header
        images={ArticleImages}
        messageText='"Entérate de las últimas novedades"'
      />
      <div className="max-w-4xl mx-auto p-4 mt-10 mb-10">
        {/* Card contenedor de la imagen y la información */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Imagen del artículo */}
          <div className="relative">
            <img
              src={`/${article.images[0]}`} // Primera imagen del artículo
              alt={article.tittle}
              className="w-full h-96 object-cover mb-4 rounded-lg"
            />
          </div>

          {/* Título del artículo */}
          <h1 className="text-3xl font-bold mb-7 mt-5">{article.tittle}</h1>

          {/* Descripción del artículo separada en párrafos */}
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-700 mb-4">
              {paragraph}
            </p>
          ))}

          {/* Información adicional */}
          <div className="text-gray-600 flex justify-between mt-16">
            <p>
              <strong>Fecha:</strong> {article.date}
            </p>
            <p>
              <strong>Autor:</strong> {article.by}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
