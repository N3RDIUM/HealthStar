import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { onAuthStateChanged } from '@firebase/auth';
import styles from '../Styles/default';
import localdb from '../backend/localdb';
import firebase from '../firebase_config';
import { Button } from 'react-native-paper';

export default class Home extends Component {
    componentDidMount(){
        onAuthStateChanged(localdb.auth, (user) => {
            if (user) {
                console.log(user);
                db = firebase.firestore();
                db.doc(db.collection(localdb.db, 'users').doc(user.uid), user.displayName).get().then((doc) => {
                    if (doc.exists) {
                        console.log(doc.data());
                    } else {
                        // create user
                        db.collection(localdb.db, 'users').doc(user.uid).set({
                            name: user.displayName,
                            email: user.email,
                            photoURL: user.photoURL,
                            uid: user.uid,
                            
                            created: firebase.firestore.Timestamp.now(),
                        }).then(() => {
                            console.log("User created");
                        }).catch((error) => {
                            console.log(error);
                        });
                    }
                });
            } else {
                this.props.navigation.navigate("GettingStarted");
            }
        });
    }
    render() {
        return (
            <View style={styles.Container}>
                <Text style={styles.GettingStartedTitle}>Home!</Text>
                <Button onPress={() => {
                    localdb.auth.signOut();
                }}>Sign Out</Button>
                <Button onPress={() => {
                    this.props.navigation.navigate("Profile");
                }}>Profile</Button>
            </View>
        );
    }
}
