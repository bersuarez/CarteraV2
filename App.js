import {Navigation} from 'react-native-navigation'
import AuthScreen from './src/screens/Auth/Auth';
import MakePayment from './src/screens/MakePayment/MakePayment'
import Dashboard from './src/screens/Dashboard/Dashboard'
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail'
import {Provider} from 'react-redux'
import configureStore from './src/store/configureStore'
import SideDrawer from './src/screens/SideDrawer/SideDrawer'
import Verificacion from './src/screens/Verificacion/Verificacion'
import Notificacion from './src/screens/Notificacion/Notificacion'
import Registro from './src/screens/Registro/Registro'
 const store=configureStore();


//Register Screens.. los conectas aquí y luego los conectas en la pantalla con lo de connect
Navigation.registerComponent("cartera.AuthScreen",()=> AuthScreen, store, Provider);
Navigation.registerComponent("cartera.MakePaymentScreen",()=> MakePayment, store, Provider);
Navigation.registerComponent("cartera.DashboardScreen",()=> Dashboard, store, Provider);
Navigation.registerComponent("cartera.PlaceDetailScreen",()=> PlaceDetailScreen, store, Provider);
Navigation.registerComponent("cartera.SideDrawer",()=> SideDrawer);
Navigation.registerComponent("cartera.Verificacion",()=> Verificacion);
Navigation.registerComponent("cartera.Notificacion",()=> Notificacion);
Navigation.registerComponent("cartera.Registro",()=> Registro);

//start a app

Navigation.startSingleScreenApp({
  screen:{
    screen:'cartera.AuthScreen',
    navigatorStyle: {
        navBarHidden: true,
        statusBarHidden: true,
      }
     },
  });
