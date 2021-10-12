import React from 'react';
import { TouchableOpacity } from 'react-native';
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
  SaveVideoHeaderText

} from './style';

const SaveList = SaveArr.map((data ,key) => (<SaveListPage 
  title={data.title}
  des={data.des}
  key={key}
  ></SaveListPage>));

const SavePage = ({route}) => {
  return(
    <CosSafeAreaView>
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
    </CosSafeAreaView>
  )
}

export default SavePage;