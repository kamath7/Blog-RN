import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    return (
        <View>
            <Text>{id}</Text>
        </View>
    )
}

export default ShowScreen

const styles = StyleSheet.create({})
