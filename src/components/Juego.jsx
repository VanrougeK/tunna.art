import React from "react";
import { useEffect, useState } from "react";

const levels = [
  { id: 1, video: "/video/video_5_30s.mp4", time: 30, cats: 5 },
  { id: 2, video: "/video/video_7_30s.mp4", time: 30, cats: 7 },
  { id: 3, video: "/video/video_4_25s.mp4", time: 25, cats: 4 },
  { id: 4, video: "/video/video_6_20s.mp4", time: 20, cats: 6 },
  { id: 5, video: "/video/video_2_20s.mp4", time: 20, cats: 2 },
];

const totalCats = levels.reduce((acc, l) => acc + l.cats, 0);

export default function Juego() {
  const [levelAct, setLevelAct] = useState(0);
  const [cont, setCont] = useState(0);
  const [time, setTime] = useState(levels[0].time);
  const [play, setPlay] = useState(false);
  const [fin, setFin] = useState(false);
  const [pause, setPause] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [contLevel, setContLevel] = useState(0);

  useEffect(() => {
    if (!play || pause) return;

    if (time === 0) {
      if (levelAct + 1 < levels.length) {
        setPause(true);
      } else {
        setPlay(false);
        setFin(true);
      }
      return;
    }

    const timer = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(timer);
  }, [play, time, levelAct, pause]);

  const nextLevel = () => {
    const next = levelAct + 1;
    setLevelAct(next);
    setTime(levels[next].time);
    setPause(false);
    setContLevel(0);
  };
  const handleClick = () => {
    setCont(cont + 1);
    setContLevel(contLevel + 1);
    setClicked(true);
    setTimeout(() => setClicked(false), 150);
  };

  const dif = Math.abs(cont - totalCats);
  const resu =
    dif === 0
      ? "¡Purrrfecto! Contaste todos los gattitos"
      : dif <= 3
        ? `¡Omggg! ¡Casi! Te ${cont < totalCats ? "faltaron" : "sobraron"} ${dif} gatitos`
        : `Eran ${totalCats} gatitos en total, ¡intentalo otra vez!`;

  return (
    <section
      id="juego"
      className="px-4 md:px-12 py-10"
      style={{ background: "linear-gradient(180deg, #ffb3d9, #c9b3ff)" }}
    >
      <h2
        className="text-lg md:text-2xl font-bold mb-8"
        style={{ color: "#fff", textShadow: "2px 2px 0px #a070c0" }}
      >
        ₍^. .^₎⟆ Cuenta los gatitos!!
      </h2>

      {!play && !fin && (
        <div
          className="flex flex-col items-center gap-6 rounded-2xl p-10"
          style={{ background: "rgba(255, 255, 255, 0.4)" }}
        >
          <p className="text-sm" style={{ color: "#a070c0" }}>
            ¿Cuantos gatitos puedes contar?
          </p>
          <button
            className="text-sm font-bold px-8 py-3 rounded-full"
            style={{ background: "#ff6eb4", color: "#fff" }}
            onClick={() => setPlay(true)}
          >
            .✦ ݁˖ Jugar .✦ ݁˖
          </button>
        </div>
      )}

      {play && pause && (
        <div
          className="flex flex-col items-center gap-6 rounded-2xl p-10"
          style={{ background: "rgba(255, 255, 255, 0.4)" }}
        >
          <p className="text-2xl"> /ᐠ • ˕ •マ ? </p>
          <p className="text-sm font-bold" style={{ color: "#a070c0" }}>
            {" "}
            ¡Nivel {levels[levelAct].id} terminado!{" "}
          </p>
          <p className="text-sm" style={{ color: "#a070c0" }}>
            {" "}
            Habia {levels[levelAct].cats} gatitos en este nivel{" "}
          </p>
          <p className="text-sm" style={{ color: "#a070c0" }}>
            {" "}
            Llevas {cont} gatitos contados en total{" "}
          </p>
          <button
            className="text-xs font-bold px-8 py-3 rounded-full"
            style={{ background: "#ff6eb4", color: "#fff" }}
            onClick={nextLevel}
          >
            Siguiente nivel →
          </button>
        </div>
      )}

      {play && !fin && !pause && (
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4 justify-center flex-wrap">
            <span
              className="text-xs font-bold px-4 py-2 rounded-full"
              style={{
                background: "rgba(255, 255, 255, 0.5)",
                color: "#a070c0",
              }}
            >
              {" "}
              Nivel {levels[levelAct].id} de {levels.length}
            </span>
            <span
              className="text-xs font-bold px-4 py-2 rounded-full"
              style={{
                background: time <= 5 ? "#ff6eb4" : "rgba(255, 255, 255, 0.5)",
                color: time <= 5 ? "#fff" : "#a070c0",
              }}
            >
              {time} segundos
            </span>
            <span
              className="text-xs font-bold px-4 py-2 rounded-full"
              style={{
                background: "rgba(255, 255, 255, 0.5)",
                color: "#a070c0",
              }}
            >
              {contLevel}
            </span>
          </div>

          <video
            className="rounded-2xl w-full max-w-2xl"
            key={levelAct}
            src={levels[levelAct].video}
            autoPlay
          ></video>

          <button
            onClick={handleClick}
            className="text-4xl px-8 py-4 rounded-full"
            style={{
              background: clicked ? "#ff6eb4" : "rgba(255, 255, 255, 0.6)",
              border: "3px solid rgba(160, 112, 192, 0.3)",
              cursor: "pointer",
              transform: clicked ? "scale(0.8)" : "scale(1)",
              transition: "all 0.1s",
            }}
          >
            {" "}
            =ᗢ={" "}
          </button>
          <p className="text-xs" style={{ color: "#a070c0" }}>
            Presiona cada vez que veas un gato
          </p>
        </div>
      )}

      {fin && (
        <div
          className="flex flex-col items-center gap-6 rounded-2xl p-10"
          style={{ background: "rgba(255, 255, 255, 0.4)" }}
        >
          <p className="text-2xl" style={{ color: "#a070c0" }}>
            ¡Terminaste!
          </p>
          <p className="text-xs" style={{ color: "#a070c0" }}>
            Contaste {cont} gatitos!
          </p>
          <p
            className="text-xs text-center font-bold px-6 py-3 rounded-2xl"
            style={{ background: dif === 0 ? "#b3ffda" : "#ffb3d9" }}
          >
            {" "}
            {resu}{" "}
          </p>
          <button
            className="text-xs font-bold px-8 py-3 rounded-full"
            style={{ background: "#ff6eb4", color: "#fff" }}
            onClick={() => {
              setLevelAct(0);
              setCont(0);
              setTime(levels[0].time);
              setPlay(false);
              setFin(false);
            }}
          >
            Jugar de nuevo
          </button>
        </div>
      )}
    </section>
  );
}
