import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import { HeaderExpected } from '../../Components/Header/index';

const ExpectedPage = ({route}) => {
  return(
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <HeaderExpected img={route.params.img}/>

    </SafeAreaView>
  )
}

export default ExpectedPage;
