import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Container from "./components/Container";
import AppBar from "./components/AppBar";

const HomePage = lazy(() => import("./pages/HomePage"));
const HeroesPage = lazy(() => import("./pages/HeroesPage"));

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/heroes" element={<HeroesPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
