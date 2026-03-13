import { useState } from "react";
import React from "react";

export default function Experiencia() {
  const software = [
    { id: 1, name: "Ibis Paint X", img: "/img/ibis-paint-x_logo.png" },
    { id: 2, name: "Clip Paint Studio", img: "img/Clipstudiopaint_logo.png" },
    { id: 3, name: "Blender", img: "/img/blender_logo.png" },
  ];

  return (
    <section
      id="experiencia"
      className="px-4 md:px-12 py-10"
      style={{ background: "linear-gradient(180deg, #c9b3ff, #ffb3d9" }}
    >
      <h2
        className="text-lg font-bold mb-4 md:text-2xl"
        style={{ color: "#fff", textShadow: "2px 2px 0px #a070c0" }}
      >
        {" "}
        ✦ Experiencia{" "}
      </h2>

      <p
        className="text-sm mb-8 rounded-2xl px-4 py-3 max-w-lg"
        style={{ background: "rgba(255, 255, 255, 0.4)", color: "#a070c0" }}
      > desc aca
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 justify-items-center">
        {software.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-3 rounded-2xl px-6 py-4 w-full"
            style={{ background: "rgba(255, 255, 255, 0.4)" }}
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