import React from 'react';

import Save from '../../../Screens/Save';
import { createStackNavigator } from '@react-navigation/stack';

const Navi = createStackNavigator();

const HomeNavigation = ({route}) => {
  return(
    <Navi.Navigator>
      <Navi.Screen
        initialParams={{img: route.params.img, title: route.params.title}}
        name="Save"
        component={Save}
        options={{
          headerShown: false
        }}
      />
    </Navi.Navigator>
  )
}

export default HomeNavigation;
