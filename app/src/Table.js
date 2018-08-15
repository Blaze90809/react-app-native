import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export default ({history}) => (
    <View style={styles.container}>
        <Toolbar style={{ top: 10 }} leftElement="menu" onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')} />
        <View style={{ flex: 0.3, justifyContent: 'center' }}>
            <Text>This is the table page.</Text>
            <Button title="change page" onPress={() => history.push("/")} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'salmon',
        top: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});