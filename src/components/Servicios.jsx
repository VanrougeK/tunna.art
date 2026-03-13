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
      <h2
        className="text-lg font-bold mb-4 md:text-2xl"
        style={{ color: "#fff", textShadow: "2px 2px 0px #a070c0" }}
      >
        {" "}
        ✦ Servicios{" "}
      </h2>

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
          <p className="text-xs leading-6 px-6" style={{ color: "#a070c0" }}>
            <li>Hojas de referencia</li>
            <li>Regalos para fechas especiales</li>
            <li>Iconos de perfil</li>
            <li>Banners</li>
            <li>Stickers</li>
            <li>Chibis</li>
            <li>Ilustraciones para libros</li>
            <li>Portadas</li>
            Preguntar para mas . . .
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
          <p className="text-xs leading-6 px-6" style={{ color: "#a070c0" }}>
            {" "}
            <b>SI</b> hago:
            <li>Moe</li>
            <li>Furry</li>
            <li>Chibi</li>
          </p>
          <p className="text-xs leading-6 px-6" style={{ color: "#a070c0" }}>
            {" "}
            <b>NO</b> hago:
            <li>Eroguro</li>
            <li>Mecha</li>
            <li>+18</li>
            <li>Escenarios complejos</li>
            <br />Se realiza primero la mitad del pago y se puede realizar multiples
            revisiones, al terminar se realiza el 2do pago y se manda por correo
          </p>
        </div>
      </div>
    </section>
  );
}
