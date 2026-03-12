import React from "react";

export default function Hero() {
  return (
    <section
      className="flex justify-between items-center px-12 py-10 min-h-64"
      style={{
        background:
          "linear-gradient(135deg, #ffb3d9, #c9b3ff, #b3d9ff, #b3ffda)",
      }}
    >
      <div className="flex flex-col gap-4">
        <h1
          className="text-7xl font-bold"
          style={{
            color: "#ff6eb4",
            textShadow: "3px 3px 0px #fff, 6px 6px 0px #ffb3d9",
            fontFamily: "cursive",
          }}
        >
          TUNNA
        </h1>

        <p
          className="text-xs leading-6 max-w-xs rounded-2xl px-4 py-3 text-center"
          style={{ background: "rgba(255, 255, 255, 0.5)", color: "#a070c0" }}
        >
          ola papuh ola mamuh
        </p>

        {/* Hacer diseño gif aca */}
        <div className="flex gap-3 mt-2">
          <a
            href="#galeria"
            className="text-xs px-4 py-2 rounded-full font-bold"
            style={{ background: "#ff6eb4", color: "#fff" }}
          >
            ✦ Ver galeria
          </a>

          <a
            href="#contacto"
            className="text-xs px-4 py-2 rounded-full font-bold"
            style={{ background: "rgba(255, 255, 255, 0.6)", color: "#a070c0" }}
          >
            {" "}
            Contacto{" "}
          </a>
        </div>
      </div>

      <div>
        <img
          src="/img/img-chibi.png"
          alt="Gif de personaje"
          className="w-56 h-auto drop-shadow-lg"
        />
      </div>
    </section>
  );
}