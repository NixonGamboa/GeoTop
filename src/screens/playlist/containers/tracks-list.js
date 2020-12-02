import React, { Component } from 'react';
import {FlatList, Alert} from 'react-native';

import Layout from '../components/layout';
import Empty from '../components/empty';
import Separator from '../components/separator';
import Song from '../components/song';


class TracksList extends Component {
	renderEmpty = () => <Empty text = "Cargando canciones." />
	itemSeparator = () => <Separator />
	handlePress = (item,index) => {
		//aqui va lo que se vaya a hacer cuando se presione el item
		
		//pasando parametros a la sgte vista, etre ellos el objeto info de la lista (Pais, pagina, etc)
		const attr = this.props.list["@attr"];		
		this.props.navigation.navigate('TRACK',{item,index,attr});
	}
	renderItem = ({item,index})=> {
		return (
			<Song 
				{...item}
				index = {index+1}
				onPress={()=>{this.handlePress(item,index+1)}}
				/>
			)}
	
	render() {
		
		return (
			<Layout >
				<FlatList
					data= {this.props.list.track}
					ListEmptyComponent={this.renderEmpty}
					ItemSeparatorComponent = {this.itemSeparator}
					renderItem={this.renderItem}
					nestedScrollEnabled={true} />
				
			</Layout>
	)}
}


export default TracksList;
