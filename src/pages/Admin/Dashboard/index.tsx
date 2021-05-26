import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, View } from 'react-native';
import { MovieProps } from '../../../@types/MovieProps';

import MovieCard from '../../../core/components/MovieCard';
import { getMovies } from '../../../services';

import { colors } from '../../../styles/global';

const Dashboard: React.FC = () => {

    const [loading, setLoading] = useState(false);

    const [movies, setMovies] = useState<MovieProps[]>([]);

    useEffect(() => {

        fillMovies();

    }, [])

    async function fillMovies() {
        try {
            setLoading(true)
            const res = await getMovies();
            setMovies(res.data.content);
            console.log(movies);
            setLoading(false);
        } catch (e) {
            Alert.alert("Erro ao buscar filmes no servidor", e.message);
            console.log(e);
        }
    }

    return (

        <View style={styles.container}>
            <ScrollView>
                {
                    loading ? (
                        <ActivityIndicator size="large" />
                    ) :
                        (
                            movies.map(movie => (
                                <MovieCard
                                    key={movie.id}
                                    {...movie}
                                />
                        ))
                        )
                }
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.secondary,

        justifyContent: "center",
        alignItems: "center",
    },
})

export default Dashboard;