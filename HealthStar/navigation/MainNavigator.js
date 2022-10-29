import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from '@firebase/auth';
import localdb from '../backend/localdb';
import { Component } from 'react';

import _index from '../Screens/_index';

const Stack = createStackNavigator();

export default class MainStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialRouteName: 'GettingStarted',
        };
    }
    async componentDidMount() {
        onAuthStateChanged(localdb.auth, (user) => {
            if (user) {
                this.setState({initialRouteName: 'Home'});
            } else {
                this.setState({initialRouteName: 'GettingStarted'});
            }
        });
    }
    render() {
        return (
            <Stack.Navigator initialRouteName={this.state.initialRouteName}>
                <Stack.Screen name="GettingStarted" component={_index.GettingStarted} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={_index.Home} options={{headerShown: false}}/>
                <Stack.Screen name="Profile" component={_index.Profile} options={{headerShown: false}}/>
            </Stack.Navigator>
        );
    }
}