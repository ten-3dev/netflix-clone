import styled from "styled-components";

const SmartView = styled.View`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: black;
`;
const SmartSaveView = styled.View`
    width: 120px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-left: 10px;
`;
const RemoveView = styled.View`
    margin-right: 10px;
    width: 50px;
    height: 100%;
    align-items: center;
`;
const CenterHeight = styled.View`
    height: 100%;
    justify-content: center;
`;
const SmartSaveImg = styled.Image`
    width: 20px;
    height: 20px;
`;
const SmartSaveText = styled.Text`
    font-family: 'NanumGothic-Bold';
    font-size: 13px;
    color: #B6B6B6;
`;
const RemoveImage = styled.Image`
    width: 20px;
    height: 20px;
`;
const SaveVideoView = styled.View`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border: 1px solid rgba(216, 216, 216, .3);
    padding-bottom: 20px;
    margin-bottom: 20px;
`;
const SaveVideoHeaderView = styled.View`
    width: 100%;
    height: 40px;
    justify-content: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 10px;
`;
const SaveVideoHeaderProfileImg = styled.Image`
    width: 25px;
    height: 25px;
    border-radius: 5px;
    margin-right: 10px;
`;
const SaveVideoHeaderText = styled.Text`
    font-family: 'NanumGothic-Bold';
    font-size: 16px;
    color: white;
`;
const AdView = styled.View`
    width: 100%;
    margin-bottom: 30px;
`;
const AdViewText = styled.Text`
    padding-left: 10px;
    color: ${props => {
        if(props.type === 'title'){
            return 'white'
        }
        return '#B6B6B6'
    }};
    font-size: ${props => {
        if(props.type === 'title'){
            return '22px'
        }
        return '13px'
    }};
    font-family: ${props => {
        if(props.type === 'title'){
            return 'NanumGothic-Bold'
        }
        return 'NotoSansKRRegular'
    }};
    line-height: ${props => {
        if(props.type === 'title'){
            return '50px'
        }
        return '20px'
    }};
`;
const AdViewBtnBox = styled.View`
    width: 100%;
    height: 50px;
    margin-top: 40px;
    align-items: center;

`;
const AdViewBtn = styled.TouchableOpacity`
    width: 95%;
    height: 100%;
    background-color: #2E94FF;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
`;
const AdViewBtnText = styled.Text`
    font-size: 13px;
    color: white;
    font-family: 'NotoSansKRRegular';
`;
const AdViewMoreBtnBox = styled.View`
    width: 100%;
    height: 35px;
    margin-top: 40px;
    align-items: center;
`;
const AdViewMoreBtn = styled.TouchableOpacity`
    height: 100%;
    background-color: #2A2A2A;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
`;
const AdViewMoreBtnText = styled.Text`
    font-size: 14px;
    color: white;
    font-family: 'NotoSansKRRegular';
    line-height: 20px;
`;
export {
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
}
