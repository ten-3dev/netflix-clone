import React from 'react';
import { StatusBar } from 'react-native';

import { Add, Profile_img_0, Profile_img_1, Profile_img_2 } from '../../Assets';

import { 
    ItemBox, 
    Item, 
    ItemProfileImg,
    ItemAddImg,
    ItemText,
    Backgrounds,
    TextBox,
    Label,
    UserBox
} from './style';

StatusBar.setBackgroundColor("#000");

const UserItem = (props) => {
    return(
        <ItemBox>
            {props.type !== 'add' ? <>
            <Item onPress={() => props.navigation.navigate('Home', { img: props.img, title: props.name })}>
                <ItemProfileImg 
                    source={props.img} 
                    resizeMode="contain" 
                />
            </Item>
            <ItemText>{props.name}</ItemText>
            </>
            :
            <>
            <Item onPress={() => alert('추가')}>
                <ItemAddImg 
                    source={Add} 
                    resizeMode="contain" 
                />
            </Item>
            <ItemText>프로필 추가</ItemText>
            </>
            }
        </ItemBox>
    )
}

const Main = ({navigation}) => {
  return(
      <Backgrounds>
        <TextBox>
            <Label>넷플릭스를 시청할 프로필을 선택하세요.</Label>
        </TextBox>
        <UserBox>
            <UserItem name="김민재 1" img={Profile_img_0} navigation={navigation} />
            <UserItem name="김민재 2" img={Profile_img_1} navigation={navigation} />
            <UserItem name="김민재 3" img={Profile_img_2} navigation={navigation} />
            <UserItem img={Profile_img_2} type="add" />
        </UserBox>
      </Backgrounds>
  )
}

export default Main;
