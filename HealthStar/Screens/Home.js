import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../Styles/default';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Home</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('GettingStarted')}>
                    <Text>Getting Started</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
