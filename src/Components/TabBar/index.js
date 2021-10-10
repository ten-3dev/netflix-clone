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
            style={{width: 20, height: 20}}
        />
        {props.focused ? 
        <Text style={{color: 'white', fontSize: 8, fontFamily: 'NotoSansKRRegular'}}>{props.name}</Text> 
        : 
        <Text style={{color: 'gray', fontSize: 8, fontFamily: 'NotoSansKRRegular'}}>{props.name}</Text>
        }
  </View>
  )
}

export default TabBar;
