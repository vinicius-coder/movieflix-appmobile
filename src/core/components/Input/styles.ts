import styled from 'styled-components/native';
import { colors } from '../../../styles/global';

export const Container = styled.View`

    width: 334px;
    height: 60px;
    padding: 0 16px;
    background: ${colors.white};
    border-radius: 10px;
    margin-bottom: 35px;

`;

export const TextInput = styled.TextInput`

    flex: 1;
    color: ${colors.darkGray};
    font-size: 16px;

`;

