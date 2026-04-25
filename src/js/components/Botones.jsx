import React, { useState } from "react";

const Botones = ({ luzEncendida, setLuzEncendida }) => {

    const luces = ["roja", "amarilla", "verde"]
    
    const iniciarCiclo = () => {

        let i = 0

        setInterval( function encenderLuz() {            
            setLuzEncendida(luces[i])
            
            if (i == luces.length){
                i = 0
            } else {
                i++
            }
            
        }, 1500)
    }
    

    return(
        <div>
			<button id="ciclo" className="btn btn-dark mt-3 px-4 py-2 rounded-3" onClick={iniciarCiclo}>Ciclo Semaforo</button>
		</div>
    )
}

export default Botones