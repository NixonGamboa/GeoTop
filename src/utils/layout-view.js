import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import { Header } from '@react-navigation/native';

function LayoutView (props){
  return(
    <View style = {styles.superContainer} >
        <View style={styles.container} >
            {props.children}
        </View>
    </View>  
  )
}
const styles=StyleSheet.create({
  superContainer:{
    flex:1,
    width: '100%',
    height: '100%',
    backgroundColor: '#243d3d',
    
  },
  container:{
    flex:1,
    height: Dimensions.get('window').height,
  },
})

export default LayoutView;