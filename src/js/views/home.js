import React from "react";
/* import rigoImage from "../../img/rigo-baby.jpg"; *///no lo necesito
import "../../styles/home.css";
import { createPlanets } from "./planetas.js";//no se "conecta"...
import getState from "./planetas.js"; //no se funciona tampoco...
import { Link } from "react-router-dom";

export const Home = () => (
	 <div className="text-center">
		<div className="card">
			<Link to="/planetas">
			<img src="https://lumiere-a.akamaihd.net/v1/images/databank_rodia_01_169_6f76b79d.jpeg?region=0%2C0%2C1560%2C878" className="card-img-top" alt="Planet Rodian"/>
  			<h2>PLANETAS</h2>
  			<div id="planetInfo"> </div>
			  </Link>
	</div>
		/{/* /necesita boton que abra la crad de planeta// */}
	<div className="card">
		<Link to="/naves">
			<img src="https://lumiere-a.akamaihd.net/v1/images/home-base-main-image_91f083b2.jpeg?region=0%2C0%2C1560%2C878" className="card-img-top" alt="Phoenix Home "/>
  			<h2>NAVES</h2>
  			<div id="navesInfo"> </div>
			  </Link>
	</div>
			{/* //necesita boton que conecte a personas// */}
	<div className="card">
		<Link to="/people">
			<img src="https://lumiere-a.akamaihd.net/v1/images/tusken-raiders-main-bobf-2_135f8e1e.jpeg?region=0%2C0%2C1280%2C720" className="card-img-top" alt="Tusken Raiders"/>
  			<h2>PERSONAS</h2>
  			<div id="personasInfo"> </div>
			  </Link>

	</div>
	</div> 
	
);
