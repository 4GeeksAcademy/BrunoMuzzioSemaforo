import React, { useState } from "react";
import Semaforo from "./Semaforo";
import Botones from "./Botones";

//create your first component
const Home = () => {

	const [luzEncendida, setLuzEncendida] = useState(null)

	return (	
		<div className="container d-flex align-items-center justify-content-center flex-column gap-3">
			<Semaforo luzEncendida={luzEncendida} setLuzEncendida={setLuzEncendida}/>
			<Botones luzEncendida={luzEncendida} setLuzEncendida={setLuzEncendida}/>	
		</div>
	);
};

export default Home;