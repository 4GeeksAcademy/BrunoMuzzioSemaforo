import React, { useState } from "react";

const Semaforo = ({ luzEncendida, setLuzEncendida }) => {

    function encenderLuz(event) {	
        
		if(luzEncendida === event.target.id){
			setLuzEncendida(null)
		} else{
			setLuzEncendida(event.target.id)	
		}
			
  	}

    return(
        <div className="container d-flex flex-column bg-dark semaforo align-items-center justify-content-center mt-5 gap-5">
            <button id="roja" className={`rounded-circle bg-danger luz ${luzEncendida === "roja" ? "rojaEncendida" : "apagada"}`} onClick={encenderLuz}></button>
            <button id="amarilla" className={`rounded-circle bg-warning luz ${luzEncendida === "amarilla" ? "amarillaEncendida" : "apagada"}`} onClick={encenderLuz}></button>
            <button id="verde" className={`rounded-circle bg-success luz ${luzEncendida === "verde" ? "verdeEncendida" : "apagada"}`} onClick={encenderLuz}></button>
        </div>	
    )
}

export default Semaforo