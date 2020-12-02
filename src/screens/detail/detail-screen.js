import React,{Component} from 'react';

import Layout from '../../utils/layout-view';
import Track from './containers/track-detail';

class TrackScreen extends Component {
	
  	render(){
		return(
			<Layout>
				<Track
					item={this.props.route.params.item}
					index = {this.props.route.params.index}
				/>
			</Layout>
		);
	}
}
export default TrackScreen;