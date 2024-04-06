import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

//POR LO QUE SEA AHORA NO APARECEN Las naves Y Uncaught TypeError: actions.createVehicles is not a function


const Naves =() => {
    const {store,actions}= useContext(Context)
    const naves= store.naves

useEffect(() => { 
    actions.createVehicles() //actions.createVehicles is not a function
},[])
useEffect(() => { 
 console.log(store.naves)
},[store.naves])


    return(
        <>
        {naves?.map((naves,index,) => (
            <div className="container" key={index}>
            <h3><Link to="/naves" >{naves.name}</Link></h3>
            </div>
        
        ))}

        <Link to="/">
			<button className="btn bnt-warning">Back Home</button>
		</Link>
        </>
    
    )
}

export default Naves