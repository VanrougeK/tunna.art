import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Galeria from "./components/Galeria";
import Contacto from "./components/Contacto";
import Experiencia from "./components/Experiencia";
import Juego from "./components/Juego";

export default function App() {

  return (
    <div className="p-4" style={{
        background:
          "linear-gradient(135deg, #ffb3d9, #c9b3ff, #b3d9ff, #b3ffda)",
      }}>
      <Navbar />

        <Hero />
        <Juego />
        <Galeria />
        <Experiencia />
        <Servicios />
        <Contacto />
    </div>
  );
}