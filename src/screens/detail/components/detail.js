import React from 'react';
import {View, ImageBackground, Text, StyleSheet, Dimensions,Linking}from 'react-native';

function Detail (props) {
	console.log(props)
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
					
					<View style={styles.button}>
					<Text style={styles.urlTxt}
					      	onPress={() => Linking.openURL(props.url)}>
								  Escúchala Aquí! en LastFM.
						</Text>
					</View>

				</View>
			
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
		right:0,
		top:0,
		backgroundColor:'#00000022',
		width:56,
		height:64,
		borderRadius:28,
		paddingVertical:5,
		paddingHorizontal:8,
		justifyContent:'center',
		alignItems:'center',
	},
	indexTxt:{
		fontFamily: 'serif',
		fontStyle: 'italic',
		color:'black',
		fontSize:32,
	},
	textContainer:{
		flex:1,
		width:Dimensions.get('window').width*0.8,
		paddingVertical: 2,
		justifyContent: 'space-around',
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
		fontSize: 18,
		textAlign:'justify',
		fontFamily: 'sans-serif',
		fontStyle: 'italic', 
		color: '#fff',
		
	},
	durationTxt:{
		fontSize: 18,
		textAlign:'justify',
		fontFamily: 'sans-serif',
		color: '#fff',
		
	},
	button:{
		alignItems:'center',
	},
	urlTxt:{
		width:Dimensions.get('window').width*0.5,
		height:32,
		fontSize: 12,
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