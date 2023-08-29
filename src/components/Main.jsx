import Trabajos from "@/components/Trabajos.jsx"
import Proyectos from "@/components/Proyectos.jsx"

function Introduccion(){
    let info = <div className="info">
        <div className="info-1">
            <h3>¡Bienvenido!, me llamo Ivan</h3>
        </div>
        <div className="info-2">
            <p>
                Este es una página temporal donde se subiran trabajos de las unidades académicas avanzadas, como también,
                proyectos personales que haré para hacer practicas de programación.
            </p>
        </div>
    </div>

    return(
        <div className="introduccion">
            {info}
            <div className="imagen">
                <img src="./programador.png" alt="logo_programador" />
            </div>
        </div>
    )
}



function Seccion({componente}){
    return(
        <div className="seccion">
            {componente}
        </div>
    )
}

function Contenido(){
    return(
        <div className="main">
            <Seccion componente={<Introduccion />}/>
            <Seccion componente={<Trabajos/>}/>
            <Seccion componente={<Proyectos/>}/>
        </div>
    )
}

export default Contenido