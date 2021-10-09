import React, { useState } from "react";
import { SafeAreaView, Platform, View, StatusBar, Text, Image, Dimensions, TouchableOpacity, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
import styled from "styled-components";
import { Add, Info, Play, Post1 } from "../../Assets";
import AnimatedColorView from 'react-native-animated-colors';

import Header from '../../Components/Header/index';

const List = (props) => {

  const ListBox = styled.View`
  width: 100%;
  height: 230px;
  margin-top: 20px;
`;
const ListTitle = styled.View`
  width: 100%;
  height: 50px;
  padding-left: 10px;
`;
const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: white;
  align-items: center;
`;
const ItemBox = styled.View`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: row;
`;
const Item = styled.TouchableOpacity`
  width: 125px;
  height: 170px;
  background-color: gray;
  border-radius: 5px;
  margin-right: 4px;
  margin-left: 4px;
`;

  return(
    <ListBox>
      <ListTitle>
        <Title>{props.title}</Title>
      </ListTitle>
      <ItemBox>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </ScrollView>
      </ItemBox>
    </ListBox>
  )
}


const HomePage = ({route}) => {

  const [activeIndex, setindex] = useState(0);
  
  const MainPost = styled(LinearGradient)`
    width: 100%;
    height: 650px;
    margin-top: -130px;
    z-index: -1;
  `;
  const PostImg = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  `;
  const Type = styled.Text`
    color: white;
    margin-top: -100px;
    font-size: 16px;
    text-align: center;
  `;
  const SubFunc = styled.View`
    width: 100%;
    height: 65px;
  `;
  
  const FlexBox = styled.View`
    display: flex;
    flex-direction: ${props => {
      if(props.flexD === 'row'){
        return 'row';
      }else if(props.flexD === 'column'){
        return 'column';
      }
    }}
    align-items: center;
    justify-content: space-evenly;

  `;

  const Btn = styled.TouchableOpacity`
    width: 85px;
    height: 60px;
  `;
  const PlayBtn = styled.TouchableOpacity`
    width: 80px;
    height: 35px;
    background-color: white;
    border-radius: 3px;
  `;
  const SubText = styled.Text`
    color: white;
  `;
  const PlayText = styled.Text`
    color: black;
    font-size: 18px;
    font-weight: bold;
  `;
  const Channel = styled.View`
    // background-color: 'rgba(0,0,0,0.5)';
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    z-index: 1;
  `;
  const ChannelText = styled.Text`
    color: white;
    font-size: 22px;
  `;

  const titleArr = [
    '넷플릭스 인기 콘텐츠', 
    '지금 뜨는 콘텐츠', 
    '내가 찜한 콘텐츠', 
    '평론가 호평! 미국 TV 프로그램', 
    '한국 TV 프로그램 (로맨틱)',
    '일본 애니메이션',
    '보고 또 봐도 좋은 명장',
    '미국 블록버스터 영화',
    '가볍게 부담 없이!',
    '한국 드라마',
    '드라마 장르 영화'
  ]

  const Lists = titleArr.map((title, key) => (<List key={key} title={title}></List>));

  const TransparentColor = (e) => {
    if(e.nativeEvent.contentOffset.y < 1){
      setindex(0);
    }else{
      setindex(1);
    }
  }

  return(
    <SafeAreaView style={{backgroundColor:"black", flex: 1}}>
      <ScrollView 
        stickyHeaderIndices={[1]} 
        showsVerticalScrollIndicator={false}
        onScroll={(e) => TransparentColor(e)}
        >
        <Header img={route.params.img} bgColor={activeIndex}/>
        <AnimatedColorView
        activeIndex={activeIndex}
        colors={['"rgba(0,0,0,0.0)"', '"rgba(0,0,0,0.5)"']}
        duration={1000}
        loop={false}>
        <Channel>
            <TouchableOpacity>
                <ChannelText>TV 프로그램</ChannelText>
            </TouchableOpacity>
            <TouchableOpacity>
                <ChannelText>영화</ChannelText>
            </TouchableOpacity>
            <TouchableOpacity>
                <ChannelText>카테고리 ▾</ChannelText>
            </TouchableOpacity>
        </Channel>
        </AnimatedColorView>
        <MainPost colors={['transparent', 'transparent', '#000']}>
          <PostImg source={Post1} resizeMode='contain'/>
        </MainPost>
        <Type>액션 & 어드벤처</Type>
        <SubFunc>
          <FlexBox flexD="row">
            <Btn>
              <FlexBox flexD="column">
                <Image source={Add} style={{width: 28, height: 28}}/>
                <SubText>내가 찜한 콘텐츠</SubText>
              </FlexBox>
            </Btn>
            <PlayBtn>
              <FlexBox flexD="row" style={{paddingTop: 2}}>
                <Image source={Play} style={{width: 30, height: 30}}/>
                <PlayText>재생</PlayText>
              </FlexBox>
            </PlayBtn>
            <Btn>
              <FlexBox flexD="column">
                <Image source={Info} style={{width: 30, height: 30}}/>
                <SubText>정보</SubText>
              </FlexBox>
            </Btn>
          </FlexBox>
        </SubFunc>
        {Lists}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage;
