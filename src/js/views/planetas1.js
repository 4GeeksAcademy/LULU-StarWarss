import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";



const Planeta1 =() => {
    const {store,actions}= useContext(Context)
    const planetas1= store.planetas1
    const { id } = useParams()

useEffect(() => { 
    actions.eachPlaneta(id) // poner la info que quieres dentro de las ()
    
},[])
useEffect(() => { 
 console.log(store.planetas1)
},[store.planetas1])

    return(
        <>    {/* "Planeta1.map is not a function" PORQUE NO NECESITO MAPEOO PARA ESTO!! */}
        
            <div className="container">
            
                <p><strong>CLimate:  <br/>   {planetas1.climate}</strong></p>
                <p><strong>Terrain:  <br/>    {planetas1.terrain}</strong></p>
                <p><strong>Gravity:  <br/>    {planetas1.gravity}</strong></p>
                <p><strong>Orbital Period:   <br/>   {planetas1.orbital_period}</strong></p>
                <p><strong>Population:  <br/>     {planetas1.population}</strong></p>
            
            </div>
        
        <Link to="/">
			<button className="btn bnt-warning">Back to Home</button>
		</Link>
        </>
    
    )
}

export default Planeta1