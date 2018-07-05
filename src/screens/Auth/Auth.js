//de aqui se gestionan los tabs

import React, {Component} from 'react'
import{View,Text, Button, TouchableOpacity, StyleSheet, TextInput, ImageBackground} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import backgroundImage from '../../assets/FondoLogin2.png'
import {connect} from 'react-redux'

//este es un state de solo esta screen, entonces no sirve de nada hacerlo ocn redux


//debería ser una sola pantalla todo lo de registro
//con un lightbox para verificar sms, y si se cumple
//regresa a la pantalla y salen el rsto de los text inputs
class AuthScreen extends Component{
 

  celIntroducidoHandler=()=>{
    this.props.navigator.push({
      screen:'cartera.Verificacion',
      navigatorStyle: {
        navBarHidden: true,
        statusBarHidden: true,
        animationType:'fade',    
      }
 },
 
    )
    this.props.navigator.showInAppNotification({
 screen: "cartera.Notificacion", // unique ID registered with Navigation.registerScreen
 passProps: {}, // simple serializable object that will pass as props to the in-app notification (optional)
 autoDismissTimerSec: 2 // auto dismiss notification in seconds
});
  }

	render(){
		return(
			<ImageBackground 
			source={backgroundImage} 
			style={styles.backgroundImage}
			>
			<View style={styles.containerarriba}>
			
			<MainText> {/*no sirve este wrpper ahorita*/}
				<HeadingText>Registro Dank</HeadingText>
			</MainText>
			{/*</View>
			<View style={styles.containerabajo}>*/}
				{/*<Button title='Ya tengo cuenta'/>*/}
				<View style={styles.inputContainer}>
				<Text style={styles.texto}>+52 </Text>
				<DefaultInput placeholder='Ingresa tu número celular' style={styles.input}/>
				<TouchableOpacity onPress={this.celIntroducidoHandler}>
        {/*<TouchableOpacity onPress={this.loginHandler}>*/}
            		<View style={styles.deleteButton}>
              			<Icon size={50} name="ios-checkmark" color="white" />
           			 </View>
          </TouchableOpacity>
			</View>
      </View>
			</ImageBackground>
		 );
	}
}

const styles = StyleSheet.create({
  containerarriba: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  containerabajo: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  inputContainer:{
  	width:'90%',
  	flexDirection:'row',
  	justifyContent:'space-around',
  	alignItems:'center',
  	paddingBottom:30
  },
  	deleteButton: {
    alignItems: "center"
  },
  input:{
  	backgroundColor:'#eee',
  	borderColor:'#bbb'

  },
  backgroundImage:{
  	width:'100%',
  	flex:1
  }, 
  texto:{
    color:'white',
    fontSize:25
  }
});

const mapDispatchToProps=dispatch=> {
  return{
    onLogin:authData=> dispatch(tryAuth(authData))

  }
}

export default connect(null,mapDispatchToProps)(AuthScreen)