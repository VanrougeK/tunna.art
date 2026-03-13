import { useState } from "react";
import React from "react";

export default function Galeria() {
  const items = [
    { id: 1, info: "Dibujo 1", img: "/img/Scarlett.png", type: "img" },
    { id: 2, info: "Dibujo 2", img: "/img/furro.png", type: "img" },
    { id: 3, info: "Dibujo 3", img: "/img/quackity.png", type: "img" },
    { id: 4, info: "Dibujo 1", img: "/img/qsmp_2.png", type: "img" },
    { id: 5, info: "Dibujo 2", img: "/img/mmmmm ok.png", type: "img" },
    { id: 6, info: "Video 1", video: "/video/test.mp4", type: "video" },
  ];
  return (
    <section
      id="galeria"
      className="px-4 md:px-12 py-10"
      style={{
        background:
          "linear-gradient(135deg, #ffb3d9, #c9b3ff, #b3d9ff, #b3ffda)",
      }}
    >
      <h2
        className="text-lg md:text-2xl font-bold mb-8"
        style={{
          color: "#fff",
          fontFamily: "",
          textShadow: "2px 2px 0px #a070c0",
        }}
      >
        ✦ Galeria
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl overflow-hidden"
            style={{ background: "rgba(255, 255, 255, 0.4)" }}
          >
            {item.type === "video" ? (
              <video
                autoPlay
                src={item.video}
                className="w-full h-56 object-cover"
                controls
              />
            ) : (
              <img
                src={item.img}
                alt={item.info}
                className="w-full h-56 object-cover"
              />
            )}

            <p
              className="text-xs text-center py-3 font-bold"
              style={{ color: "#a070c0" }}
            >
              {item.info}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
