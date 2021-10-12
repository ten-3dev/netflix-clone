import styled from "styled-components";

const VideoView = styled.TouchableOpacity`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    padding-left: 10px;
    margin-bottom: 10px;
`;
const VideoViewAndTitle = styled.View`
    flex: 6;
    height: 100%;
    display: flex;
    flex-direction: row;
`;
const VideoViewAndSave = styled.View`
    flex: 1;
    height: 100%;
    align-items: center;

`;
const VideoViewSaveImg = styled.Image`
    width: 20px;
    height: 20px;
`;
const VideoViewImgBox = styled.View`
    width: 130px;
    height: 100%;
`;
const VideoViewImg = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 3px;
`;
const CenterHeight = styled.View`
    height: 100%;
    justify-content: center;
`;
const VideoViewTitleBox = styled.View`
    height: 50px;
    padding-left: 10px;
`;
const VideoViewTitle = styled.Text`
    color: white;
    font-family: ${props => {
        if(props.font === 'bold'){
            return 'NanumGothic-Bold';
        }
        return 'NotoSansKRRegular';
    }}
    font-size: ${props => {
        if(props.font === 'bold'){
            return '14px';
        }
        return '13px';
    }}
    color: ${props => {
        if(props.font === 'bold'){
            return '#D8D8D8';
        }
        return '#B6B6B6';
    }}
`;

export {
    VideoView,
    VideoViewAndTitle,
    VideoViewAndSave,
    VideoViewSaveImg,
    VideoViewImgBox,
    VideoViewImg,
    CenterHeight,
    VideoViewTitleBox,
    VideoViewTitle
}