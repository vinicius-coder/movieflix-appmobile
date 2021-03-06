import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Dashboard from '../pages/Admin/Dashboard';
import MovieDetails from '../pages/Admin/MovieDetails';

import { colors, text } from '../styles/global';
import NavBar from '../core/components/NavBar';

const App = createStackNavigator();

const HeaderText: React.FC = () => <Text style={text.HeaderText}>Movieflix</Text>;

const Routes: React.FC = () => {

    return (
        <App.Navigator
            screenOptions={{
                headerTitle: ' ',
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: colors.secondary,
                headerLeft: () => <HeaderText />,
                headerRight: () => <NavBar />
            }}
        >
            <App.Screen name="Home" component={Home} />
            <App.Screen name="Login" component={Login} />
            <App.Screen name="Dashboard" component={Dashboard} />
            <App.Screen name="MovieDetails" component={MovieDetails} />

        </App.Navigator>
    );
}

export default Routes;