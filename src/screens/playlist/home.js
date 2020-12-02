import React,{Component} from 'react';
//import {StatusBar} from 'react-native';

import Layout from '../../utils/layout-view';
import TrackList from './containers/tracks-list';
import API from '../../utils/api';

class Home extends Component {
	state = {
		topTracks:[]
	}
	
    async componentDidMount(){
		const tracks = await API.getTopTracks(10);
		console.log(tracks);
		this.setState({
			topTracks: tracks,
		})
		console.log(this.props);
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