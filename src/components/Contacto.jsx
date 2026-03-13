import { useState } from "react";
import React from "react";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const [form, setForm] = useState({ email: "", details: "", service: "" });
  const [send, setSend] = useState(false);
  const [load, setLoad] = useState(false);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);

    emailjs
      .send(
        "service_90tsrwu",
        "template_0489v4k",
        {
          email: form.email,
          service: form.service,
          details: form.details,
        },
        "tBby89lt-Nlp0I6Mm",
      )
      .then(() => {
        setSend(true);
        setLoad(false);
        setForm({ email: "", details: "", service: "" });
        setTimeout(() => setSend(false), 4000);
      })
      .catch(() => {
        setLoad(false);
        alert("Hubo un error, intentalo de nuevo.");
      });
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
      className="px-4 md:px-12 py-10"
      style={{ background: "linear-gradient(180deg, #b3ffda, #ffb3d9)" }}
    >
      <h2
        className="text-lg md:text-2xl font-bold mb-8"
        style={{ color: "#fff", textShadow: "2px 2px 0px #a070c0" }}
      >
        ✦ Contacto
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full rounded-2xl p-6 md:p-8 max-w-3xl flex flex-col gap-5"
        style={{ background: "rgba(255, 255, 255, 0.4)" }}
      >
        {send && (
          <div
            className="rounded-2xl px-4 py-3 text-center text-xs font-bold"
            style={{ background: "#b3ffda", color: "#a070c0" }}
          >
            ¡Mensaje enviado! Me pondre en contacto pronto
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold" style={{ color: "#a070c0" }}>
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
            <label className="text-xs font-bold" style={{ color: "#a070c0" }}>
              Servicio:
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Opciones</option>
              <option value="Icono de perfil">Icono de perfil</option>
              <option value="Banner">Banner</option>
              <option value="Pareja">Pareja</option>
              <option value="Fecha especial">Fecha especial</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold" style={{ color: "#a070c0" }}>
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
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={load}
            className="text-xs font-bold px-5 py-2 rounded-full"
            style={{
              background: load ? "#c9b3ff" : "#ff6eb4",
              color: "#fff",
              whiteSpace: "nowrap",
              cursor: load ? "not-allowed" : "pointer",
            }}
          >
            {load ? "Enviando . . .₍^. .^₎" : "Confirmar solicitud"}
          </button>
        </div>
      </form>
    </section>
  );
}
