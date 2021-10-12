import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Main from '../../Components/Main/index';
import Home from '../../Navigations/BottomNavigations/index';

import { LOGO, Profile_setting } from '../../Assets/index';


const Stack = createStackNavigator();


const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={'Main'}>
            <Stack.Screen 
                name="Main"
                component={Main}
                options={{ 
                    headerTitle: () => (
                    <Image
                        source={LOGO}
                        style={{width: 130, height: '100%', transform: [{scale: 1.15}]}}
                        resizeMode="contain"
                    />
                    ),
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#000',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0
                    },
                    headerRight: () => (
                        <TouchableOpacity 
                            style={{
                                width: 21, 
                                height: 21, 
                                marginRight: 10
                            }}>
                            <Image
                                source={Profile_setting}
                                style={{width: '100%', height: '100%'}}
                                resizeMode="contain"
                            />
                    </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
