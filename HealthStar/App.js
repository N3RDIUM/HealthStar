// HealthStar: com.subnerd.healthstar
import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import styles from './Styles/default';

export default class App extends Component {
    render() {
        return (
        <View>
            <SafeAreaView style={styles.androidSafeArea}/>
            <Text>Hello World!</Text>
        </View>
        );
    }
}
