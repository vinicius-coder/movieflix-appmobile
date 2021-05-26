import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { colors } from '../../../styles/global';
import fonts from '../../../styles/fonts';


export const Container = styled(RectButton)`

    width: 335px;
    flex-direction: row;
    height: 60px;
    background: ${colors.primary};
    border-radius: 10px;
    align-items: center;
    justify-content: space-around;

`;

export const Title = styled.Text`

    color: ${colors.black};
    font-size: 18px;
    font-Family: ${fonts.bold};
    text-transform: uppercase;
    color: ${colors.black};
    margin-left: 50px;

`;

export const ArrowContainer = styled.View`

    width: 60px;
    height: 60px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: #26323850;
    margin-right: -40px;

`