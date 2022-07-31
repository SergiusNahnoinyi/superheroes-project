import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Container from "./components/Container";
import AppBar from "./components/AppBar";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const HeroesPage = lazy(() => import("./pages/HeroesPage"));
const HeroDetailsPage = lazy(() => import("./pages/HeroDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/heroes" element={<HeroesPage />} />
          <Route path="/heroes/:heroId" element={<HeroDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </Container>
  );
}
