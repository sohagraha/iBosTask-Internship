import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Applications from './Applications/Applications'
import Form from './Form/Form'

const MainPage = () => {
    return (
        <View style={styles.background}>
            <ProfileInfo />
            <Applications />
            <Form />
        </View>
    )
}

export default MainPage

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'red',
    },
})