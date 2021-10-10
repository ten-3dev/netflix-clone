import React , {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import styled from 'styled-components';
import { Bell, Right_Arrow } from '../../Assets';
import { HeaderExpected } from '../../Components/Header/index';
import ExpectedList from '../../Components/ExpectedList';
import { ScrollView } from 'react-native-gesture-handler';

const ExpectedPage = ({route}) => {
  const ExpectedMovieArr = [
    {
      title: "블레이드 러너",
      date: "11월 1일 공개",
      description: 
        "핵전쟁 이후 혼돈과 무질서로 휩싸인 2019년, 복제인간 ‘로이’를 포함한 ‘넥서스 6’이오프월드에서 반란을 일으킨 후 지구로 잠입한다. 은퇴한 블레이드 러너였던 '데커드'(해리슨 포드)는 지구에 잠입한 복제 인간들을 찾는 임무와 함께 강제로 복직하게 되고, 탐문 수사를 위해 찾아간 넥서스 6 제조사인 타이렐 사에서자신이 복제 인간임을 모르는 ‘레이첼’(숀 영)을 마주하게 된다.한편, 증거의 꼬리를 잡아 수사하던 도중 ‘데커드’는 ‘레이첼’ 덕분에 위기 속에서 목숨을 구원받게 되고, 복제 인간과의 마지막 전투를 앞두게 된다.", 
      tags: "색다른 이야기 ∙ 블랙 코미디 ∙ 범죄 ∙ 한국 작품",
    },
    {
      title: "블레이드 러너",
      date: "11월 1일 공개",
      description: 
        "핵전쟁 이후 혼돈과 무질서로 휩싸인 2019년, 복제인간 ‘로이’를 포함한 ‘넥서스 6’이오프월드에서 반란을 일으킨 후 지구로 잠입한다. 은퇴한 블레이드 러너였던 '데커드'(해리슨 포드)는 지구에 잠입한 복제 인간들을 찾는 임무와 함께 강제로 복직하게 되고, 탐문 수사를 위해 찾아간 넥서스 6 제조사인 타이렐 사에서자신이 복제 인간임을 모르는 ‘레이첼’(숀 영)을 마주하게 된다.한편, 증거의 꼬리를 잡아 수사하던 도중 ‘데커드’는 ‘레이첼’ 덕분에 위기 속에서 목숨을 구원받게 되고, 복제 인간과의 마지막 전투를 앞두게 된다.", 
      tags: "색다른 이야기 ∙ 블랙 코미디 ∙ 범죄 ∙ 한국 작품",
    },
    {
      title: "블레이드 러너",
      date: "11월 1일 공개",
      description: 
        "핵전쟁 이후 혼돈과 무질서로 휩싸인 2019년, 복제인간 ‘로이’를 포함한 ‘넥서스 6’이오프월드에서 반란을 일으킨 후 지구로 잠입한다. 은퇴한 블레이드 러너였던 '데커드'(해리슨 포드)는 지구에 잠입한 복제 인간들을 찾는 임무와 함께 강제로 복직하게 되고, 탐문 수사를 위해 찾아간 넥서스 6 제조사인 타이렐 사에서자신이 복제 인간임을 모르는 ‘레이첼’(숀 영)을 마주하게 된다.한편, 증거의 꼬리를 잡아 수사하던 도중 ‘데커드’는 ‘레이첼’ 덕분에 위기 속에서 목숨을 구원받게 되고, 복제 인간과의 마지막 전투를 앞두게 된다.", 
      tags: "색다른 이야기 ∙ 블랙 코미디 ∙ 범죄 ∙ 한국 작품",
    },
    {
      title: "블레이드 러너",
      date: "11월 1일 공개",
      description: 
        "핵전쟁 이후 혼돈과 무질서로 휩싸인 2019년, 복제인간 ‘로이’를 포함한 ‘넥서스 6’이오프월드에서 반란을 일으킨 후 지구로 잠입한다. 은퇴한 블레이드 러너였던 '데커드'(해리슨 포드)는 지구에 잠입한 복제 인간들을 찾는 임무와 함께 강제로 복직하게 되고, 탐문 수사를 위해 찾아간 넥서스 6 제조사인 타이렐 사에서자신이 복제 인간임을 모르는 ‘레이첼’(숀 영)을 마주하게 된다.한편, 증거의 꼬리를 잡아 수사하던 도중 ‘데커드’는 ‘레이첼’ 덕분에 위기 속에서 목숨을 구원받게 되고, 복제 인간과의 마지막 전투를 앞두게 된다.", 
      tags: "색다른 이야기 ∙ 블랙 코미디 ∙ 범죄 ∙ 한국 작품",
    },
    {
      title: "블레이드 러너",
      date: "11월 1일 공개",
      description: 
        "핵전쟁 이후 혼돈과 무질서로 휩싸인 2019년, 복제인간 ‘로이’를 포함한 ‘넥서스 6’이오프월드에서 반란을 일으킨 후 지구로 잠입한다. 은퇴한 블레이드 러너였던 '데커드'(해리슨 포드)는 지구에 잠입한 복제 인간들을 찾는 임무와 함께 강제로 복직하게 되고, 탐문 수사를 위해 찾아간 넥서스 6 제조사인 타이렐 사에서자신이 복제 인간임을 모르는 ‘레이첼’(숀 영)을 마주하게 된다.한편, 증거의 꼬리를 잡아 수사하던 도중 ‘데커드’는 ‘레이첼’ 덕분에 위기 속에서 목숨을 구원받게 되고, 복제 인간과의 마지막 전투를 앞두게 된다.", 
      tags: "색다른 이야기 ∙ 블랙 코미디 ∙ 범죄 ∙ 한국 작품",
    },
    {
      title: "블레이드 러너",
      date: "11월 1일 공개",
      description: 
        "핵전쟁 이후 혼돈과 무질서로 휩싸인 2019년, 복제인간 ‘로이’를 포함한 ‘넥서스 6’이오프월드에서 반란을 일으킨 후 지구로 잠입한다. 은퇴한 블레이드 러너였던 '데커드'(해리슨 포드)는 지구에 잠입한 복제 인간들을 찾는 임무와 함께 강제로 복직하게 되고, 탐문 수사를 위해 찾아간 넥서스 6 제조사인 타이렐 사에서자신이 복제 인간임을 모르는 ‘레이첼’(숀 영)을 마주하게 된다.한편, 증거의 꼬리를 잡아 수사하던 도중 ‘데커드’는 ‘레이첼’ 덕분에 위기 속에서 목숨을 구원받게 되고, 복제 인간과의 마지막 전투를 앞두게 된다.", 
      tags: "색다른 이야기 ∙ 블랙 코미디 ∙ 범죄 ∙ 한국 작품",
    },
    {
      title: "블레이드 러너",
      date: "11월 1일 공개",
      description: 
        "핵전쟁 이후 혼돈과 무질서로 휩싸인 2019년, 복제인간 ‘로이’를 포함한 ‘넥서스 6’이오프월드에서 반란을 일으킨 후 지구로 잠입한다. 은퇴한 블레이드 러너였던 '데커드'(해리슨 포드)는 지구에 잠입한 복제 인간들을 찾는 임무와 함께 강제로 복직하게 되고, 탐문 수사를 위해 찾아간 넥서스 6 제조사인 타이렐 사에서자신이 복제 인간임을 모르는 ‘레이첼’(숀 영)을 마주하게 된다.한편, 증거의 꼬리를 잡아 수사하던 도중 ‘데커드’는 ‘레이첼’ 덕분에 위기 속에서 목숨을 구원받게 되고, 복제 인간과의 마지막 전투를 앞두게 된다.", 
      tags: "색다른 이야기 ∙ 블랙 코미디 ∙ 범죄 ∙ 한국 작품",
    },
  ]

  const NoticeBox = styled.TouchableOpacity`
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
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

  const Lists = ExpectedMovieArr.map((data ,key) => (<ExpectedList 
    key={key} 
    title={data.title}
    date={data.date}
    description={data.description}
    tags={data.tags}
    ></ExpectedList>));


  return(
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        stickyHeaderIndices={[0]}
      >
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
        {Lists}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ExpectedPage;
