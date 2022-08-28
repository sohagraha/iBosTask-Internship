/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SingleApplication = ({ application }) => {
    const { title, icon, color } = application;
    const icons = icon;
    return (
        <View style={styles.application}>
            <View style={{
                backgroundColor: color,
                width: 48,
                height: 48,
                borderRadius: 99,
            }}>
                <View style={styles.iconWrap}>
                    <Image source={icons} />
                </View>
            </View>

            <View style={styles.applicationTextContainer}>
                <Text style={styles.applicationText}>
                    {title}
                </Text>
            </View>
        </View>
    );
};

export default SingleApplication

const styles = StyleSheet.create({
    application: {
        display: 'flex',
        alignItems: 'center',
        width: '25%',
        marginTop: 12,
    },
    iconWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 11.67,
    },
    applicationText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.94,
        color: '#1D2939',
        textAlign: 'center',
        marginTop: 4,
    },
})