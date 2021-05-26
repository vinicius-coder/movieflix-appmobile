import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
    baseURL: "https://viniciuscoder-movieflix.herokuapp.com",
});

export const TOKEN = "Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==";

export async function userToken() {
    const token = await AsyncStorage.getItem("@token");
    return token;
}

//Movie Requests

export async function getMovies() {
    try {
        const authToken = await userToken();
        const res = await api.get('/movies?page=0&linesPerPage=12&direction=ASC&orderBy=title',
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