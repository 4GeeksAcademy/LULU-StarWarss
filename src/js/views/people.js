import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const People =() => {
    const {store,actions}= useContext(Context)
    const people= store.people

    useEffect(() => {
        actions.createPeople()
    },[])
    useEffect(() => {
        console.log(store.people)
    },[store.people])
    
    return(
        <>
        {people?.map((people,index,) => (
             <div className="card row row-cols-auto" key={index}>
             <div className="card-body">
               <h5 className="card-title">{people.name}</h5>
               <Link to={`/people1/${people.uid}`}>Click for more Info
                    </Link>
                  <button className="btn btn-warning" onClick={() => {actions.checkFavorito(people.name)}}>🎔</button>
             </div>
           </div>

        ))}

        <Link to="/">
			<button className="btn bnt-warning">Back Home</button>
		</Link>
        </>
    )
}

export default People