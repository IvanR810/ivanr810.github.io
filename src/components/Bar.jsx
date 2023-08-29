"use client";
import { useState } from "react"

function Bar(){
    let [condicion, setCondicion] = useState(false)
    let [claseBarra, setClaseBarra] = useState("bar-options oculto")

    const mostrarBarra = ()=>{
        if (condicion){
            setClaseBarra("bar-options oculto")
            setCondicion(false)
        }
        else{
            setClaseBarra("bar-options visible")
            setCondicion(true)
        }
    }
    return(
        <div className="bar">
            <div className="bar-title">
                <h1>IVANR3</h1>
            </div>
            <div className="bar-icon" onClick={mostrarBarra}>
                <img src="./menu.png"/>
            </div>
            <div className={claseBarra}>
                <ul>
                    <li className="link">Inicio</li>
                    <li className="link">Trabajos</li>
                    <li className="link">Proyectos</li>
                </ul>
            </div>
        </div>
    )
}

export default Bar