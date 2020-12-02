import React from 'react';
import {View, ImageBackground, Text, StyleSheet, Dimensions, TouchableOpacity}from 'react-native';

function Detail (props) {
	return (
		<View style = {styles.container} > 
				<View style = {styles.photoContainer} >
					<ImageBackground
						style = {styles.photo}
						source = {{uri:props.image[3]['#text']}}
						/>	
					<View style = {styles.indexContain} >
						<Text style = {styles.indexTxt} >{props.index}</Text>
					</View>
				</View>

				<View style = {styles.textContainer} >
					<Text style=  {styles.nameSongTxt} >{props.name} </Text>
					<Text style= {styles.nameArtistTxt} >{props.artist.name} </Text>
					<Text style=  {styles.durationTxt} >Duración: {props.len} </Text>

				</View>	
				<TouchableOpacity style={styles.button}
					onPress={props.onPress}
					activeOpacity = {0.7}
					>
					<Text style={styles.urlTxt}>Escúchala Aquí! en LastFM.</Text>
				</TouchableOpacity>

				
			
		</View>
		
	)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingVertical: 8,
		justifyContent:'center',
	},
	photoContainer:{
		marginVertical:8,
		width:Dimensions.get('window').width*0.8,
		height:Dimensions.get('window').width*0.8,
	},
	photo:{
		width:'100%',
		height:'100%',
		resizeMode:'contain',
	},
	indexContain:{
		position:'absolute',
		right:8,
		top:8,
		backgroundColor:'#00000022',
		width:45,
		height:45,
		borderRadius:23,
		paddingVertical:5,
		paddingHorizontal:8,
		justifyContent:'center',
		alignItems:'center',
	},
	indexTxt:{
		fontFamily: 'serif',
		fontStyle: 'italic',
		color:'black',
		fontSize:25,
	},
	textContainer:{
		flex:1,
		width:Dimensions.get('window').width*0.8,
		paddingVertical: 2,
		justifyContent: 'flex-start',
	},
	nameSongTxt:{
		fontSize: 24,
		fontFamily: 'sans-serif',
		textAlign:'left',
		color: '#fff',
		fontWeight:'bold',
		marginTop:24,
	},
	nameArtistTxt:{
		fontSize: 20,
		textAlign:'justify',
		fontFamily: 'sans-serif',
		fontStyle: 'italic', 
		color: '#fff',
		marginTop:16,
	},
	durationTxt:{
		fontSize: 16,
		textAlign:'justify',
		fontFamily: 'sans-serif',
		color: '#fff',
		marginTop:20,
		
	},
	button:{
		width:Dimensions.get('window').width*0.8,
		bottom:8,
		alignItems:'center',
		paddingBottom:24,
	},
	urlTxt:{
		paddingHorizontal:4,
		height:32,
		fontSize: 14,
		textAlign:'center',
		textAlignVertical:'center',
		fontFamily: 'serif',
		color: '#fff',
		borderWidth:2,
		borderColor: '#091010',
		borderRadius:8,
		
	},
	
})

export default Detail;