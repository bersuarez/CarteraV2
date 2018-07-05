import React from 'react';
import {TextInput, StyleSheet} from 'react-native';


const defaultInput = props =>(
	<TextInput 
	underlineColorAndroid='transparent'
	{...props}
	//array to hold multiple style objects that overwrite eachother by order. entonces primero usar el default, y lo que cambie con props.style lo overwrite
	style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid:null]} 
	/>
	);

const styles = StyleSheet.create({
    input:{
  	width:'75%',
  	borderWidth:1,
  	borderColor:'#eee',
  	padding:5,
  	margin:8
  },
  invalid:{
  	backgroundColor:'#f9c0c0',
  	borderColor:'red'
  }
});

export default defaultInput;