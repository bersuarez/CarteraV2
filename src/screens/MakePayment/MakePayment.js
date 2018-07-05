//por ahora usa PlaceInput, pantalla equivalente a SharePlace

import React, {Component} from 'react';
import{View,Text, Button} from 'react-native'
import PlaceInput from '../../components/PlaceInput/PlaceInput'
import {connect} from 'react-redux'
import {addPlace} from '../../store/actions/index'

//usas el component que se usa en esa screen
class MakePaymentScreen extends Component {
//crear listener para handle events de navigation
	constructor(props){
		super(props);
		//specifiy method to ecxecute when navigation event occurs
		this.props.navigator.setOnNavigatorEvent(this.setOnNavigatorEvent);

	}
///crear el method para el event. hay event ids tipo willappear didappear y asi para usarlos
setOnNavigatorEvent=event=>{
	//si se presiona un boton de navegacion y su key es igual al que buscamos, ejecuta ToggleDrawer que es una funcion dada por react navigation
	if(event.type==='NavBarButtonPress'){
		if(event.id==='sideDrawerToggle'){
			this.props.navigator.toggleDrawer({
				side:'left'
			})
		}
	}
}

//functionality to add place
	placeAddedHandler=placeName=>{
	this.props.onAddPlace(placeName);
}
	render(){
		return(
			<View>
				<PlaceInput onPlaceAdded={this.placeAddedHandler}/>
			</View>	
		);
	}
}

// wrap export with result of connect function call

const mapDispatchToProps=dispatch=>{
	return{
		//bind something that can be used on props. dispatch uno de tus action creators
		onAddPlace:(placeName)=> dispatch(addPlace(placeName))
	}
}

//(map state to props, dispatchtoprops) asi dispatcheas algo a la store
export default connect(null,mapDispatchToProps) (MakePaymentScreen);