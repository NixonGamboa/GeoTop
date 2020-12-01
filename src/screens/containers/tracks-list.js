import React, { Component } from 'react';
import {FlatList, Alert} from 'react-native';

import Layout from '../components/layout';
import Empty from '../components/empty';
import Separator from '../components/separator';
import Song from '../components/song';
//import Buttons from '../components/button';

/*function mapStateToProps(state){
  console.log(state)
  return {
      cart:state.cart,
      userActive:state.user.emailVerified,
  }
}*/

class TracksList extends Component {
	renderEmpty = () => <Empty text = "No hay canciones" />
	itemSeparator = () => <Separator />
	/*handlePress = (item) => {
		this.props.dispatch({
			type:'REMOVE_TO_CART',
			payload:{
				id:item.key,
			}
		})
	}*/
	renderItem = ({item})=> {
		return (
			<Song 
				{...item}
				/*onPress={()=>{this.handlePress(item)}}*/
				/>
			)}
	/*onPressContinue = () => {
		if(this.props.userActive === true){
			if (this.props.cart.length > 0){
				console.log('pasando a vista de formulario')
				this.props.navigation.navigate('RegisterForm')
				console.log('formulario')
			}else{
				Alert.alert(
					'CARRITO VACIO',
					'Por favor agregue elementos al carrito',
					[
						{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), },
					    {text: 'OK', onPress: () => this.props.navigation.navigate('Home')}
					],
				);
			}
		}else{
			Alert.alert(
					'REGISTRATE',
					'Por favor accede con google para continuar con tu compra',
					[
						{text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), },
						{text: 'OK', onPress: () => this.props.navigation.navigate('Login')},
					    
					],
				);
		}
	} 
	onPressAddMore = () => {
		console.log('regresando a la Home')
		this.props.navigation.navigate('Home')
		console.log('Home')
		}*/
	render() {
		return (
			<Layout
			title = "Top 10:" >
				<FlatList
					data= {this.props.songs}
					ListEmptyComponent={this.renderEmpty}
					ItemSeparatorComponent = {this.itemSeparator}
					renderItem={this.renderItem}
					nestedScrollEnabled={true} />
				
			</Layout>
	)}
}
/*<Buttons
					onPressAddMore={this.onPressAddMore}
					onPressContinue={this.onPressContinue} />*/

export default /*connect(mapStateToProps)(*/TracksList;
