import React, { Fragment } from "react";
import {View, Text, Image, TouchableOpacity } from "react-native";
import styled from 'styled-components';
import { Glasses, LOGO_2 } from "../../Assets";

const Header = (props) => {

    const Background = styled.View`
        width: 100%;
        height: 60px;
        background-color: rgba(0,0,0,0.5);
        display: ${props.dis ? 'flex' : 'none'}
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        z-index: 1;
    `;
    const Logo = styled.Image`
        width: 45px;
        height: 45px;
    `;
    const Profile = styled.Image`
        width: 27px;
        height: 27px;
        border-radius: 5px;
        margin-right: 10px;
    `;
    const Glass = styled.Image`
        width: 30px;
        height: 30px;
        border-radius: 5px;
        margin-right: 18px;
    `;
    const SubBox = styled.View`
        display: flex;
        flex-direction: row;
    `;
    const Channel = styled.View`
        background-color: ${props.op ? 'rgba(0,0,0,0.0)' : 'rgba(0,0,0,0.5)'};
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
        font-size: 22px;
    `;
    return(
        <>
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
        <Channel>
            <TouchableOpacity>
                <ChannelText>TV 프로그램</ChannelText>
            </TouchableOpacity>
            <TouchableOpacity>
                <ChannelText>영화</ChannelText>
            </TouchableOpacity>
            <TouchableOpacity>
                <ChannelText>카테고리 ▾</ChannelText>
            </TouchableOpacity>
        </Channel>
        </>
    )
}

export default Header;
