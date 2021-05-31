import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

export const api = axios.create({
    // baseURL: "https://viniciuscoder-movieflix.herokuapp.com",
    baseURL: "http://192.168.1.36:8080",
});

export const TOKEN = "Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==";

export async function userToken() {
    const token = await AsyncStorage.getItem("@token") ?? '{}';
    return token;
}

export async function userTokenId() {
    const userId = await AsyncStorage.getItem("@userId") ?? '{}';
    return userId;
}

//Movie Requests
export async function getMovies(genreId: number) {
    try {
        const authToken = await userToken();
        const res = await api.get(
            `/movies?page=0&linesPerPage=12&direction=ASC&orderBy=title&genreId=${genreId}`,
            {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }
        );
        return res;
    } catch (e) {
        throw e;
    }
}

export async function getMovieById(id: number) {
    try {
        const authToken = await userToken();
        const res = await api.get(`/movies/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }
        );
        return res.data;
    } catch (e) {
        return e.message;
    }
}

export async function addReview(movieId: number, text: string) {

    try {
        const authToken = await userToken();
        const userId = await userTokenId();

        const data = {
            movieId: movieId,
            text: text,
            user: {
                id: userId
            }
        }

        const res = await api.post(`/reviews`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }
        );
        return res.data;
    } catch (e) {
        return e.message;
    }

}

//Genre Requests
export async function getGenres() {
    try {
        const authToken = await userToken();

        const res = await api.get(`/genres`,
            {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }
        );
        return res.data;
    } catch (e) {
        return e;
    }
}