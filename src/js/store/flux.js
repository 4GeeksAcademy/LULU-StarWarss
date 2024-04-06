const getState = ({ getStore, getActions, setStore }) => {
    //porque no use getStore? no seria para coger la informacion... ?//
    return {
        store: {
            demo: [],
            test: "funciona",
            planetas: [],
            planetas1: {},
            naves: [],
            naves1: {},
            people: [],
            people1: []

        },
        actions: {
            createPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => {setStore({ planetas:data.results }) 
                    
                } )
                    .catch(err => console.error(err))
            }
        },

        eachPlaneta: (id) => {
            fetch(`https://www.swapi.tech/api/planets/${id}`)
                .then(res => res.json())
                .then(data => {setStore({ planetas1:data.results }) 
                
            } )
                .catch(err => console.error(err)) 
    },
    
    createVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles/")
            .then(res => res.json())
            .then(data => {setStore({ naves:data.results }) 
            
        } )
            .catch(err => console.error(err))
    },

    eachVehicle: (id) => {
        fetch(`https://www.swapi.tech/api/vehicles/${id}`)
            .then(res => res.json())
            .then(data => {setStore({ naves:data.results }) 
            
        } )
            .catch(err => console.error(err)) 
},
    createPeople: () => {
        fetch("https://www.swapi.tech/api/people/")
            .then(res => res.json())
            .then(data => {setStore({ people:data.results }) 
        
    } )
        .catch(err => console.error(err))
},

    eachPeople1: (id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
            .then(res => res.json())
            .then(data => {setStore({ people1:data.results }) 
        
    } )
        .catch(err => console.error(err)) 
},

}
};

export default getState;