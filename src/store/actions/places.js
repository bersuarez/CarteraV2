// import{ADD_USER} from './actionTypes';

// export const addPhone=(cellNumber)=>{
// 	return{
// 		type:ADD_PHONE,
// 		cellNumber:cellNumber
// 	};
// };

// export const addName=(userName)=>{
// 	return{
// 		type:ADD_NAME,
// 		userName:userName
// 	};
// };

// export const addLastName=(userLastName)=>{
// 	return{
// 		type:ADD_LASTNAME,
// 		userLastName:userLastName
// 	};
// };

// export const addEmail=(userEmail)=>{
// 	return{
// 		type:ADD_EMAIL,
// 		userEmail:userEmail
// 	};
// };

// export const addPassword=(userPassword)=>{
// 	return{
// 		type:ADD_PASSWORD,
// 		userPassword:userPassword
// 	};
// };

import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey:key
    };
};




