import styled from 'styled-components';

const CenterView = styled.View`
    align-items: center; 
    justify-content: center;
`;

const IconImg = styled.Image`
    width: 20px;
    height: 20px;
`;
const IconText = styled.Text`
    font-size: 8px;
    font-family: 'NotoSansKRRegular';
    color: ${props => {
        if(props.color === 'white'){
            return 'white';
        }
        return 'gray';
    }}
`;
export {
    CenterView,
    IconImg,
    IconText
}