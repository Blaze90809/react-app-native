import React from 'react';
import {View, Text, Button } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export default ({history}) => (
    <View>
        <Toolbar leftElement="menu" />
        <Text>This is the table page.</Text>
        <Button title="change page" onPress={() => history.push("/")}/>
    </View>
)