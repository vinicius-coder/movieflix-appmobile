import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Home from '../pages/Home';

import { colors, text } from '../styles/global';
import Dashboard from '../pages/Admin/Dashboard';

const App = createStackNavigator();

const HeaderText: React.FC = () => <Text style={text.HeaderText}>Movieflix</Text>;

const Routes: React.FC = () => {

    return (
        <App.Navigator
            screenOptions={{
                headerTitle: 'Movieflix',
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                //headerLeft: () => <HeaderText />,
            }}
        >
            <App.Screen name="Home" component={Home} />
            <App.Screen name="Login" component={Login} />
            <App.Screen name="Dashboard" component={Dashboard} />

        </App.Navigator>
    );
}

export default Routes;