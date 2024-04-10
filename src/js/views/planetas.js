import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


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
            <div className="card row row-cols-auto" key={index}>
            <div className="card-body">
              <h5 className="card-title">{planetas.name}</h5>
              <Link to={`/planetas1/${planetas.uid}`} >Click for more Info</Link> 
              <button>🎔</button>
            </div>
          </div>

        ))}

        <Link to="/">
			<button className="btn bnt-warning">Back Home</button>
		</Link>
        </>
    
    )
}

export default Planetas

