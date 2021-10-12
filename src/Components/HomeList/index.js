import React from "react";

import { ScrollView } from "react-native-gesture-handler";

import {
  ListBox,
  ListTitle,
  Title,
  ItemBox,
  Item
} from './style';

const List = (props) => {
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