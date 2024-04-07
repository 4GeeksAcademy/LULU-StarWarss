import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";


const Naves1 =() => {
    const {store,actions}= useContext(Context)
    const naves1= store.naves1
    const {id} = useParams() // extraer informacion de la pagina web (asegurarme que este importado)// el nombre dentro de {}el mismo que puse en layout

useEffect(() => { 
    actions.eachVehicle(id)
    
},[])
useEffect(() => { 
 console.log(store.naves1)
},[store.naves1])

    return(
        <>  
        
            <div className="container">
                <p><strong>Crew Members:  <br/>  {naves1.crew}</strong></p>
                <p><strong>Passengers: <br/>  {naves1.passengers}</strong></p>
                <p><strong>Cost of the Ship: <br/>  {naves1.cost_in_credits}</strong></p>
                <p><strong>Length: <br/>  {naves1.length}</strong></p>
                <p><strong>Space Ship Type:  <br/>  {naves1.vehicle_class}</strong></p>
            </div>
        
        
        <Link to="/">
			<button className="btn bnt-warning">Back to Home</button>
		</Link>
        </>
    
    )
}

export default Naves1