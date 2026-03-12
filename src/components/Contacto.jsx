import { useState } from "react";
import React from "react";

export default function Contacto() {
  const [form, setForm] = useState({ email: "", details: "", service: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const inputStyle = {
    background: "rgba(255, 255, 255, 0.6)",
    border: "2px solid rgba(160, 112, 192, 0.3)",
    borderRadius: "12px",
    padding: "0.5rem 1rem",
    fontSize: "0.75rem",
    color: "#a070c0",
    outline: "none",
    width: "100%",
  };

  return (
    <section
      id="contacto"
      className="px-12 py-10"
      style={{ background: "linear-gradient(180deg, #b3ffda, #ffb3d9)" }}
    >
      <h2
        className="text-2xl font-bold mb-8"
        style={{ color: "#fff", textShadow: "2px 2px 0px #a070c0" }}
      >
        ✦ Contacto
      </h2>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl p-8 max-w-3xl flex flex-col gap-5"
        style={{ background: "rgba(255, 255, 255, 0.4)" }}
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label
              className="text-xs font-bold"
              style={{ color: "#a070c0" }}
            >
              Correo electronico:
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tucorreo@gmail.com"
              style={inputStyle}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-xs font-bold"
              style={{ color: "#a070c0" }}
            >
              Servicio:
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Opciones</option>
              <option value="op1">Icono de perfil</option>
              <option value="op2">Banner</option>
              <option value="op3">Pareja</option>
              <option value="op4">Fecha especial</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="text-xs font-bold"
            style={{ color: "#a070c0" }}
          >
            Detalles del contacto:
          </label>
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            placeholder="Detalles del servicio a solicitar"
            rows={5}
            style={{ ...inputStyle, resize: "none" }}
          ></textarea>

          <div className="flex justify-end">
            <button
              className="text-xs font-bold px-5 py-2 rounded-full"
              style={{
                background: "#ff6eb4",
                color: "#fff",
                whiteSpace: "nowrap",
              }}
              type="submit"
            >
              Confirmar solicitud
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
