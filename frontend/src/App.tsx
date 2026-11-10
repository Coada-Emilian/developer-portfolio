import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

import MainLayout from "./components/layout/main-layout/MainLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
