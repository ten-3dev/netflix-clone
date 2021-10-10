import React, { Fragment } from "react";
import {View, Text, Image, TouchableOpacity } from "react-native";
import { Glasses, LOGO_2 } from "../../Assets";
import AnimatedColorView from 'react-native-animated-colors';
import {    
    Background,
    Logo,
    Profile,
    Glass,
    SubBox,
    Title
} from './style';

const HeaderHome = (props) => {
    return(
    <AnimatedColorView
        activeIndex={props.bgColor}
        colors={['"rgba(0,0,0,0.0)"', '"rgba(0,0,0,0.5)"']}
        duration={1000}
        loop={false}
    >
        <Background>
            <Logo source={LOGO_2}/>
            <SubBox>
                <TouchableOpacity>
                    <Glass source={Glasses}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Profile source={props.img}/>
                </TouchableOpacity>
            </SubBox>
        </Background>
    </AnimatedColorView>
    )
}

const HeaderExpected = (props) => {
    return(
        <Background style={{ backgroundColor: 'black'}}>
            <Title>공개 예정</Title>
            <SubBox>
                <TouchableOpacity>
                    <Glass source={Glasses}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Profile source={props.img}/>
                </TouchableOpacity>
            </SubBox>
        </Background>
    )
}

export {HeaderHome, HeaderExpected};
