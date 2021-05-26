import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Title, ArrowContainer } from './styles';

import arrow from '../../assets/arrow.png';
import { RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
    children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <TouchableOpacity>
            <Container {...rest}>
                <Title>{children}</Title>
                <ArrowContainer>
                    <Image source={arrow} />
                </ArrowContainer>

            </Container>
        </TouchableOpacity >
    );
}

export default Button;