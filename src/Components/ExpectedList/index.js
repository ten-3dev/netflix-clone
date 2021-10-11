import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Bell, Info, MoviePost, MovieTitle } from '../../Assets';

import {
    BasicImg,
    Description,
    MovieTitleBox,
    MovieTitleImg,
    NoticeAndInfo,
    NoticeBox,
    InfoBox,
    NoticeAndInfoImg,
    NoticeAndInfoText,
    DescriptionText,
    DataText,
    TitleText,
    DescriptionSummary,
    TagsText
} from './style';

let Yarr = [];

const ExpectedList = (props) => {

    const ReverseFunc = (data) => {
        props.DataFunc(data);
    }
    return(
        <View onLayout={(e) => {
            Yarr.push(e.nativeEvent.layout.y);
            ReverseFunc(Yarr);
        }}>
            <BasicImg source={MoviePost}/>
            <Description>
                <MovieTitleBox>
                    <MovieTitleImg source={MovieTitle} resizeMode='contain'/>
                </MovieTitleBox>
                <NoticeAndInfo>
                    <NoticeBox>
                        <NoticeAndInfoImg source={Bell}/>
                        <NoticeAndInfoText>알림 받기</NoticeAndInfoText>
                    </NoticeBox>
                    <InfoBox>
                        <NoticeAndInfoImg source={Info}/>
                        <NoticeAndInfoText>정보</NoticeAndInfoText>
                    </InfoBox>
                </NoticeAndInfo>
            </Description>
            <DescriptionText>
                <DataText>{props.date}</DataText>
                <TitleText>{props.title}</TitleText>
                <DescriptionSummary>
                    {props.description}
                </DescriptionSummary>
                <TagsText>{props.tags}</TagsText>
            </DescriptionText>
        </View>
  )
}

export default ExpectedList;
