
import React, {Component} from "react";
import {View, Text} from 'react-native';
import API from './src/utils/api';
class App extends Component {
  
  async componentDidMount(){
    console.log('el componente será montado');
    API.getTopTracks();
  }

  render() {
    return (
      <View>
        <Text>Hola GeoTop</Text>
      </View>
    );
  }
}

export default App;