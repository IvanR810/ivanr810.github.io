"use client";
function Actividad({info}){
    const redireccion = ()=>{
        location.href = info.url
    }

    return (
        <div className="actividad" onClick={redireccion}>
            <div className="actividad-title">
                {info.titulo}
            </div>
            <div className="actividad-description">
                {info.descripcion}
            </div>
        </div>
    )
}

function Trabajos(){
    let info_prueba = {
        key: "DPS-1",
        titulo: "TAI 1: Despliegue de Aplicaciones",
        descripcion : "Despliegue de un programa de C# en visual studio 2019",
        url: "https://github.com/IvanR810/DPS_trabajos/tree/master/actividad_1"
    }

    let cantidad_trabajos = 1
    let no_trabajos = <p>No hay trabajos</p>
    let trabajos = [<Actividad key={info_prueba.key} info={info_prueba}/>]
    return(
        <div className="trabajos">
            <div className="trabajos-1">
                <h2>Trabajos</h2>
            </div>
            <div className="trabajos-2">
                {
                    (()=>{
                       if(cantidad_trabajos > 0){
                        return trabajos
                       }else{
                        return no_trabajos
                       } 
                    })()
                }
            </div>
        </div>
    )
}

export default Trabajos