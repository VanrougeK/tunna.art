import React from "react";
import { useEffect, useState } from "react";

const levels = [
    {id: 1, video: "public/video/video_5_30s.mp4", time: 30},
    {id: 2, video: "public/video/video_7_30s.mp4", time: 30},
    {id: 3, video: "public/video/video_4_25s.mp4", time: 25},
    {id: 4, video: "public/video/video_6_20s.mp4", time: 20},
    {id: 5, video: "public/video/video_2_20s.mp4", time: 20},
]

export default function Juego() {
    const [levelAct, setLevelAct] = useState(0)
    const [cont, setCont] = useState(0)
    const [time, setTime] = useState(levels[0].time)
    const [play, setPlay] = useState(false)
    const [fin, setFin] = useState(false)

    useEffect (() => {
        if(!play) return;

        if(time === 0) {
            if (levelAct + 1 < levels.length) {
                const next = levelAct + 1
                setLevelAct (next)
                setTime(levels[next].time)
            }else {
                setPlay(false)
                setFin(true)
            } return
        }

        const timer = setTimeout(() => setTime(time - 1), 1000)
        return () => clearTimeout(timer)
    }, 
    [play, time, levelAct])
    
    return(
        <section>
            <h2>Cuenta los gatitos!!</h2>

            {!play && !fin && (
                <div>
                    <p>¿Cuantos gatitos puedes contar?</p>
                    <button onClick={() => setPlay(true)}>Jugar</button>
                </div>
            )}

            {play && !fin && (
                <div>
                    <p>Nivel {levels[levelAct].id} de {levels.length}</p>
                    <p>{time} segundos</p>

                    <video src={levels[levelAct].video} autoPlay muted></video>
                </div>
            )}

            {fin && (
                <div>
                    <p>¡Terminaste!</p>
                    <p>Contaste {cont} gatitos!</p>
                    <button onClick={() => {setLevelAct(0), setCont(0), setTime(levels[0].time), setPlay(false), setFin (false)}}>
                        Jugar de nuevo
                    </button>
                </div>
            )}
        </section>
    )
}