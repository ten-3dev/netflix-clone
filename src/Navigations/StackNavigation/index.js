import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import { LOGO, Profile_setting } from '../../Assets/index';

import Main from '../../Components/Main/index';

import Home from '../../Navigations/BottomNavigations/Home/index';

import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();


const StackNavigation = (props) => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={'Main'}>
            <Stack.Screen 
                name="Main"
                component={Main}
                options={{ 
                    headerTitle: (props) => ( // App Logo
                    <Image
                        source={LOGO}
                        style={{width: 130}}
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
                    headerRight: (props) => (
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