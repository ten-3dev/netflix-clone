import styled from 'styled-components';

const BasicImg = styled.Image`
    width: 100%;
    height: 230px;
`;
const Description = styled.View`
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;
const MovieTitleBox = styled.View`
    flex: 3;
    height: 100%;
`;
const MovieTitleImg = styled.Image`
    height: 100%;
    width: 100px;
    margin-left: 20px;
`;
const NoticeAndInfo = styled.View`
    flex: 1.5;
    height: 100%;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
`;
const NoticeBox = styled.TouchableOpacity`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const InfoBox = styled.TouchableOpacity`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const NoticeAndInfoImg = styled.Image`
    width: 23px;
    height: 23px;
`;
const NoticeAndInfoText = styled.Text`
    color: #B6B6B6;
    font-family: 'NotoSansKRRegular';
    font-size: 8px;
`;
const DescriptionText = styled.View`
    padding-left: 10px;
    margin-bottom: 20px;
`;
const DataText = styled.Text`
    color: #B6B6B6;
    font-family: 'NotoSansKRRegular';
    font-size: 12px;
`;
const TitleText = styled.Text`
    font-family: 'NanumGothic-Bold';
    color: white;
    font-size: 18px;
    margin-top: 5px;
`;
const DescriptionSummary = styled.Text`
    color: #B6B6B6;
    font-family: 'NotoSansKRRegular';
    font-size: 13px;
`;
const TagsText = styled.Text`
    color: white;
    font-family: 'NotoSansKRRegular';
    font-size: 12px;
    margin-top: -10px;
`;

export {
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
}