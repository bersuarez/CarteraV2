import{TRY_AUTH} from './actionYypes';

export const tryAuth={authData=>
return{
	type_TRY_AUTH,
	authData: authData
}}