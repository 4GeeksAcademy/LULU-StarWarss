import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

//POR LO QUE SEA AHORA NO APARECEN LOS PLANETAS Y NO ME SALE NINGUN ERROR... 


const Planetas =() => {
    const {store,actions}= useContext(Context)
    const planets= store.planetas

useEffect(() => { 
    actions.createPlanets()
},[])
useEffect(() => { 
 console.log(store.planetas)
},[store.planetas])


    return(
        <>
        {planets?.map((planetas,index,) => (
            <div className="container" key={index}>
            <h3><Link to="/planetas1" >{planetas.name}</Link></h3>
            </div>
        
        ))}

        <Link to="/">
			<button className="btn bnt-warning">Back Home</button>
		</Link>
        </>
    
    )
}

export default Planetas

