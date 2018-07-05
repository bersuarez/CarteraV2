//por ahora usa PlaceList, pantalla equivalente a FindPlace
import React, {Component} from 'react';
import{View,Text, Button} from 'react-native'
import {connect} from 'react-redux'
//connect para get places from the store
import PlaceList from '../../components/PlaceList/PlaceList';

class DashboardScreen extends Component {
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

//para push la screen de detalles cuando picas al lugar. te puedes ir as deep as you want poniendo mas scfreens dentro de otras
itemSelectedHandler=key=>{
	//va por cada lugar y regresa el que su key sea igual que la key dada
	const selPlace=this.props.places.find(place=>{
			return place.key===key;
			});
	this.props.navigator.push({
		screen:'cartera.PlaceDetailScreen',
		title:selPlace.name,
		passProps:{
			selectedPlace:selPlace
		}
	});
}
	render(){
		return(
			<View>
				<PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
			</View>	
		);
	}
}


//fetch a slice of state and pass it down to function above
const mapStateToProps=state=>{
	return{
//first places reaches out to configureStore, que va al reducer , que va al array
		places: state.places.places
	};
};

export default connect(mapStateToProps)(DashboardScreen);