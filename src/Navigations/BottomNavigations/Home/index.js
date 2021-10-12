import React from 'react';

import Home from '../../../Screens/Home';

import { createStackNavigator } from '@react-navigation/stack';

const Navi = createStackNavigator();

const HomeNavigation = ({route}) => {
  return(
    <Navi.Navigator>
      <Navi.Screen
        initialParams={{img: route.params.img}}
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
    </Navi.Navigator>
  )
}

export default HomeNavigation;
