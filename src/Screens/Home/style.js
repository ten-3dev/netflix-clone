import { SafeAreaView } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import styled from "styled-components";

const CosSafeAreaView = styled(SafeAreaView)`
    background-color: black;
    flex: 1;
`;
const MainPost = styled(LinearGradient)`
    width: 100%;
    height: 650px;
    margin-top: -135px;
    z-index: -1;
`;
const PostImg = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
`;
const Type = styled.Text`
    color: white;
    margin-top: -100px;
    font-size: 12px;
    text-align: center;
    font-family: 'NotoSansKRRegular';
`;
const SubFunc = styled.View`
    width: 100%;
    height: 65px;
`;

const Btn = styled.TouchableOpacity`
    width: 85px;
    height: 60px;
`;
const PlayBtn = styled.TouchableOpacity`
    width: 90px;
    height: 35px;
    background-color: white;
    border-radius: 3px;
`;
const SubText = styled.Text`
    color: #B6B6B6;
    font-family: 'NotoSansKRRegular';
    font-size: 10px;
`;
const PlayText = styled.Text`
    color: black;
    font-size: 15px;
    font-family: 'NanumGothic-Bold';
`;
const Channel = styled.View`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    z-index: 1;
`;
const ChannelText = styled.Text`
    color: white;
    font-size: 15px;
    font-family: 'NotoSansKRRegular';
`;
const CosView = styled.View`
    align-items: center;
    justify-content: center;
    height: 100%;
`;
const PlayBtnChilImg = styled.Image`
    width: 30px;
    height: 30px;
`;
const FlexBox = styled.View`
display: flex;
flex-direction: ${props => {
  if(props.flexD === 'row'){
    return 'row';
  }else if(props.flexD === 'column'){
    return 'column';
  }
}}
align-items: center;
justify-content: space-evenly;

`;
export {
    CosSafeAreaView,
    MainPost,
    PostImg,
    Type,
    SubFunc,
    Btn,
    PlayBtn,
    SubText,
    PlayText,
    Channel,
    ChannelText,
    CosView,
    PlayBtnChilImg,
    FlexBox
}