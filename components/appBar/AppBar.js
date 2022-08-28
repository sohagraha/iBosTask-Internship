/* eslint-disable eol-last */
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AppBar = () => {
    return (
        <View style={styles.appBar}>
            <View style={styles.appBarContent}>
                <Image source={require('../../assets/icons/menuIcon.png')} style={styles.appBarLogo} />
                <Text style={styles.appBarTitle}>
                    Employee Profile
                </Text>
            </View>
        </View>
    );
};

export default AppBar;

const styles = StyleSheet.create({
    appBar: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#299647',
        height: 56,
    },
    appBarContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    appBarLogo: {
        width: 18,
        height: 12,
        marginLeft: 19,
        marginRight: 19,
    },
    appBarTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        lineHeight: 24.2,
    },
});