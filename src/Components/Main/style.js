import styled from 'styled-components';

const ItemBox = styled.View`
    width: 110px;
    height: 145px;
    margin-top: 30px;
`;
const Item = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
`;
const ItemProfileImg = styled.Image`
    width: 100%; 
    height: 100%; 
    border-radius: 5px;
`;
const ItemAddImg = styled.Image`
    width: 70%;
    height: 70%;
    border-radius: 5px;
`;
const ItemText = styled.Text`
    color: white;
    text-align: center;
    font-size: 12px;
    font-family: 'NotoSansKRRegular';
`;

const Backgrounds = styled.View`
    width: 100%;
    height: 100%;
    background-color: #000;
    align-items: center;
    flex: 1;
`;
const TextBox = styled.View`
    width: 100%;
    height: 45px;
    margin-top: 67px;
`;
const Label = styled.Text`
    color: white;
    font-size: 18px;
    text-align: center;
    font-family: 'NotoSansKRRegular';
    margin-top: 7px;
`;
const UserBox = styled.View`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
export {
    ItemBox, 
    Item, 
    ItemProfileImg,
    ItemAddImg,
    ItemText,
    Backgrounds,
    TextBox,
    Label,
    UserBox
}