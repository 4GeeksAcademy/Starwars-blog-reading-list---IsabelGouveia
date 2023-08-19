const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			planets: [],
			vehicles: [],
			people: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeDataPlanets: () => {
				fetch('https://www.swapi.tech/api/planets/')
					.then(response => {
						if (!response.ok) {
							throw Error("We will not have a Planet");
						}
						return response.json();
					})
					.then(data => {
						const newPlanets = data.results.slice(0, 10); 
						setStore({ planets: newPlanets }); 
					})
					.catch(error => {
						console.log(error);
					});
			},

			loadSomeDataPlanet: (id, setPlanet) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(response => {
						if (!response.ok) {
							throw Error("We will not have a Planet");
						}
						return response.json();
					})
					.then(data => {
						setPlanet(data.result.properties);
					})
					.catch(error => {
						console.log(error);
					});
			},

			loadSomeDataVehicles: () => {
				fetch('https://www.swapi.tech/api/vehicles/')
					.then(response => {
						if (!response.ok) {
							throw Error("We will not have a Vehicle");
						}
						return response.json();
					})
					.then(data => {
						const newVehicles = data.results.slice(0, 10); 
						setStore({ vehicles: newVehicles });
					})
					.catch(error => {
						console.log(error);
					});
			},

			loadSomeDataVehicle: (id, setVehicle) => {
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					.then(response => {
						if (!response.ok) {
							throw Error("We will not have a Planet");
						}
						return response.json();
					})
					.then(data => {
						setVehicle(data.result.properties);
					})
					.catch(error => {
						console.log(error);
					});
			},

			loadSomeDataPeople: () => {
				fetch('https://www.swapi.tech/api/people/')
					.then(response => {
						if (!response.ok) {
							throw Error("We will not have People");
						}
						return response.json();
					})
					.then(data => {
						const newPeople = data.results.slice(0, 10);
						setStore({ people: newPeople }); 
					})
					.catch(error => {
						console.log(error);
					});
			},

			loadSomeDataPerson: (id, setPerson) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(response => {
						if (!response.ok) {
							throw Error("We will not have a Person");
						}
						return response.json();
					})
					.then(data => {
						setPerson(data.result.properties);
					})
					.catch(error => {
						console.log(error);
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addFavorite: (favorite) => {
				 //get the store
				 const store = getStore();
  
				 //we have to loop the entire demo array to look for the respective index
				 //and add new favorite
			
				 const newFavorites = [...store.favorites, favorite];
				 
		 
				 //reset the global store
				 setStore({ favorites: newFavorites });

				 console.log(favorite, newFavorites)
		 
			},

			deleteFavorite: (index) => {
				//get the store
				const store = getStore();
		
				//we have to loop the entire demo array to look for the respective index
				//and remove the favorite
				const newFavorites = store.favorites.filter((favorite, i) => {
				  return index !== i;
				});
		
				//reset the global store
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;


