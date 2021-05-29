import { api, TOKEN, userToken } from './index';
import queryString from 'query-string';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import jwtDecode from 'jwt-decode';

interface AuthProps {
    username: string;
    password: string;
}

export type Role = 'ROLE_MEMBER' | 'ROLE_VISITOR';

type AccessToken = {
    exp: number,
    user_name: string,
    authorities: Role[];
}

export async function login(userInfo: AuthProps) {

    try {
        const data = queryString.stringify({ ...userInfo, grant_type: "password" });

        const result = await api.post("oauth/token", data, {
            headers: {
                Authorization: TOKEN,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        const { access_token } = result.data;
        setAsyncKeys("@token", access_token);

        return result;
    } catch (e) {
        Alert.alert('Erro ao realizar login', "Email ou senha inválidos");
    }
}



async function setAsyncKeys(key: string, value: string) {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.warn(e)
    }
}

export async function isAuthenticated() {

    try {
        const token = await AsyncStorage.getItem("@token");
        return token ? true : false;
    } catch (e) {
        console.warn(e);
    }

};

export async function doLogout() {
    try {
        AsyncStorage.removeItem("@token");
    } catch (e) {
        console.warn(e);
    }
}


export const getAcessTokenDecoded = async () => {
    const token = await AsyncStorage.getItem("@token") ?? '{}';

    try {
        const tokenDecode = jwtDecode(token);
        return tokenDecode as AccessToken;
    } catch (error) {
        return {} as AccessToken;
    }
}

export const isAllowedByRole = async (routeRoles: Role[] = []) => {

    if (routeRoles.length === 0) {
        return true;
    }

    const { authorities } = await getAcessTokenDecoded();
    return routeRoles.some(role => authorities?.includes(role));
}