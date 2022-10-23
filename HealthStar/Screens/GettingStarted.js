import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../Styles/default';

export default class GettingStarted extends Component {
    render() {
        return (
            <View style={styles.GettingStartedContainer}>
                <Text style={styles.GettingStartedTitle}>Welcome to HealthStar!</Text>
                <Text style={styles.GettingStartedDescription}>HealthStar is your new health companion! This app is designed to encourage you to go healthy, and so that you'll never have to worry about showing your health data to the doctor again.</Text>
                <TouchableOpacity style={styles.GettingStartedButton} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text>Let's Go!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
