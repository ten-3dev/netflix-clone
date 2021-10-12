import React from 'react';

import Expected from '../../../Screens/Expected/index';

import { createStackNavigator } from '@react-navigation/stack';

const Navi = createStackNavigator();

const HomeNavigation = ({route}) => {
  return(
    <Navi.Navigator>
      <Navi.Screen
        initialParams={{img: route.params.img}}
        name="Expected"
        component={Expected}
        options={{
          headerShown: false
        }}
      />
    </Navi.Navigator>
  )
}

export default HomeNavigation;
