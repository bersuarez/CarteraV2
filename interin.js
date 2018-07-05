import React, { Component } from "react";
import { StyleSheet, View, Button, TextInput, Image } from "react-native";
import axios from 'axios'
//import {connect} from 'react-redux';
//import{addPhone,addName,addLastName,addEmail, addPassword} from './src/store/actions/index'

//quitar export y default para usar redux
export default class App extends Component {
 //quitar state para usar redux

// //para redux, los handlers pones lo siguiente:
// nameAddedHandler = () => {
//   this.props.onAddName(userName);
// }


  state = {
    nombre: '',
    correo:'',
    contraseña:''
  };

  
  contactAddedHandler = () => {
  //no está sirviendo la condicional
   if(this.state.nombre.trim()===""||this.state.correo.trim()===""||this.state.contraseña.trim()===""){
      return;
    }
    const contacto={
      nombre:this.state.nombre,
      correo:this.state.correo,
      contraseña:this.state.contraseña
    }
    axios.post('https://blabla-af195.firebaseio.com/contactos.json',contacto)
    };
    

    // creacionContacto=(authData)=>{
    //   return dispatch =>{
    //     axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAnjthH3cbrD8FMHowoaZ2u0SBMVF2wrAg',
    //       method:'POST'
    //       body:JSON.stringify{
    //         email:this.contacto.correo,
    //         password:this.contacto.contraseña
    //         returnSecureToken:true
    //       })
    //   }
    // }
  
    
    
   //{/*onPress={this.contactAddedHandler()}*/}
   
  
//objeto que llena sus props con tres input text
//boton que 

  render() {
    let pic = {
            uri: '/Users/bernardosuarez/Documents/XHash/Diseño\ empresa/Captura\ de\ pantalla\ 2018-04-26\ a\ la\(s\)\ 1.13.38\ p.\ m..png'};
    return (
      <View style={styles.container}>
       <Image source={pic} 
         style={{width: 160, height:150, paddingTop:0, paddingBottom:0}}/>
        <TextInput
          placeholder="Nombre"
          //para redux, cambiar a props
          //value={this.state.nombre}
          value={this.state.nombre}
          onChangeText={(event) => this.setState({nombre: event})}
          style={styles.placeInput}
        />
        <TextInput
          placeholder="Correo"
          //para redux, cambiar a props
          //value={this.state.nombre}
          value={this.state.correo}
          onChangeText={(event) => this.setState({correo: event})}
          style={styles.placeInput}
        />
        <TextInput
          placeholder="Contraseña"
          //para redux, cambiar a props
          //value={this.state.nombre}
          value={this.state.contraseña}
          onChangeText={(event) => this.setState({contraseña: event})}
          style={styles.placeInput}
        />
        <Button title="Registrar" onPress={this.contactAddedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});


//conexion a redux
// const mapStateToProps=state=>{
//   return{
//     users: state.places.users
//   }
// }

// const mapDispatchToProps =dispatch=>{
//   return{
//     onAddName:(userName)=> dispatch(addName(userName))
//   }
// }

// export default conect(mapStateToProps,mapDispatchToProps)(App);

