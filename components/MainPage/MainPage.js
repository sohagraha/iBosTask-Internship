import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Applications from './Applications/Applications'

const MainPage = () => {
    return (
        <View style={styles.background}>
            <ProfileInfo />
            <Applications />
        </View>
    )
}

export default MainPage

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'red',
    },
})