import { lazy, Suspense } from "react"; // Para mejorar el performance de la aplicación, por defecto al hacer el npm run build, se crea un archivo js con toda la aplicación, osea que el usuario sin ingresar a las demás páginas ya las ha descargado. Con ese lazy queremos que al hacer el npm run build se cree un archivo tanto para toda la aplicación y uno aparte para cada página, si tuviéramos más archivo se crea uno para cada uno, de esa forma se vuelven más ligeros, y esto se hace para que solo se descarguen cuándo el usuario se dirija a esa página.
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importamos con npm i react-router-dom y eso instala react-router que nos permite navegar por diferentes páginas.

const IndexPage = lazy(() => import("./views/IndexPage"));
const UsPage = lazy(() => import("./views/UsPage"));
const Properties = lazy(() => import("./views/Properties"));
const Contact = lazy(() => import("./views/Contact"));
const PropertyDetails = lazy(() => import("./views/PropertyDetails"));
const ArticleDetails = lazy(() => import("./views/ArticleDetails"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback="Cargando...">
              <IndexPage />
            </Suspense>
          }
          index
        />
        <Route
          path="/nosotros"
          element={
            <Suspense fallback="Cargando...">
              <UsPage />
            </Suspense>
          }
        />
        <Route
          path="/propiedades"
          element={
            <Suspense fallback="Cargando...">
              <Properties />
            </Suspense>
          }
        />
        <Route
          path="/contacto"
          element={
            <Suspense fallback="Cargando...">
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/property/:id"
          element={
            <Suspense fallback="Cargando...">
              <PropertyDetails />
            </Suspense>
          }
        />
        <Route
          path="/article/:id"
          element={
            <Suspense fallback="Cargando...">
              <ArticleDetails />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
