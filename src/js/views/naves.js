import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Naves =() => {
    const {store,actions}= useContext(Context)
    const naves= store.naves

useEffect(() => { 
    actions.createVehicles()
},[])
useEffect(() => { 
 console.log(store.naves)
},[store.naves])


    return(
        <>
        {naves?.map((naves,index,) => (
            <div className="card row row-cols-auto" key={index}>
            <div className="card-body">
              <h5 className="card-title">{naves.name}</h5>
              <Link to={`/naves1/${naves.uid}`}>Click for more Info</Link>
              
              
            </div>
          </div>
            
        ))}

        <Link to="/">
			<button className="btn bnt-warning">Back Home</button>
		</Link>
        </>
    )
}

export default Naves