import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import drawImg from '../../core/assets/draw.png';
import arrowImg from '../../core/assets/arrow.png';

import { text, theme } from '../../styles/global';
import Button from '../../core/components/Button';

const Home: React.FC = () => {

    const navigation = useNavigation();

    return (

        <View style={theme.container}>

            <Image source={drawImg} style={theme.draw} />

            <Text style={text.homeTitle}>Avalie filmes</Text>
            <Text style={text.homeSubtitle}>Digo o que você achou do seu {"\n"} filme favorito</Text>

           <Button
            onPress={()=>navigation.navigate("Login")}
            >
                Fazer Login
            </Button>

        </View>

    );
}

export default Home;