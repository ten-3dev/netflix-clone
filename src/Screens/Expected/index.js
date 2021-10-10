import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import styled from 'styled-components';
import { Bell, Right_Arrow } from '../../Assets';
import { HeaderExpected } from '../../Components/Header/index';

const ExpectedPage = ({route}) => {
  const NoticeBox = styled.TouchableOpacity`
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  const ImgAndTextBox = styled.View`
    width: 120px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-left: 10px;
  `;
  const CenterBox = styled.View`
    height: 100%;
    display: flex;
    justify-content: center;
  `;
  const BellAndArrowImg = styled.Image`
    width: 20px;
    height: 20px;
  `;
  const NoticeText = styled.Text`
    font-family: 'NanumGothic-Bold';
    color: white;
    font-size: 13px;
  `;
  const ArrowImgBox = styled.View`
    width: 50px;
    height: 100%;
    align-items: center;
    justify-content: center;
  `;

  return(
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <HeaderExpected img={route.params.img}/>
      <NoticeBox>
        <ImgAndTextBox>
          <CenterBox>
            <BellAndArrowImg source={Bell} resizeMode='contain'/>
          </CenterBox>
          <CenterBox>
            <NoticeText>알림 설정</NoticeText>
          </CenterBox>
        </ImgAndTextBox>
        <ArrowImgBox>
          <BellAndArrowImg source={Right_Arrow}/>
        </ArrowImgBox>
      </NoticeBox>
    </SafeAreaView>
  )
}

export default ExpectedPage;
