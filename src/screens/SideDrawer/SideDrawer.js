import React,{ Component} from 'react';
import {Text, View,Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
class SideDrawer extends Component{
	render(){
		return(
			//en android tienes que especificar width a fuerza
			<View style={[styles.container,
			 {width:Dimensions.get('window').width*0.8}
			]}>
			<TouchableOpacity>
			<View style={styles.drawerItem}>
			<Icon name='ios-log-out' size={30} color='#aaa' style={styles.drawerItemIcon}/>
				<Text>Cerrar Cuenta</Text>
			</View>
			</TouchableOpacity>
			</View>
			)
	}
}

const styles=StyleSheet.create({
	container:{
		paddingTop:50,
		backgroundColor:'white',
		flex:1
	},
	drawerItem:{
		flexDirection:'row',
		alignItems:'center',
		padding:10,
		backgroundColor:'#eee'
		},
	drawerItemIcon:{
		marginRight:10,
	}
})

export default SideDrawer