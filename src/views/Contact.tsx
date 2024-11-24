import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const contactImages = ["contacto.webp"]; // Solo una imagen
  return (
    <>
      <Header
        images={contactImages}
        messageText="Estamos dispuestos a ayudarte a encontrar tu proyecto inmobiliario. Contáctanos!"
      />

      <div className=" bg-gray-100 flex items-center justify-center">
        <ContactForm />
      </div>

      <Footer />
    </>
  );
}
