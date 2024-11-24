import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PropertyPublish() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    telefono: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null); // Ref para el componente
  const [isVisible, setIsVisible] = useState(false); // Estado para saber si el componente es visible

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

  // Valores fijos para el contenido
  const title = "¡Confíanos tu inmueble!";
  const description =
    "Con Terraplén, llega a miles de compradores potenciales.";
  const image1 = "publish.webp"; // Reemplaza con la URL real de tu imagen
  const image2 = "publish2.jpg"; // Reemplaza con la URL real de tu imagen

  // Intersection Observer: Detectar cuándo la sección es visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Activar visibilidad cuando la sección esté en pantalla
        }
      },
      { threshold: 0.5 } // Detectar visibilidad al 50%
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Cambiar el estado `showForm` solo si el componente es visible
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowForm(true), 5000); // Temporizador solo cuando es visible
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <>
      <div className="bg-indigo-300" ref={sectionRef}>
        <div className="w-full lg:w-[1200px] mx-auto lg:h-[400px] sm:h-auto flex flex-col lg:flex-row items-center justify-center">
          {!showForm ? (
            <div className="w-full h-full flex flex-col lg:flex-row">
              {/* Columna izquierda */}
              <div className="lg:w-1/2 w-full lg:h-full flex flex-col justify-center items-start p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  {title}
                </h1>
                <p className="text-2xl font-bold text-white">{description}</p>
              </div>
              {/* Columna derecha */}
              <div className="lg:w-1/2 w-full lg:h-full">
                <img
                  src={image1}
                  alt="Primera vista"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col lg:flex-row">
              {/* Columna izquierda */}
              <div className="lg:w-1/2 w-full lg:h-full">
                <img
                  src={image2}
                  alt="Segunda vista"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="lg:w-1/2 w-full lg:h-full flex justify-center items-center p-8">
                <form
                  onSubmit={handleSubmit}
                  className="w-full lg:w-[550px] p-6 bg-white shadow-lg rounded-lg"
                >
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    Contáctanos
                  </h2>

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
              </div>
            </div>
          )}
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}
