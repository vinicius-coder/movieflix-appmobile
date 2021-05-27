import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, Alert, ScrollView, StyleSheet, TouchableOpacity, View, Modal, Dimensions } from 'react-native';
import { getGenres, getMovies } from '../../../services';
import { MovieProps } from '../../../@types/MovieProps';

import MovieCard from '../../../core/components/MovieCard';

import imgArrowDown from '../../../core/assets/arrowDown.png';

import { GenreProps } from '../../../@types/GenreProps';
import fonts from '../../../styles/fonts';
import { colors } from '../../../styles/global';

const Dashboard: React.FC = () => {

    const [loading, setLoading] = useState(false);

    const [genres, setGenres] = useState<GenreProps[]>([]);
    const [showGenres, setShowGenres] = useState(false);
    const [genre, setGenre] = useState('Escolha um genêro');

    const [movies, setMovies] = useState<MovieProps[]>([]);

    useEffect(() => {

        fillGenres();
        fillMovies();

    }, [])

    async function fillGenres() {
        try {
            const res = await getGenres();
            setGenres(res);
            console.log(genres);
        } catch (e) {
            Alert.alert("Erro ao buscar genêros", e.message);
        }
    }

    async function fillMovies() {
        try {
            setLoading(true)
            const res = await getMovies();
            setMovies(res.data.content);
            //console.log(movies);
            setLoading(false);
        } catch (e) {
            Alert.alert("Erro ao buscar filmes no servidor", e.message);
            console.log(e);
        }
    }


    return (

        <View style={styles.container}>

            {
                loading ? (
                    <ActivityIndicator size="large" />
                ) : (
                    <View>
                        <Modal
                            visible={showGenres}
                            animationType="fade"
                            transparent={true}
                            presentationStyle="overFullScreen"

                        >
                            <View style={styles.modalContainer}>
                                <ScrollView
                                    contentContainerStyle={styles.modalContent}
                                >
                                    {
                                        genres.map(
                                            cat => (
                                                <TouchableOpacity
                                                    style={styles.modalItem}
                                                    key={cat.id}
                                                    onPress={() => {
                                                        setGenre(cat.name);
                                                        setShowGenres(!showGenres);
                                                    }}
                                                >
                                                    <Text style={styles.modalText}>{cat.name}</Text>
                                                </TouchableOpacity>
                                            )
                                        )
                                    }
                                </ScrollView>
                            </View>
                        </Modal>

                        <View style={styles.genreContainer}>
                            <TouchableOpacity
                                onPress={() => setShowGenres(!showGenres)}
                                style={styles.genreInput}
                            >
                                <Text style={styles.genreText}>
                                    {
                                        genres === null
                                            ? "Escolha um genêro"
                                            : genre
                                    }
                                </Text>

                                <Image source={imgArrowDown} style={styles.imgArrowDown} />
                            </TouchableOpacity>
                        </View>

                        <ScrollView>
                            {movies.map(movie => (
                                <MovieCard
                                    key={movie.id}
                                    {...movie}
                                />
                            ))}
                        </ScrollView>
                    </View>

                )
            }

        </View>

    );
}


const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },

    modalContainer: {
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: colors.black30,
        alignItems: "center",
        justifyContent: "center",
    },
    modalContent: {
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50%",
        backgroundColor: colors.secondary,
        borderRadius: 20,
        padding: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalItem: {
        width: "100%",
        backgroundColor: colors.card,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },

    modalText: {
        color: colors.white,
        fontFamily: fonts.text,
        fontSize: 16,
    },

    genreContainer: {
        width: 374,
        minHeight: 82,
        borderRadius: 10,
        backgroundColor: colors.card,
        marginHorizontal: 20,
        marginTop: 20,
        padding: 20,

    },

    genreInput: {
        width: 333,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row'
    },

    genreText: {
        width: "85%",
        fontFamily: fonts.text,
        fontSize: 16,
        color: colors.white,
    },

    imgArrowDown: {
        width: 10,
        height: 10,
    }
})

export default Dashboard;