//master wrapper around all text elements.. solo text puede wrap other text elements with it and there the styles will cascade

import React from 'react'
import {Text, StyleSheet} from 'react-native'

const mainText = props => (
	<Text style={styles.mainText}>{props.children}</Text>
	)

	const styles= StyleSheet.create({
		maintText:{
			color:'#bbb',
			backgroundColor:'transparent'
		}
	})

	export default mainText