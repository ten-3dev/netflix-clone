import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native-gesture-handler";

const List = (props) => {

    const ListBox = styled.View`
    width: 100%;
    height: 230px;
    margin-top: 20px;
  `;
  const ListTitle = styled.View`
    width: 100%;
    height: 50px;
    padding-left: 10px;
  `;
  const Title = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: white;
    align-items: center;
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
  
    return(
      <ListBox>
        <ListTitle>
          <Title>{props.title}</Title>
        </ListTitle>
        <ItemBox>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
          </ScrollView>
        </ItemBox>
      </ListBox>
    )
}

export default List;