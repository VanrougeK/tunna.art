import React from "react";

export default function Navbar() {
  return(
  <nav className="w-full font-mono" 
  style={{ background: "linear-gradient(90deg, #ffb3d9, #c9b3ff, #b3d9ff)"}}>

    <div className="text-center py-1"
    style={{background: "rgba(255, 255, 255, 0.3)"}}>
      <span className="text-5xl font-bold"
      style={{color: "#a070c0"}}>✦ tunna.art ✦</span>
    </div>

    <div className="px-3 py-1"
    style={{background: "rgba(255, 255, 255, 0.2"}}>
      <span className="text-xs" style={{ color: "#c090e0"}}> https://tunna.art </span>
    </div>

    <ul className="flex gap-6 px-6 py-2 list-none m-0">
      <li><a href="#galeria" className="text-sm hover:underline" style={{color: "#fff"}}>Galeria</a></li>
      <li><a href="#experiencia" className="text-sm hover:underline" style={{color: "#fff"}}>Experiencia</a></li>
      <li><a href="#servicios" className="text-sm hover:underline" style={{color: "#fff"}}>Servicios</a></li>
      <li><a href="#contacto" className="text-sm hover:underline" style={{color: "#fff"}}>Contacto</a></li>
    </ul>
  </nav>
)
}