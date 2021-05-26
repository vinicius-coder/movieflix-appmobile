import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { colors } from '../../../styles/global';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MovieProps } from '../../../@types/MovieProps';

import fonts from '../../../styles/fonts';
import { useNavigation } from '@react-navigation/native';

const MovieCard: React.FC<MovieProps> = ({ id, title, year, imgUrl, subTitle }) => {

    const navigation = useNavigation();

    function handleDetails(id: number) {
        navigation.navigate("MovieDetails", { id });
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imgUrl }}
                style={styles.imgMovie}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.year}>{year}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => { handleDetails(id) }}
                >
                    <Text style={styles.buttonText}>Ver Detalhes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        width: 374,
        height: 408,
        backgroundColor: colors.card,
        marginHorizontal: 20,
        marginTop: 18,
        borderRadius: 10
    },

    imgMovie: {
        marginTop: 20,
        width: "100%",
        height: 227,
    },

    content: {
        marginTop: 20,
        marginHorizontal: 15
    },

    title: {
        fontSize: 18,
        fontFamily: fonts.bold,
        color: colors.white
    },

    year: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: colors.primary,
        marginBottom: 5
    },
    subTitle: {
        fontFamily: fonts.text,
        fontSize: 16,
        color: colors.textColor,
    },

    button: {
        width: "100%",
        height: 40,
        marginTop: 10,
        borderColor: colors.borderGray,
        borderWidth: 1,
        borderRadius: 10,

        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        fontSize: 14,
        color: colors.white,
        fontFamily: fonts.bold,

    }

})

export default MovieCard;