import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { HeaderHome } from '../../Components/Header/index';
import List from "../../Components/HomeList";

import AnimatedColorView from 'react-native-animated-colors';

import { titleArr } from "../../Data";
import { Add, Info, Play, Post1 } from "../../Assets";

import {
  CosSafeAreaView,
  MainPost,
  PostImg,
  Type,
  SubFunc,
  Btn,
  PlayBtn,
  SubText,
  PlayText,
  Channel,
  ChannelText,
  CosView,
  PlayBtnChilImg,
  FlexBox
} from './style';

const HomePage = ({route}) => {
  const [activeIndex, setindex] = useState(0);

  const Lists = titleArr.map((title, key) => (<List key={key} title={title}></List>));

  const TransparentColor = (e) => {
    if(e.nativeEvent.contentOffset.y < 1){
      setindex(0);
    }else{
      setindex(1);
    }
  }

  return(
    <CosSafeAreaView>
      <ScrollView 
        stickyHeaderIndices={[1]} 
        showsVerticalScrollIndicator={false}
        onScroll={(e) => TransparentColor(e)}
        >
        <HeaderHome img={route.params.img} bgColor={activeIndex}/>
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
                <PlayBtnChilImg source={Add} resizeMode='contain'/>
                <SubText>내가 찜한 콘텐츠</SubText>
              </FlexBox>
            </Btn>
            <PlayBtn>
              <FlexBox flexD="row">
                <CosView>
                  <PlayBtnChilImg source={Play} resizeMode='contain'/>
                </CosView>
                <CosView>
                  <PlayText>재생</PlayText>
                </CosView>
              </FlexBox>
            </PlayBtn>
            <Btn>
              <FlexBox flexD="column">
                <PlayBtnChilImg source={Info} resizeMode='contain'/>
                <SubText>정보</SubText>
              </FlexBox>
            </Btn>
          </FlexBox>
        </SubFunc>
        {Lists}
      </ScrollView>
    </CosSafeAreaView>
  )
}

export default HomePage;
