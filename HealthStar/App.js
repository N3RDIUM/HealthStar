// HealthStar: com.subnerd.healthstar
import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import MainStack from './navigation/MainNavigator';

export default class App extends Component {
    render() {
        return (
        <NavigationContainer>
            <Header/>
            <MainStack />
        </NavigationContainer>
        );
    } 
}