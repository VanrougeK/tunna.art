import React from "react";

export default function Hero() {
  return (
    <section
      className=" relative flex flex-col md:flex-row justify-between items-center px-6 md:px-16 min-h-screen gap-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ffb3d9, #c9b3ff, #b3d9ff, #b3ffda)",
      }}
    >
      <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 gap-4">
        <h1
          className="text-5xl md:text-8xl font-bold"
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

      <div className="absolute bottom-0 right-8 md:right-16 z-16">
        <img
          src="/img/img-chibi.png"
          alt="Gif de personaje"
          className="w-64 md:w-[800px] h-auto drop-shadow-2xl"
          style={{
            filter: "drop-shadow(0px 0px 12px rgba(255, 180, 220, 0.6))",
          }}
        />
      </div>
    </section>
  );
}
