import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Naves1 =() => {
    const {store,actions}= useContext(Context)
    const naves1= store.naves1

useEffect(() => { 
    actions.createVehicles(1)
    
},[])
useEffect(() => { 
 console.log(store.naves1)
},[store.naves1])
//ME IMAGINO QUE NO FUNCIONA PERO NO PUEDO VER LA PAGINA ANTERIOR...
    return(
        <>  
        {naves1?.map((naves1,index,) => (
            <div className="container" key={index}>
            <p><Link to="/naves1" >
                {naves1.crew}
                {naves1.passengers}
                {naves1.cost_in_credits}
                {naves1.lenght}
                {naves1.vehicle_class}
                </Link>
            </p>
            </div>
        
        ))}
        
        <Link to="/">
			<button className="btn bnt-warning">Back to Home</button>
		</Link>
        </>
    
    )
}

export default Naves1