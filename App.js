
import React, {Component} from "react";
import {NavigationContainer} from '@react-navigation/native';
import GeoStack from './src/utils/stack';



class App extends Component {
  
  render() {
    return (
      <NavigationContainer>
        <GeoStack/>  
      </NavigationContainer> 
    );
  }
}

export default App;