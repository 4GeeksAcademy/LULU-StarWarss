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
            people1: {},
            favoritos: []
            

        },
        actions: {
            createPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => {setStore({ planetas:data.results }) 
                    
                } )
                    .catch(err => console.error(err))
            },


        eachPlaneta: (id) => {
            fetch(`https://www.swapi.tech/api/planets/${id}`)
                .then(res => res.json())
                .then(data => {setStore({ planetas1:data.result.properties }) 
                
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
            .then(data => {setStore({ naves1:data.result.properties }) 
            
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
            .then(data => {setStore({ people1:data.result.properties }) 
        
    } )
        .catch(err => console.error(err)) 
},
    addFavorito:(favorito) => {
        console.log("este es el ADD",favorito)
        setStore({ favoritos:getStore().favoritos.concat(favorito)})
         console.log(getStore().favoritos)      //traer el favorito que ya tiene y anadir uno nuevo
    },

    checkFavorito:(favorito) => {
        const favorites = getStore().favoritos;
        if (favorites?.indexOf(favorito) !== -1) {
          getActions().removeFavorite(favorito);
        }
        console.log("este es el check",favorito)
        getActions().addFavorito(favorito);
    },

    removeFavorite:(favorito) => {
        setStore({favoritos: getStore().favoritos.filter((element) => element !== favorito),})
        
    }
}
}};

export default getState;