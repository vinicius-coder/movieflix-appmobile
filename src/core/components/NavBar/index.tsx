import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { doLogout, isAuthenticated } from '../../../services/authUser';
import Logout from '../Logout';

const NavBar: React.FC = () => {

    const [show, setShow] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    const navigation = useNavigation();
    const route = useRoute();

    function navigate(path: any) {

    }

    useEffect(() => {
        logged()
    }, [])

    async function logged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    function logout() {
        doLogout();
        navigation.navigate("Home");
    }

    return (

        <View
            style={styles.container}
        >
            {
                authenticated ? (<Logout />) : null
            }
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20
    },
    text: {},
})

export default NavBar;