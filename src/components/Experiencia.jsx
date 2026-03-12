import { useState } from "react";
import React from "react";

export default function Experiencia() {
  const software = [
    { id: 1, name: "Ibis Paint X", img: "public/img/ibis-paint-x_logo.png" },
    { id: 2, name: "Clip Paint Studio", img: "/Clipstudiopaint_logo.png" },
    { id: 3, name: "Blender", img: "public/img/blender_logo.png" },
  ];

  return (
    <section
      id="experiencia"
      className="px-12 py-10"
      style={{ background: "linear-gradient(180deg, #c9b3ff, #ffb3d9" }}
    >
      <h2
        className="text-2xl font-bold mb-4"
        style={{ color: "#fff", textShadow: "2px 2px 0px #a070c0" }}
      >
        {" "}
        ✦ Experiencia{" "}
      </h2>

      <p
        className="text-sm mb-8 rounded-2xl px-4 py-3 max-w-lg"
        style={{ background: "rgba(255, 255, 255, 0.4", color: "#a070c0" }}
      >
        
      </p>

      <div className="flex gap-8 justify-center">
        {software.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-3 rounded-2xl px-6 py-4"
            style={{ background: "rgba(255, 255, 255, 0.4" }}
          >
            <img
              className="w-20 h-20 object-contain"
              src={item.img}
              alt={item.name}
            />

            <p className="text-xs font-bold" style={{ color: "#a070c0" }}>
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}