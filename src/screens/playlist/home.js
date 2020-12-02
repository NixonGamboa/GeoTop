import React,{Component} from 'react';

import Layout from '../../utils/layout-view';
import TrackList from './containers/tracks-list';
import API from '../../utils/api';

class Home extends Component {
	state = {
		topTracks:[]
	}
	
    async componentDidMount(){
		//Obteniendo datos de la api
		const tracks = await API.getTopTracks(10);
		this.setState({
			topTracks: tracks,
		})
		//Actualizando el headerTitle
		var title = `PLAY LIST ${tracks["@attr"].country.toUpperCase()} TOP 20`;
		this.props.navigation.setOptions({ headerTitle: title })
				
    }
	
    render(){
		return(
			<Layout>
				<TrackList 
					list = {this.state.topTracks}
                    navigation= {this.props.navigation}
					/>
			</Layout>
		);
	}
}
export default Home;