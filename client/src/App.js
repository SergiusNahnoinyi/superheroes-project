import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Container from "./components/Container";
import AppBar from "./components/AppBar";

const HeroesPage = lazy(() => import("./pages/HeroesPage"));

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<HeroesPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
