import React from 'react';
import {Text, View, Image} from 'react-native';

const TabBar = (props) => {
  return(
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
            resizeMode={'contain'}
            source={
                props.focused ? props.icon : props.icon_f
            }
            style={{width: 25, height: 25}}
        />
        {props.focused ? 
        <Text style={{color: 'white', fontSize: 10}}>{props.name}</Text> 
        : 
        <Text style={{color: 'gray', fontSize: 10}}>{props.name}</Text>
        }
  </View>
  )
}

export default TabBar;
