import React , {useState} from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { HeaderExpected } from '../../Components/Header/index';
import ExpectedList from '../../Components/ExpectedList';

import { Bell, Right_Arrow } from '../../Assets';
import { ExpectedMovieArr } from '../../Data';

import {
  CosSafeAreaView,
  NoticeBox,
  ImgAndTextBox,
  CenterBox,
  BellAndArrowImg,
  NoticeText,
  ArrowImgBox
} from './style';


const ExpectedPage = ({route}) => {

  const [check, setCheck] = useState('');
  let style = false;

  const DataFunc = (data) => { 
    // console.log(data);
    setCheck(data);
    // console.log("check: "+ check);
  }
   
  const viewFocus = (e) => {
    let y = e.nativeEvent.contentOffset.y;
    let cos_check = String(check).split(',');
    // console.log("cos_check: "+cos_check[1]);
  }

  const Lists = ExpectedMovieArr.map((data ,key) => (<ExpectedList 
    key={key} 
    title={data.title}
    date={data.date}
    description={data.description}
    tags={data.tags}
    DataFunc={DataFunc}
    styleOp={style}
    ></ExpectedList>));

  return(
    <CosSafeAreaView>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        stickyHeaderIndices={[0]}
        onScroll={(e) => viewFocus(e)}
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
        <View>
        {Lists}
        </View>
      </ScrollView>
    </CosSafeAreaView>
  )
}

export default ExpectedPage;
