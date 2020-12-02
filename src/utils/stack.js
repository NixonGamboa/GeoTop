import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/playlist/home';
import TrackScreen from '../screens/detail/detail-screen';

const Stack = createStackNavigator();

//estilos del header
const styles = {
    headerTitleAlign:'center',
    headerStyle: {
        backgroundColor: '#091010',
        },
    headerTintColor: '#fff',
};

//estilos del texto del header
const titleStyles = {
    textAlign:'center',
    fontFamily: 'sans-serif',
    fontWeight: "bold",
    color:'#fff',
};


const GeoStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = 'PLAYLIST'
                component = {Home}
                options={{
                    headerTitle:'PLAY LIST TOP 20',
                    ...styles,
                    headerTitleStyle: {
                        fontSize: 20,
                        ...titleStyles,
                    },
                }}
            />

            <Stack.Screen 
                name = 'TRACK'  
                component = {TrackScreen} 
                options={{
                    headerTitle:'Visualizando de Top20',
                    ...styles,
                    headerTitleStyle: {
                        fontSize: 16,
                        ...titleStyles,
                    },
                }}
            />

        </Stack.Navigator>
    );
}

export default GeoStack;
