import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { doLogout } from '../../../services/authUser';
import fonts from '../../../styles/fonts';
import { colors } from '../../../styles/global';


const Logout: React.FC = () => {

    const navigation = useNavigation();
    
    function logout() {
        doLogout();
        navigation.navigate("Home");
    }

    return (

        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.6}
            onPress={logout}
        >
            <Text style={styles.text}>
                Sair
            </Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        width: 75,
        height: 26,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: colors.black,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        fontFamily: fonts.text,
        fontWeight: "700",
    },
})

export default Logout;