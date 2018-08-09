import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';



export default ({ history }) => (
        // <View style={{ flex: 1}}>
            
        // </View>
        <View style={ styles.container }>
        <Toolbar leftElement="menu" />
            <Text>Hello</Text>
            <Text>This is the home page.</Text>
            <Button title="change page" onPress={() => history.push("/table")} />
        </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});