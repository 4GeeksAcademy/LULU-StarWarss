import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const People1 =() => {
    const {store,actions}= useContext(Context)
    const people1 = store.people1
    const { id } = useParams()

    useEffect(() => {
        actions.eachPeople1(id)
    },[])

    useEffect(() => {
        console.log(store.people1)

    },[store.people1])

     return(
        <>
         <div className="container">
         <p><strong>Height:  <br/>   {people1.height}</strong></p>
         <p><strong>Hair Color:  <br/>  {people1.hair_color}</strong></p>
         <p><strong>Snkin Color:  <br/>    {people1.eye_color}</strong></p>
         <p><strong>Birth Year:  <br/>    {people1.birth_year}</strong></p>
         <p><strong>Gender:  <br/>    {people1.gender}</strong></p>
         

         </div>
         <Link to="/">
			<button className="btn bnt-warning">Back to Home</button>
		</Link>
        
        </>
     )
}

export default People1

{/* "height": "150",
"mass": "49",
"hair_color": "brown",
"skin_color": "light",
"eye_color": "brown",
"birth_year": "19BBY",
"gender": "female", */}