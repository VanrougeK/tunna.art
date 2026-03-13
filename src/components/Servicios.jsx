import { useState } from "react";
import React from "react";

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="md:px-12 px-4 py-10"
      style={{
        background:
          "linear-gradient(135deg, #ffb3d9, #c9b3ff, #b3d9ff, #b3ffda)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="rounded-2xl p-6"
          style={{ background: "rgba(255, 255, 255, 0.4" }}
        >
          <h2
            className="text-lg md:text-xl font-bold mb-4"
            style={{ color: "#ff6eb4", textShadow: "2px 2px 0px #ffb3d9" }}
          >
            Servicios
          </h2>
          <p className="text-xs leading-6" style={{ color: "#a070c0" }}>
            Dibujos jsjjs agregar mas en formato lista
          </p>
        </div>

        <div
          className="rounded-2xl p-6"
          style={{ background: "rgba(255, 255, 255, 0.4" }}
        >
          <h2
            className="text-lg md:text-xl font-bold mb-4"
            style={{ color: "#ff6eb4", textShadow: "2px 2px 0px #ffb3d9" }}
          >
            Reglas
          </h2>
          <h3 className="text-sm leading-6" style={{ color: "#a070c0" }}>
            ¿Que hago y que <b>no</b> hago?
          </h3>
        </div>
      </div>
    </section>
  );
}