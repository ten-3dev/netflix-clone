import React from 'react';
import {View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MoviePost, Check } from '../../Assets';


import {
    CosSafeAreaView,
    VideoView,
    VideoViewAndTitle,
    VideoViewAndSave,
    VideoViewSaveImg,
    VideoViewImgBox,
    VideoViewImg,
    CenterHeight,
    VideoViewTitleBox,
    VideoViewTitle
} from './style';

const SaveListPage = (props) => {
  return(
    <VideoView>
        <VideoViewAndTitle>
            <VideoViewImgBox>
                <VideoViewImg source={MoviePost}/>
            </VideoViewImgBox>
            <CenterHeight>
                <VideoViewTitleBox>
                    <VideoViewTitle font="bold">{props.title}</VideoViewTitle>
                    <VideoViewTitle>{props.des}</VideoViewTitle>
                </VideoViewTitleBox>
            </CenterHeight>
        </VideoViewAndTitle>
        <VideoViewAndSave>
            <CenterHeight>
                <TouchableOpacity>
                    <VideoViewSaveImg source={Check}/>
                </TouchableOpacity>
            </CenterHeight>
        </VideoViewAndSave>
    </VideoView>
  )
}

export default SaveListPage;
