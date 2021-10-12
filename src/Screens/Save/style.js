import { SafeAreaView } from "react-native";

import styled from "styled-components";

const CosSafeAreaView = styled(SafeAreaView)`
    background-color: black;
    flex: 1;
`;
const SmartView = styled.View`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
export {
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
}
