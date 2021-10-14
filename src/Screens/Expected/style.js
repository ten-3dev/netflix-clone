import styled from 'styled-components';

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

export {
    NoticeBox,
    ImgAndTextBox,
    CenterBox,
    BellAndArrowImg,
    NoticeText,
    ArrowImgBox
}