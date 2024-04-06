import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import planetas1 from "./planetas1";


const Planeta1 =() => {
    const {store,actions}= useContext(Context)
    const planetas1= store.planetas1

useEffect(() => { 
    actions.eachPlaneta(1)
    /* actions.createPlanets() tutor recomendation but not working*/
},[])
useEffect(() => { 
 console.log(store.planetas1)
},[store.planetas1])

    return(
        <>    {/* "Planeta1.map is not a function" ESTO NO ESTA BIEN, He probado;todos los posibel "planetas..." */}
        {/* store.planetas1 && store.planetas1.length > 0 && store.planetas1.map */} {/* //tutor recomendation but not working */}
        {planetas1?.map((planeta,index,) => (
            <div className="container" key={index}>
            <p><Link to="/planetas1" >
                {planeta.climate}
                {planeta.terrain}
                {planeta.gravity}
                {planeta.orbital_period}
                {planeta.population}</Link>
            </p>
            </div>
        
        ))}
        
        <Link to="/">
			<button className="btn bnt-warning">Back to Home</button>
		</Link>
        </>
    
    )
}

export default Planeta1