import React from 'react';
import {View, Text, Button } from 'react-native';

export default ({history}) => (
    <View>
        <Text>This is the table page.</Text>
        <Button title="change page" onPress={() => history.push("/")}/>
    </View>
)