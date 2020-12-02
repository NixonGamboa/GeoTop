import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function Layout (props){
	return(
  		<View style ={styles.containerLayout}>
			<View style ={styles.containerTitle}>
			  <Text style={styles.txtTitle}>
  					{props.title}
  				</Text>
			</View>
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
	containerTitle:{
		backgroundColor:'#091010',
	},
	txtTitle:{
		fontSize: 28,
    textAlign:'center',
    textAlignVertical: 'center', 
	fontFamily: 'sans-serif',
	fontWeight: "bold",
    color:'#fff',
    marginVertical: 16,
	},
	containerList:{
		marginHorizontal: 8,
	}
})

export default Layout;