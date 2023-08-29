function Metadatos(){
    return(
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>IVANR3</title>
            <link rel="stylesheet" href="home.css" />
            <link rel="stylesheet" href="cuerpo.css" />
        </head>
    )
}

function Root({children}){
    return(
        <html lang="es">
            <Metadatos />
            <body>
                {children}
            </body>
        </html>
    )
}

export default Root