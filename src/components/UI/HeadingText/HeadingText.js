import React from 'react'
import {Text, StyleSheet} from 'react-native'

const headingText = props=>(
	<Text {...props} 
	style={[styles.textHeading, props.style]}> 
	{props.children}
	</Text>
	);

const styles=StyleSheet.create({
	textHeading:{
  	fontSize:27,
    color:'white',
  	fontWeight:'bold',
  	fontFamily:'avenir',
    paddingBottom:50,
  }
})

export default headingText