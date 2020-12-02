import React from 'react';
import {View, ImageBackground, Text, StyleSheet,TouchableOpacity}from 'react-native';

function Song (props) {
	return (
		<TouchableOpacity
			//onPress={props.onPress}
			activeOpacity = {0.7}>
			<View style = {styles.container} > 
				<View style = {styles.left} >
					<ImageBackground
						style = {styles.photo}
						source = {{uri:props.image[1]['#text']}}
						/>	
					<View style = {styles.durationText} >
						<Text style = {styles.titleTxt} >{props.duration}</Text>
					</View>
				</View>

				<View style = {styles.right} >
					<Text style=  {styles.priceTxt} >{props.name} </Text>
					<Text style= {styles.addNoteTxt} >{props.artist.name} </Text>
					<Text style= {styles.detailTxt}>$ {props.url}.</Text>
				</View>
			
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		flex:1,
		paddingVertical: 8,

	},
	left:{
		width:140,
		height:180,
	},
	photo:{
		width:'100%',
		height:'100%',
		resizeMode:'contain',
	},
	durationText:{
		position:'absolute',
		left:0,
		top:0,
		backgroundColor:'black',
		paddingVertical:5,
		paddingHorizontal:8,
		width:50,
	},
	titleTxt:{
		fontFamily: 'serif',
		fontStyle: 'italic',
		color:'white',
		fontSize:11,
	},
	right:{
		flex:1,
		paddingLeft:8,
		paddingVertical: 2,
		justifyContent:'space-between',
	},
	detailTxt:{
		fontSize: 12,
		textAlign:'justify',
		fontFamily: 'sans-serif',
		fontStyle: 'italic', 
		color: '#000',
		paddingTop: 4,
		
	},
	addNoteTxt:{
		fontSize: 12,
		textAlign:'justify',
		fontFamily: 'sans-serif',
		fontStyle: 'italic', 
		color: '#000',
		
	},
	priceTxt:{
		fontSize: 20,
		fontFamily: 'serif',
		fontStyle: 'italic', 
		textAlign:'right',
		marginRight: 16,
		color: '#4c4c4c',
		fontWeight:'bold',
	},
})

export default Song;