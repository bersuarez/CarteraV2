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
        minLength:3
      },
      touched:false
    },
    lastName:{
      value:'',
      valid:false,
      validationRules:{
        minLength:3
      },
      touched:false
    },
    email:{
      value:'',
      valid:false,
      validationRules:{
        isEmail:true
      },
      touched:false
    },
    password:{
      value:'',
      valid:false,
      validationRules:{
        minLength:6
      },
      touched:false
    },
    confirmPassword:{
      value:'',
      valid:false,
      validationRules:{
        equalTo:'password'
      },
      touched:false
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


  updateInputState = (key, value) => {
    //pa checar que concuerden passwords
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    //actualizar estados dynamically depende que input estas usando
    this.setState(prevState => {
     //todo esto es para take las validatio rules y solo update the value
//     //abajo lo llamas: gives us val by default and accept it in updateInputState. 
//     //luego pasas el key que aquí es email. dice cual de los de controls actualizar 
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            ),
            touched:true
          }
        }
      };
    });
  };
  


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
        onChangeText={(val)=>this.updateInputState('name',val)}
        valid={this.state.controls.name.valid}
        touched={this.state.controls.name.touched}/>

        <DefaultInput placeholder='Apellido' style={styles.input}
        value ={this.state.controls.lastName.value}
        onChangeText={(val)=>this.updateInputState('lastName',val)}
        valid={this.state.controls.lastName.valid}
        touched={this.state.controls.lastName.touched}/>

        <DefaultInput placeholder='Correo' style={styles.input}
        value ={this.state.controls.email.value}
        onChangeText={(val)=>this.updateInputState('email',val)}
        valid={this.state.controls.email.valid}
        touched={this.state.controls.email.touched}/>

        <DefaultInput placeholder='Contraseña' style={styles.input}
        value ={this.state.controls.password.value}
        onChangeText={val=>this.updateInputState('password',val)}
        valid={this.state.controls.password.valid}
        touched={this.state.controls.password.touched}/>

        <DefaultInput placeholder='Confirmar contraseña' style={styles.input}
        value ={this.state.controls.confirmPassword.value}
        onChangeText={val=>this.updateInputState('confirmPassword',val)}
        valid={this.state.controls.confirmPassword.valid}
        touched={this.state.controls.confirmPassword.touched}/>

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