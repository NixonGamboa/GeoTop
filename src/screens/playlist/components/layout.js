import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function Layout (props){
	return(
  		<View style ={styles.containerLayout}>
			<View style ={styles.containerList}>
				{props.children}
			</View>
  		</View>
	)
}

const styles = StyleSheet.create({
	containerLayout:{
		flex:1,
	},
	containerList:{
		marginHorizontal: 8,
	}
})

export default Layout;