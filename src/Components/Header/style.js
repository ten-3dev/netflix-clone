import styled from 'styled-components';

const Background = styled.View`
    width: 100%;
    height: 60px;
    display: flex;
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
const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin-left: 10px;
`;

export {
    Background,
    Logo,
    Profile,
    Glass,
    SubBox,
    Title
}