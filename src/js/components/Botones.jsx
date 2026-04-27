import React, { useState, useRef } from "react";

const Botones = ({ luzEncendida, setLuzEncendida }) => {

    const luces = ["roja", "amarilla", "verde"]

    const cicloCorriendo = useRef(null)

    const [activo, setActivo] = useState("")
    
    const iniciarCiclo = () => {

        if(cicloCorriendo.current === null){       

        setActivo(true)

        let i = 0

        const cicloID = setInterval( function encenderLuz() {            
            setLuzEncendida(luces[i])
            
            if (i == luces.length){
                i = 0
            } else {
                i++
            }
        }, 1000)

        cicloCorriendo.current = cicloID
        }
    }

    const pararCiclo = () => {
        clearInterval(cicloCorriendo.current)
        cicloCorriendo.current = null
        setActivo(false)

    }
    

    return(
        <div className="d-flex justify-content-center gap-2 m-2" >
			<button type="button" className={`btn btn-outline-success mt-3 px-4 py-2 rounded-3 botones ${activo === true ? "active" : ""}`} onClick={iniciarCiclo}>Iniciar</button>
            <button type="button" className="btn btn-outline-danger mt-3 px-4 py-2 rounded-3 botones" onClick={pararCiclo}>Detener</button>
		</div>
    )
}

export default Botones