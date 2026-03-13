import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="w-full font-mono"
      style={{
        background: "linear-gradient(90deg, #ffb3d9, #c9b3ff, #b3d9ff)",
      }}
    >
      <div
        className="text-center py-1"
        style={{ background: "rgba(255, 255, 255, 0.3)" }}
      >
        <span
          className="text-xl md:text-7xl font-bold"
          style={{ color: "#a070c0" }}
        >
          ✦ tunna.art ✦
        </span>
      </div>

      <div
        className="px-3 py-1 text-center"
        style={{ background: "rgba(255, 255, 255, 0.2)" }}
      >
        <span className="text-lg" style={{ color: "#c090e0" }}>
          {" "}
          https://tunna.art{" "}
        </span>
      </div>

      <div className="flex justify-between items-center px-6 py-2">
        <ul className="hidden md:flex gap-6 list-none m-0">
          <li>
            <a
              href="#galeria"
              className="text-sm hover:underline"
              style={{ color: "#fff" }}
            >
              Galeria
            </a>
          </li>
          <li>
            <a
              href="#experiencia"
              className="text-sm hover:underline"
              style={{ color: "#fff" }}
            >
              Experiencia
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              className="text-sm hover:underline"
              style={{ color: "#fff" }}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-sm hover:underline"
              style={{ color: "#fff" }}
            >
              Contacto
            </a>
          </li>
          <li>
            <a
              href="https://github.com/VanrougeK/Proyecto-MT"
              className="text-sm hover:underline"
              style={{ color: "#fff" }}
            >
              Repo original
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-white text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✳" : "✴"}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden flex flex-col px-6 pb-4 gap-3"
          style={{ background: "rgba(255, 255, 255, 0.1)" }}
        >
          <a
            href="#juego"
            onClick={() => setOpen(false)}
            className="text-sm"
            style={{ color: "#fff" }}
          >
            Juego
          </a>
          <a
            href="#galeria"
            onClick={() => setOpen(false)}
            className="text-sm"
            style={{ color: "#fff" }}
          >
            Galeria
          </a>
          <a
            href="#experiencia"
            onClick={() => setOpen(false)}
            className="text-sm"
            style={{ color: "#fff" }}
          >
            Experiencia
          </a>
          <a
            href="#servicios"
            onClick={() => setOpen(false)}
            className="text-sm"
            style={{ color: "#fff" }}
          >
            Servicios
          </a>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="text-sm"
            style={{ color: "#fff" }}
          >
            Contacto
          </a>
          <a
            href="https://github.com/VanrougeK/Proyecto-MT"
            onClick={() => setOpen(false)}
            className="text-sm"
            style={{ color: "#fff" }}
          >
            Repo original
          </a>
        </div>
      )}
    </nav>
  );
}
