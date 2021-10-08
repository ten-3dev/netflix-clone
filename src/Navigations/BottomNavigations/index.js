import React from 'react';

import HomePage from './Home/index';
import ExpectedPage from './Expected/index';
import SavePage from './Save/index';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text } from 'react-native';
import { HomeIcon, HomeIcon_f } from '../../Assets';
import TabBar from '../../Components/TabBar';

const Tab = createBottomTabNavigator();

const HomeNavigation = ({route}) => {
  return(
    <Tab.Navigator 
      initialRouteName="HomePage" 
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          height: 60,
          backgroundColor: '#1E1E1E',
          borderTopWidth: 0,
        }
      }}

    >
      <Tab.Screen 
        initialParams={{img: route.params.img}}
        name="HomePage" 
        component={HomePage}
        options={{ tabBarLabelStyle: {fontSize: 12}, tabBarShowLabel: false, tabBarIcon: ({focused}) => {
          return (
            <TabBar name="홈" icon={HomeIcon} icon_f={HomeIcon_f} focused={focused}/>
          );
        }}}
        
      />
      <Tab.Screen 
        name="ExpectedPage" 
        component={ExpectedPage} 
        options={{ tabBarLabelStyle: {fontSize: 12}, tabBarShowLabel: false, tabBarIcon: ({focused}) => {
          return (
            <TabBar name="공개 예정" icon={HomeIcon} icon_f={HomeIcon_f} focused={focused}/>
          );
        }}} 
      />
      <Tab.Screen 
        name="SavePage" 
        component={SavePage} 
        options={{ tabBarLabelStyle: {fontSize: 12}, tabBarShowLabel: false, tabBarIcon: ({focused}) => {
          return (
            <TabBar name="저장된 콘텐츠 목록" icon={HomeIcon} icon_f={HomeIcon_f} focused={focused}/>
          );
        }}} 
      />
    </Tab.Navigator>
  )
}

export default HomeNavigation;
