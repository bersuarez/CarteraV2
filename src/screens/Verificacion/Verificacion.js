//de aqui se gestionan los tabs

import React, {Component} from 'react'
import{View,Text, Button, TouchableOpacity, StyleSheet, TextInput, ImageBackground} from 'react-native'
import startMainTabs from '../MainTabs/startMainTabs'
import Icon from "react-native-vector-icons/Ionicons";
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import backgroundImage from '../../assets/FondoLogin2.png'



class AuthScreen extends Component{
 
datosIntroducidosHandler=()=>{
    this.props.navigator.push({
      screen:'cartera.Registro',
      navigatorStyle: {
        navBarHidden: true,
        statusBarHidden: true,
        animationType:'fade',    
      }
      })
}
sinCodigoHandler=()=>{
    // this.props.navigator.dismissLightBox();
  }

  render(){
    return(
      <ImageBackground 
      source={backgroundImage} 
      style={styles.backgroundImage}
      >
      <View style={styles.containerarriba}>
      
      <MainText> {/*no sirve este wrpper ahorita*/}
        <HeadingText>Ingresa el código</HeadingText>
      </MainText>
      {/*</View>
      <View style={styles.containerabajo}>*/}
        {/*<Button title='Ya tengo cuenta'/>*/}
        <View style={styles.inputContainer}>
        <DefaultInput placeholder='.            _      _      _        _     _     _     ' style={styles.input}/>
        <TouchableOpacity onPress={this.datosIntroducidosHandler}>
        {/*<TouchableOpacity onPress={this.loginHandler}>*/}
                <View style={styles.deleteButton}>
                    <Icon size={40} name="ios-arrow-forward" color="white" />
                 </View>
          </TouchableOpacity>
      </View>
      <Button title="No recibí el código" onPress={this.sinCodigoHandler}/>
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
  }  
});


export default AuthScreen