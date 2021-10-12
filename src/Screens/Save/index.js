import React from 'react';
import {Text, View, Image} from 'react-native';
import { HeaderSave } from '../../Components/Header';

import { SmartSave } from '../../Assets';

import {
  CosSafeAreaView,
  SmartView,
  SmartSaveView,
  RemoveView,
  CenterHeight,
  SmartSaveImg

} from './style';

const SavePage = ({route}) => {
  return(
    <CosSafeAreaView>
      <HeaderSave img={route.params.img}/>
      <SmartView>
        <SmartSaveView>
          <CenterHeight>
            <SmartSaveImg source={SmartSave}/>
          </CenterHeight>

        </SmartSaveView>
        <RemoveView>

        </RemoveView>
      </SmartView>
      
    </CosSafeAreaView>
  )
}

export default SavePage;