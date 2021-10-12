import React from 'react';

import {
  CenterView,
  IconImg,
  IconText
} from './style';

const TabBar = (props) => {
  return(
    <CenterView>
        <IconImg
            resizeMode={'contain'}
            source={ props.focused ? props.icon : props.icon_f }
        />
        {props.focused ? 
        <IconText color="white">{props.name}</IconText> 
        : 
        <IconText>{props.name}</IconText>
        }
  </CenterView>
  )
}

export default TabBar;
