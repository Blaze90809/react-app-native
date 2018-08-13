import React, {Component} from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

class NavBar extends Component {

    render() {
        return (

                <Toolbar leftElement="menu" />

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 0.3,
        padding: 20,
    },
});

module.exports = NavBar;