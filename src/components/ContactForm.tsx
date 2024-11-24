import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    telefono: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Manejar cambios en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Enviar el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, lastname, email, telefono, message } = formData;

    // Validar campos del formulario
    if (!name || !lastname || !email || !telefono || !message) {
      toast.error("Por favor, completa todos los campos.");
      setIsSubmitting(false);
      return;
    }

    // Parámetros para la plantilla de EmailJS
    const templateParams = {
      from_name: `${name} ${lastname}`,
      from_email: email,
      user_phone: telefono,
      message: message,
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID!,
        import.meta.env.VITE_TEMPLATE_ID!,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY!
      );

      if (response.status === 200) {
        toast.success(
          "Mensaje enviado correctamente. ¡Gracias por contactarnos!"
        );
        setFormData({
          name: "",
          lastname: "",
          email: "",
          telefono: "",
          message: "",
        });
      } else {
        toast.error(
          "Ocurrió un error al enviar el mensaje. Intenta nuevamente más tarde."
        );
      }
    } catch (error) {
      console.error(error);
      toast.error(
        "Ocurrió un error al enviar el mensaje. Intenta nuevamente más tarde."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="lg:w-[1200px] lg:flex lg:justify-between lg:grid-cols-2 gap-5 p-5 my-10">
        <form
          onSubmit={handleSubmit}
          className="lg:w-[550px] p-6 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Contáctanos</h2>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Apellidos
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="telefono"
              className="block text-sm font-medium text-gray-700"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>

        <div className="lg:w-[500px] mt-20 lg:mt-0">
          <h2 className="font-bold text-xl mt-6">
            También puedes contactarnos por estos medios
          </h2>

          <div className="lg:flex lg:grid-cols-2 lg:gap-5 mt-10 lg:mt-20 ">
            <img src="/email.svg" className="h-10 w-16" alt="Email" />
            <a
              href="mailto:terrapleninmobiliaria@gmail.com"
              className="text-start"
            >
              <p className="font-bold">Envíanos un email:</p>
              <p>terrapleninmobiliaria@gmail.com</p>
            </a>
          </div>

          <div className="lg:flex lg:grid-cols-2 lg:gap-5 mt-7 lg:mt-20 lg:ms-20">
            <img src="/telefono.svg" className="h-10 w-16" alt="Teléfono" />
            <a href="tel:+573155088277" className="text-start">
              <p className="font-bold">Llámanos o escríbenos:</p>
              <p>+57 315-508-8277</p>
            </a>
          </div>

          <div className="lg:flex lg:grid-cols-2 lg:gap-5 mt-7 lg:mt-20 lg:ms-40">
            <img src="/horarios.svg" className="h-10 w-16" alt="Horarios" />
            <div>
              <p className="font-bold">Estos son nuestros horarios:</p>
              <p>Lunes a Viernes:</p>
              <p>8:00a.m. - 1:00p.m.</p>
              <p>2:00p.m. - 6:00p.m.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Contenedor para los toasts */}
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}
