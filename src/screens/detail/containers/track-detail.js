import React, { Component } from 'react';
import moment from "moment";

import Layout from '../components/track-layout';
import Detail from '../components/detail';
//import GoToTrack from '../components/to-track-button';

class Description extends Component {
	
	handlePress = (/*params*/)=> {
    
        //aqui se podría direccionar fuera de la app al sitio web de la cancion en lastfm
        
	}
	
	calculateDuration = (seconds)=>{
		var sec = parseInt(seconds)
		var len = moment.utc(sec*1000).format('mm:ss');
		console.log('pasando ',seconds,' y ',sec,' a ',len);
		return len;

	}
	
 	render() {
		console.log(this.props);
    	return (
    		<Layout>
	      		<Detail
					   {...this.props.item} 
					   len = {this.calculateDuration(this.props.item.duration)}
					   index = {this.props.index}
				/>
	      	</Layout>
    	);
  	}
}
/*<GoToTrack
	      			onPress={()=>{this.handlePress(params)}}/>*/

export default Description;