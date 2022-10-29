import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { onAuthStateChanged } from '@firebase/auth';
import styles from '../Styles/default';
import localdb from '../backend/localdb';
import firebase from '../firebase_config';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }
    componentDidMount(){
        onAuthStateChanged(localdb.auth, (user) => {
            if (user) {
                this.setState({
                    user: user,
                })
            } else {
                this.props.navigation.navigate("GettingStarted");
            }
        });
    }
    render() {
        return this.state.user? (
            <View style={styles.Container}>
                <Text style={styles.GettingStartedTitle}>Profile!</Text>
            </View>
        ): (
            <View style={styles.Container}>
                <Text style={styles.GettingStartedTitle}>Profile NoLog!</Text>
            </View>
        )
    }
}
