import { createStackNavigator } from '@react-navigation/stack';
import { Component } from 'react';

import _index from '../Screens/_index';

const Stack = createStackNavigator();

export default class MainStack extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName='GettingStarted'>
                <Stack.Screen name="GettingStarted" component={_index.GettingStarted} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={_index.Home} options={{headerShown: false}}/>
            </Stack.Navigator>
        );
    }
}