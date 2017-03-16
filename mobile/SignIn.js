import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {colorWhite, normalTextSize} from './StyleConst';

const SignIn = () => (
    <View style={styles.container}>
        <Text
            style={styles.welcome}
            onPress={() => Actions.signup()}>
            SignIn Screen
        </Text>
    </View>
);
SignIn.displayName = 'SignIn';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: normalTextSize,
        textAlign: 'center',
        margin: 10,
        color: colorWhite,
    },
});

export default SignIn;