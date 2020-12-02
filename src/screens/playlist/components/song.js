import React from 'react';
import {View, ImageBackground, Text, StyleSheet,TouchableOpacity}from 'react-native';

function Song (props) {
	console.log('props de elemento de la lista',props);
	return (
		<TouchableOpacity
			onPress={props.onPress}
			activeOpacity = {0.7}>
			<View style = {styles.container} > 
				
				<View style = {styles.indexContainer} >
					<Text style = {styles.indexStyle} >{props.index} </Text>
				</View>
				
				<View style = {styles.left} >
					<ImageBackground
						style = {styles.photo}
						source = {{uri:props.image[1]['#text']}}
						/>	
				</View>

				<View style = {styles.right} >
					<Text style=  {styles.nameSongTxt} >{props.name} </Text>
					<Text style= {styles.nameArtistTxt} >{props.artist.name} </Text>
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
	indexContainer:{
		justifyContent:'center',
	},
	indexStyle:{
		fontSize: 18,
		fontFamily: 'sans-serif',
		textAlign:'left',
		marginRight:16,
		color: '#fff',
		fontWeight:'bold',
	},
	left:{
		width:64,
		height:64,
	},
	photo:{
		width:'100%',
		height:'100%',
		resizeMode:'contain',
	},
	right:{
		flex:1,
		paddingLeft:8,
		paddingVertical: 2,
		justifyContent: 'center',
	},
	nameSongTxt:{
		fontSize: 18,
		fontFamily: 'sans-serif',
		textAlign:'left',
		marginLeft: 16,
		color: '#fff',
		fontWeight:'bold',
	},
	nameArtistTxt:{
		fontSize: 14,
		textAlign:'justify',
		marginLeft: 16,
		fontFamily: 'sans-serif',
		fontStyle: 'italic', 
		color: '#fff',
		
	},
	
})

export default Song;