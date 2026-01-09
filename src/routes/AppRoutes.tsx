import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

import Home from "@/pages/Home";
import Design from "@/pages/design";
import Projects from "@/pages/Projects";
import Services from "@/pages/Service";
import Contact from "@/pages/Contact";

const AppRoutes: React.FC = () => {
  return (
<Routes>
    <Route index element={<Home />} />

  <Route element={<MainLayout />}>
    <Route path="design" element={<Design />} />
    <Route path="projects" element={<Projects />} />
    <Route path="services" element={<Services />} />
    <Route path="contact" element={<Contact />} />
  </Route>
</Routes>

  );
};

export default AppRoutes;