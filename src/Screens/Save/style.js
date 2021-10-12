import { SafeAreaView } from "react-native";

import styled from "styled-components";

const CosSafeAreaView = styled(SafeAreaView)`
    background-color: black;
`;
const SmartView = styled.View`
    width: 100%;
    height: 40px;
    background-color: gray;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const SmartSaveView = styled.View`
    margin-left: 10px;
    width: 120px;
    height: 100%;
    background-color: red;
    display: flex;
    flex-direction: row;
`;
const RemoveView = styled.View`
    margin-right: 10px;
    width: 50px;
    height: 100%;
    background-color: yellow;
`;
const CenterHeight = styled.View`
    height: 100%;
    justify-content: center;
`;
const SmartSaveImg = styled.Image`
    width: 30px;
    height: 30px;
`;

export {
    CosSafeAreaView,
    SmartView,
    SmartSaveView,
    RemoveView,
    CenterHeight,
    SmartSaveImg,
    
}
