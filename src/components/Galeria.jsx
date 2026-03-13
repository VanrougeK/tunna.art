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
  const [selected, setSelected] = useState(null)
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
            onClick={() => item.type === "img" && setSelected(item)}
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

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(0, 0, 0, 0.7)"}}
        onClick={() => setSelected (null)}>

          <div className="relative max-w-3xl w-full"
          onClick={e => e.stopPropagation()}>
            <button
            onClick={() => setSelected(null)}
            className="absolute -top-4 -right-4 w-8 h-8 rounded-full font-bold text-sm z-10"
            style={{ background: "#ff6eb4", color: "#fff"}}>𖦹</button>

            <img src={selected.img} alt={selected.img} 
            className="w-full h-auto rounded-2xl"
            style={{ boxShadow: "0 8px 32px rgba(160, 112, 192, 0.4)"}}/>
            <p className="text-center text-xs font-bold mt-3" style={{ color: "#fff"}}>{selected.info}</p>
          </div>
        </div>
      )}
    </section>
  );
}
