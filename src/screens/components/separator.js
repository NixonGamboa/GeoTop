import React from 'react';
import {View, StyleSheet} from 'react-native';

function Separator (props) {
	return (
		<View style={styles.container} > 
		</View>
		)
}
const styles = StyleSheet.create ({
	container:{
		borderTopWidth:2,
		borderColor:'#091010',
	}
})

export default Separator;