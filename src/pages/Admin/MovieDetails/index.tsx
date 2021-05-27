import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MovieProps } from '../../../@types/MovieProps';
import Review from '../../../core/components/Review';

import { getMovieById } from '../../../services';

import fonts from '../../../styles/fonts';
import { colors } from '../../../styles/global';

const MovieDetails: React.FC = ({
    route: {
        params: { id },
    },
}) => {

    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState<MovieProps>();
    const [review, setReview] = useState('');

    useEffect(() => {
        fillMovieById(id);
    }, [])

    async function handleReview(id: number, review: string) {
        console.log(review, id);
        // const res = await addReview(id, review);
    }

    async function fillMovieById(id: number) {
        try {
            setLoading(true);
            const res = await getMovieById(id);
            setMovie(res);

            setLoading(false);
        } catch (e) {
            Alert.alert("Erro ao buscar filme no servidor.", e);
        }
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            {
                loading ? (
                    <ActivityIndicator size="large" />
                ) : (
                    <View style={styles.container}>
                        <ScrollView>
                            <View style={styles.card}>
                                <Text style={styles.title}>{movie?.title}</Text>
                                <Image source={{ uri: movie?.imgUrl }} style={styles.imgMovie} />
                                <View style={styles.content}>
                                    <Text style={styles.year}>{movie?.year}</Text>
                                    <Text style={styles.subTitle}>Falta adicionar o subtitulo</Text>
                                    <Text style={styles.sinopseTitle}>Sinopse</Text>
                                    <ScrollView>
                                        <View style={styles.sinopseContainer}>
                                            <Text style={styles.sinopseText}>
                                                {movie?.synopsis}
                                            </Text>

                                        </View>
                                    </ScrollView>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <TextInput
                                    value={review}
                                    placeholder="Deixe sua avaliação aqui"
                                    placeholderTextColor={colors.textColor}
                                    style={styles.review}
                                    onChangeText={(e) => setReview(e)}
                                />
                                <TouchableOpacity
                                    onPress={() => { handleReview(id, review) }}
                                    style={styles.button}
                                >
                                    <Text style={styles.buttonText}>Salvar avaliação</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.card}>
                                <View style={styles.content}>
                                    <Text style={styles.reviewTitle}>Avaliações</Text>
                                    {
                                        movie?.reviews.map((review) => (
                                            <Review
                                                key={review.id}
                                                {...review}
                                            />
                                        ))
                                    }
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                )
            }
        </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        minHeight: 193,
        backgroundColor: colors.secondary,
        alignItems: "center",
    },

    card: {
        width: 374,
        minHeight: 193,
        marginTop: 15,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: colors.card,
    },

    title: {
        marginLeft: 25,
        marginVertical: 10,
        fontSize: 24,
        fontFamily: fonts.bold,
        color: colors.white,
    },
    imgMovie: {
        width: "100%",
        height: 227,
    },
    content: {
        width: "100%",
        padding: 20,
    },
    year: {
        fontSize: 24,
        fontFamily: fonts.bold,
        color: colors.primary,
    },
    subTitle: {
        fontSize: 18,
        fontFamily: fonts.text,
        color: colors.textColor,
    },
    sinopseTitle: {
        marginTop: 15,
        fontSize: 22,
        fontFamily: fonts.bold,
        color: colors.white,
    },

    sinopseContainer: {
        width: "100%",
        marginTop: 10,
        paddingVertical: 13,
        paddingHorizontal: 19,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.white,
    },
    sinopseText: {
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.textColor,
        textAlign: "justify",
    },

    review: {
        width: 334,
        height: 97,
        backgroundColor: colors.white,
        paddingLeft: 15,
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.textColor,
        paddingBottom: 50,
        borderRadius: 10,
        marginHorizontal: 21,
        marginTop: 15,
    },
    button: {
        width: 334,
        height: 50,
        borderRadius: 10,
        marginTop: 15,
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary
    },

    buttonText: {
        fontSize: 16,
        fontFamily: fonts.bold,
        textTransform: "uppercase",
    },

    //Review Container
    reviewTitle: {
        fontSize: 22,
        fontFamily: fonts.bold,
        color: colors.white,
    },

})

export default MovieDetails;