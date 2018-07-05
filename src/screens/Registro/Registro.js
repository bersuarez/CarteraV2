//de aqui se gestionan los tabs

import React, {Component} from 'react'
import{View,Text, Button, TouchableOpacity, StyleSheet, TextInput, ImageBackground} from 'react-native'
import startMainTabs from '../MainTabs/startMainTabs'
import Icon from "react-native-vector-icons/Ionicons";
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import backgroundImage from '../../assets/FondoLogin2.png'
import validate from '../../utility/validation'

class AuthScreen extends Component{

  state={
  controls:{
    name:{
      value:'',
      valid:false,
      validationRules:{
        minLength:true
      }
    },
    lastName:{
      value:'',
      valid:false,
      validationRules:{
        minLength:true
      }
    },
    email:{
      value:'',
      valid:false,
      validationRules:{
        isEmail:true
      }
    },
    password:{
      value:'',
      valid:false,
      validationRules:{
        minLength:6
      }
    },
    confirmPassword:{
      value:'',
      valid:false,
      validationRules:{
        equalTo:'password'
      }
    }
  }
}
 
	loginHandler=()=>{
    //ejecuta la funcion de ese archivo que dice que haga tabs y dice cuales
		startMainTabs();
    //este debería ser una que te lleve a segundo paso de registro
    //que solo se active si puedes picar cierto boton
    //que aparecerá en modal cuando verifique sms code
	}

  updateInputState=(key,value)=>{
    //pa checar que concuerden passwords
    let connectedValue={};
    if(this.state.controls[key].validationRules.equalTo){
      const equalControl=this.state.controls[key].validationRules.equalTo
      const equalValue=this.state.controls[equalControl].value;
      connectedValue={
        ...connectedValue,
        equalTo: equalValue
      }
    }
    if(key==='password'){
      connectedValue={
        ...connectedValue,
        equalTo: value
      }
    }
    //actualizar estados dynamically depende que input estas usando
    this.setState(prevState=>{
      //todo esto es para take las validatio rules y solo update the value
    //abajo lo llamas: gives us val by default and accept it in updateInputState. 
    //luego pasas el key que aquí es email. dice cual de los de controls actualizar 
      return{
        controls: {
          ...prevState.controls,
           //esto es pa que si vuelves a cambiar el de arriba, el de abajo de vuelva a desvalidar
          confirmPassword:{
            ...prevState.controls.confirmPassword,
            valid:
            key==='password'?
            validate(prevState.controls.confirmPassword.value,
            prevState.controls,confirmPassword.validationRules,connectedValue):
            prevState.controls.confirmPassword.valid
          },
          [key]:{
            ...prevState.controls[key],
            value:value,
            valid:validate(value,prevState.controls[key].validationRules,connectedValue)
          }
        }
      }
    })

}
  


	render(){
		return(
			<ImageBackground 
			source={backgroundImage} 
			style={styles.backgroundImage}
			>
			<View style={styles.containerarriba}>
				<View style={styles.inputContainer}>
				<Text style={styles.texto}>Unos datos más </Text>
				<DefaultInput placeholder='Nombre' style={styles.input}
        value ={this.state.controls.name.value}
        onChangeText={(val)=>this.updateInputState('name',val)}/>
        <DefaultInput placeholder='Apellido' style={styles.input}
        value ={this.state.controls.lastName.value}
        onChangeText={(val)=>this.updateInputState('lastName',val)}/>
        <DefaultInput placeholder='Correo' style={styles.input}
        value ={this.state.controls.email.value}
        onChangeText={(val)=>this.updateInputState('email',val)}/>
        <DefaultInput placeholder='Contraseña' style={styles.input}
        value ={this.state.controls.password.value}
        onChangeText={(val)=>this.updateInputState('password',val)}/>
        <DefaultInput placeholder='Confirmar contraseña' style={styles.input}
        value ={this.state.controls.confirmPassword.value}
        onChangeText={(val)=>this.updateInputState('confirmPassword',val)}/>
        <TouchableOpacity onPress={this.loginHandler}>
            		<View>
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
    justifyContent: 'flex-end',
    alignItems:'center'
  },
  containerabajo: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  inputContainer:{
  	width:'90%',
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
    fontSize:20
  }  
});


export default AuthScreen