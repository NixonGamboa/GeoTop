import React, { Component } from 'react';
import moment from 'moment';
import {Linking} from 'react-native';

import Layout from '../components/track-layout';
import Detail from '../components/detail';

class Description extends Component {
	
	toUrl = (url)=> {
		//aqui se direcciona fuera de la app al sitio web de la cancion en lastfm
        Linking.openURL(url)
	}
	
	calculateDuration = (seconds)=>{
		var sec = parseInt(seconds)
		var len = moment.utc(sec*1000).format('mm:ss');
		return len;

	}
	
 	render() {
    	return (
    		<Layout>
	      		<Detail
					   {...this.props.item} 
					   len = {this.calculateDuration(this.props.item.duration)}
					   index = {this.props.index}

					   onPress={()=>{this.toUrl(this.props.item.url)}}
				/>
	      	</Layout>
    	);
  	}
}

export default Description;