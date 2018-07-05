// se empiezan las tabs
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'
//fetch icons es asynchronous, tons necesitas jalarlos antes con promise
const startTabs=()=>{
	Promise.all([
		Icon.getImageSource('cannabis',30),
		Icon.getImageSource('duck',30),
		Icon2.getImageSource('ios-menu',30)
		]).then(sources=>{
		Navigation.startTabBasedApp({
		tabs:[
		{
			screen: 'cartera.DashboardScreen',
			label:'Dashboard',
			title:'Dashboard',
			icon: sources[0],
			navigatorButtons:{
				leftButtons:[
				{
					icon:sources[2],
					title:'Menu',
					id:'sideDrawerToggle'
				}]
			},
			

		},
		{
			screen: 'cartera.MakePaymentScreen',
			label:'Pago',
			title:'Pago',
			icon: sources[1],
			navigatorButtons:{
				leftButtons:[
				{
					icon:sources[2],
					title:'Menu',
					id:'sideDrawerToggle'
				}]
			}  
		}
		],
		drawer:{
			left:{
				screen:'cartera.SideDrawer'
			}
		}
	});	
});
}



export default startTabs;