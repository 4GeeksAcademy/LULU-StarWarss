
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			//Fetch to create one card
			createPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/1")
				.then(res => res.json())
				.then(data => console.log(data.population))
				.catch(err => console.error(err))

				console.log(createPlanets);
			}
			
			
		}
	};
};

export default getState;

//he borrado la infor para meter los fecth de los planetas