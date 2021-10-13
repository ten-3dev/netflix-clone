import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { HeaderSave } from '../../Components/Header';
import SaveListPage from '../../Components/SaveList';

import { SaveArr } from '../../Data/index';

import { SmartSave, Profile_setting } from '../../Assets';

import {
  CosSafeAreaView,
  SmartView,
  SmartSaveView,
  RemoveView,
  CenterHeight,
  SmartSaveImg,
  SmartSaveText,
  RemoveImage,
  SaveVideoView,
  SaveVideoHeaderView,
  SaveVideoHeaderProfileImg,
  SaveVideoHeaderText,
  AdView,
  AdViewText,
  AdViewBtnBox,
  AdViewBtn,
  AdViewBtnText,
  AdViewMoreBtnBox,
  AdViewMoreBtn,
  AdViewMoreBtnText

} from './style';

const SaveList = SaveArr.map((data ,key) => (<SaveListPage 
  title={data.title}
  des={data.des}
  key={key}
  ></SaveListPage>));

const SavePage = ({route}) => {
  return(
    <CosSafeAreaView>
      <ScrollView
        stickyHeaderIndices={[1]} 
        showsVerticalScrollIndicator={false}
      >
        <HeaderSave img={route.params.img}/>
        <SmartView>
          <TouchableOpacity>
            <SmartSaveView>
              <CenterHeight>
                <SmartSaveImg source={SmartSave}/>
              </CenterHeight>
              <CenterHeight>
                <SmartSaveText>스마트 저장</SmartSaveText>
              </CenterHeight>
            </SmartSaveView>
          </TouchableOpacity>
          <TouchableOpacity>
            <RemoveView>
              <CenterHeight>
                <RemoveImage source={Profile_setting}/>
              </CenterHeight>
            </RemoveView>
          </TouchableOpacity>
        </SmartView>
        <SaveVideoView>
          <SaveVideoHeaderView>
            <CenterHeight>
              <SaveVideoHeaderProfileImg source={route.params.img}/>
            </CenterHeight>
            <CenterHeight>
              <SaveVideoHeaderText>{route.params.title}</SaveVideoHeaderText>
            </CenterHeight>
          </SaveVideoHeaderView>
          {SaveList}
        </SaveVideoView>
        <AdView>
          <AdViewText type="title">'나만의 자동 저장' 기능</AdViewText>
          <AdViewText>언제나 휴대폰에서 시청할 콘텐츠가 있도록, 개인화된 영화와 TV</AdViewText>
          <AdViewText>프로그램을 알아서 저장해 드립니다.</AdViewText>
          <AdViewBtnBox>
            <AdViewBtn>
              <AdViewBtnText>설정하기</AdViewBtnText>
            </AdViewBtn>
          </AdViewBtnBox>
          <AdViewMoreBtnBox>
            <AdViewMoreBtn>
              <AdViewMoreBtnText>저장 가능한 콘텐츠 더 찾아보기</AdViewMoreBtnText>
            </AdViewMoreBtn>
          </AdViewMoreBtnBox>
        </AdView>
      </ScrollView>
    </CosSafeAreaView>
  )
}

export default SavePage;