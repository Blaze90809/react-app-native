import React from 'react';
import {View, Text, Button } from 'react-native'


export default class HomePage extends React.Component {
    render() {
        return (
            <View>
                <Text>This is the home page.</Text>
                <Button title="change page" onPress={() => 5} /> 
            </View>
        )
    }
}