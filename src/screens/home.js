import React,{Component} from 'react';
//import {StatusBar} from 'react-native';

import Layout from '../utils/layout-view';
import TrackList from './containers/tracks-list';
import API from '../utils/api';

class Home extends Component {

    async componentDidMount(){
        console.log('el componente será montado');
        API.getTopTracks(10);
    }
	
    /*
    static navigationOptions = ({ navigation }) => {
    return {
        title: 'Top 10',
        headerStyle: {
	      backgroundColor: '#362779',
	    },
	    headerTintColor: '#fff',
	    headerTitleStyle: {
	    	fontSize: 28,
			fontFamily: 'cursive',
			color: '#fff',
	      	//fontWeight: 'bold',
	    },
      }
    }
    componentWillMount(){
		this.focus = this.props.navigation.addListener('didFocus',()=> {
			StatusBar.setBarStyle('light-content')
			StatusBar.setBackgroundColor('#00000033')
      		StatusBar.setTranslucent(true)
		});
	}
	componentWillUnmount(){
		this.focus.remove();
	}*/
	render(){
		return(
			<Layout>
				<TrackList 
                    //navigation={this.props.navigation} 
                    />
			</Layout>
		);
	}
}
export default Home;