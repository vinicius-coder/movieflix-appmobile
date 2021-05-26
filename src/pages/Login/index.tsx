import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import eyesOpened from '../../core/assets/eyes-opened.png';
import eyesClosed from '../../core/assets/eyes-closed.png';
import arrow from '../../core/assets/arrow.png';

import Input from '../../core/components/Input';
import Button from '../../core/components/Button';
import { login } from '../../services/authUser';
import { text, theme } from '../../styles/global';

const Login: React.FC = () => {

    const navigation = useNavigation();
    const [hidePassword, setHidePassword] = useState(true);
    const [userFetchData, setUserFetchData] = useState({});
    const [userInfo, setUserInfo] = useState({ username: "", password: "" });

    async function handleLogin() {
        const data = await login(userInfo);

        if (data) {
            setUserFetchData(data);
            navigation.navigate("Dashboard");
        }

    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flex: 1 }}
            >
                <View style={theme.authContainer}>
                    <Text style={text.loginTitle}>Login</Text>
                    <View style={theme.form}>
                        <Input
                            name="email"
                            placeholder="E-mail"
                            value={userInfo.username}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            onChangeText={(e) => {
                                const newUserInfo = { ...userInfo };
                                newUserInfo.username = e;
                                setUserInfo(newUserInfo);
                            }}
                        />
                        <Input
                            name="password"
                            value={userInfo.password}
                            autoCapitalize="none"
                            placeholder="Senha"
                            onChangeText={(e) => {
                                const newUserInfo = { ...userInfo };
                                newUserInfo.password = e;
                                setUserInfo(newUserInfo);
                            }}
                        />
                        <Button onPress={handleLogin}>
                            Fazer Login
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login;