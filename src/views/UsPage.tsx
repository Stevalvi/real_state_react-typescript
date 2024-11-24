import Footer from "../components/Footer";
import Header from "../components/Header";

export default function UsPage() {
  const UsImages = ["nosotros.jpg"];
  return (
    <>
      <Header
        images={UsImages}
        messageText="En Terraplén, te ayudamos a encontrar el hogar ideal con confianza y compromiso. ¡Tu proyecto inmobiliario, nuestra prioridad!"
      />

      <div className="bg-slate-200 p-3 mt-7">
        <h1 className="text-center text-4xl font-semibold uppercase">
          Sobre nosotros
        </h1>
      </div>
      <div className="mt-5">
        <img
          className="w-full max-w-4xl h-auto mx-auto"
          src="vision-y-mision.jpg"
          alt="Visión y Misión"
        />
      </div>

      {/* Misión Card, alineada a la izquierda */}
      <div
        className="mt-10 p-6 rounded-lg max-w-3xl xl:transform xl:transition-transform xl:hover:scale-110 xl:duration-300 xl:translate-x-32"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(58, 166, 222, 1) 49%, rgba(0, 0, 0, 1) 100%)",
        }}
      >
        <h2 className="font-semibold text-2xl uppercase text-white">Misión</h2>
        <p className="mt-4 text-lg text-white">
          En Terraplén, nos comprometemos a ofrecer soluciones inmobiliarias
          integrales, brindando un servicio personalizado y adaptado a las
          necesidades de cada cliente. A través de nuestra experiencia,
          profesionalismo y honestidad, buscamos simplificar el proceso de
          compra y venta, garantizando que cada decisión esté respaldada por
          información clara y confiable. Nuestra misión es acompañar a nuestros
          clientes en la realización de sus sueños y proyectos inmobiliarios,
          creando relaciones basadas en la confianza, la transparencia y el
          compromiso.
        </p>
      </div>

      {/* Visión Card, movida hacia la derecha */}
      <div
        className="p-6 rounded-lg max-w-3xl mx-auto mt-10 xl:transform xl:transition-transform xl:hover:scale-110 xl:duration-300 xl:translate-x-60 mb-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(58, 166, 222, 1) 49%, rgba(0, 0, 0, 1) 100%)",
        }}
      >
        <h2 className="font-semibold text-2xl uppercase text-white">Visión</h2>
        <p className="mt-4 text-lg text-white">
          En Terraplén, aspiramos a ser una inmobiliaria de referencia en el
          mercado, destacándonos por nuestra capacidad de adaptación a las
          necesidades del entorno y de nuestros clientes. Queremos ser
          reconocidos por ofrecer un servicio de excelencia, que combine la
          experiencia con la innovación, y por construir relaciones duraderas
          basadas en la transparencia y el respeto. Buscamos contribuir al
          desarrollo de la comunidad, ayudando a las personas a encontrar el
          lugar perfecto para vivir, trabajar o invertir, siempre con una visión
          sostenible y orientada al futuro.
        </p>
      </div>

      <Footer />
    </>
  );
}
