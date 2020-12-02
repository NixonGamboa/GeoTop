import React,{Component} from 'react';

import Layout from '../../utils/layout-view';
import Track from './containers/track-detail';

class TrackScreen extends Component {
	componentDidMount(){
		//Actualizando el headerTitle
		var country= this.props.route.params.attr.country
		var title = `Visualizando de ${country} Top20 `;
		this.props.navigation.setOptions({ headerTitle: title })
				
    }
	
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