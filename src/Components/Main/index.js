import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';
import { StatusBar } from 'react-native';
import { Add, Profile_img_0, Profile_img_1, Profile_img_2 } from '../../Assets';

StatusBar.setBackgroundColor("#000");

const UserItem = (props) => {
    const ItemBox = styled.View`
        width: 110px;
        height: 145px;
        margin-top: 30px;
    `;
    const Item = styled.TouchableOpacity`
        width: 100%;
        height: 100%;
        border-radius: 5px;
        flex: 1;
        justify-content: center;
        align-items: center;
        margin-bottom: 0px;
    `;
    const ItemText = styled.Text`
        color: white;
        text-align: center;
        font-size: 12px;
        font-family: 'NotoSansKRRegular';
    `;
    return(
        <ItemBox>
            {props.type !== 'add' ? <>
            <Item onPress={() => props.navigation.navigate('Home', { img: props.img })}>
                <Image source={props.img} style={{width: '100%', height: '100%', borderRadius: 5}} resizeMode="contain"></Image>
            </Item>
            <ItemText>{props.name}</ItemText>
            </>
            :
            <>
            <Item onPress={() => alert('추가')}>
                <Image source={Add} style={{width: '70%', height: '70%', borderRadius: 5}} resizeMode="contain"></Image>
            </Item>
            <ItemText>프로필 추가</ItemText>
            </>
            }
        </ItemBox>
    )
}

const Main = ({navigation}) => {
    const Backgrounds = styled.View`
        width: 100%;
        height: 100%;
        background-color: #000;
        align-items: center;
        flex: 1;
    `;
    const TextBox = styled.View`
        width: 100%;
        height: 45px;
        margin-top: 67px;
    `;
    const Label = styled.Text`
        color: white;
        font-size: 18px;
        text-align: center;
        font-family: 'NotoSansKRRegular';
        margin-top: 7px;
    `;
    const UserBox = styled.View`
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    `;
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
