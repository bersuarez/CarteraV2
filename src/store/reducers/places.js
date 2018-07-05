/*import {ADD_PHONE, ADD_USER} from '../actions/actionTypes'
const initialState={
	//estados iniciales
};

//una funcion con argumentos restaod pasado y la accion
const reducer =(state=initialState, action) =>{
	switch(action.type){
		//case: ADD_PHONE:
		// case: ADD_Name:
		// return{
		// 	...state,
	 //  const contacto={
  //     nombre:action.userName,
  //     apellido:action.userName,
  //     correo:action.userEmail,
  //     contraseña:action.userPassword
    }
    axios.post('https://blabla-af195.firebaseio.com/contactos.json',contacto)
    };
		

		default:
		return state;
	}

};

export default reducer; */


import {
  ADD_PLACE,
  DELETE_PLACE,
} from "../actions/actionTypes";

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri:
              "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        }),
      };
    
    default:
      return state;
  }
};

export default reducer;
