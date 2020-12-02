import React from 'react';
import{View, Text, StyleSheet} from 'react-native';

function Empty (props) {
	return (
	<View style={styles.container} >
		<Text style={styles.text} > {props.text} </Text>
	</View>
)
}
const styles = StyleSheet.create ({
	container:{
		padding:10,
		alignContent:'center',
		justifyContent:'center',

	},
	text:{
		fontSize: 18,
	    textAlign:'center',
	    textAlignVertical: 'center', 
	    fontFamily: 'sans-serif',
	    color: '#fff',
	    marginTop: 8,
	    marginBottom: 8,
	},
})

export default Empty;