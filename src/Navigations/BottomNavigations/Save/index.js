import React from 'react';

import Save from '../../../Screens/Save';
import { createStackNavigator } from '@react-navigation/stack';

const Navi = createStackNavigator();

const HomeNavigation = ({route}) => {
  return(
    <Navi.Navigator>
      <Navi.Screen
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
