import styled from "styled-components";

const ListBox = styled.View`
    width: 100%;
    height: 230px;
    margin-top: 20px;
`;
const ListTitle = styled.View`
    width: 100%;
    height: 50px;
    padding-left: 10px;
    justify-content: center;
`;
const Title = styled.Text`
    font-size: 20px;
    color: white;
    align-items: center;
    font-family: 'NanumGothic-Bold';
`;
const ItemBox = styled.View`
    width: 100%;
    height: 170px;
    display: flex;
    flex-direction: row;
  `;
const Item = styled.TouchableOpacity`
    width: 125px;
    height: 170px;
    background-color: gray;
    border-radius: 5px;
    margin-right: 4px;
    margin-left: 4px;
`;

export {
    ListBox,
    ListTitle,
    Title,
    ItemBox,
    Item
}