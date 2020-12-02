import React, { Component } from 'react';
import {FlatList, Alert} from 'react-native';

import Layout from '../components/layout';
import Empty from '../components/empty';
import Separator from '../components/separator';
import Song from '../components/song';


class TracksList extends Component {
	renderEmpty = () => <Empty text = "No hay canciones" />
	itemSeparator = () => <Separator />
	/*handlePress = (item) => {
		//aqui va lo que se vaya a hacer cuando se presione el item
	}*/
	renderItem = ({item})=> {
		return (
			<Song 
				{...item}
				/*onPress={()=>{this.handlePress(item)}}*/
				/>
			)}
	
	render() {
		
		return (
			<Layout
			title = "Top 10 Colombia" >
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
