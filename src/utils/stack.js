import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/playlist/home';
import TrackScreen from '../screens/detail/detail-screen';

const Stack = createStackNavigator();

const GeoStack = () => {
    return(
        <Stack.Navigator>

            <Stack.Screen
                name = 'PLAYLIST'
                component = {Home}
                    options={
                        {
                            headerTitle:'PLAY LIST COLOMBIA TOP 20',
                            headerTitleAlign:'center',
                            headerStyle: {
                                backgroundColor: '#091010',
                                },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontSize: 20,
                                textAlign:'center',
                                fontFamily: 'sans-serif',
                                fontWeight: "bold",
                                color:'#fff',
                                },
                            }
                        }
            />

            <Stack.Screen 
                name = 'TRACK'  
                component = {TrackScreen} 
                options={
                    {
                        headerTitle:'Visualizando de Top20 Colombia',
                        headerTitleAlign:'center',
                        headerStyle: {
                            backgroundColor: '#091010',
                            },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 16,
                            textAlign:'center',
                            fontFamily: 'sans-serif',
                            fontWeight: "bold",
                            color:'#fff',
                            },
                        }
                    }
            />

        </Stack.Navigator>
    );
}

export default GeoStack;
