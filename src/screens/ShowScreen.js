import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Context} from '../store/BlogContext'
const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    const {state} = useContext(Context)
    const blogPost = state.find((blog)=> blog.id === id);
    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

export default ShowScreen

const styles = StyleSheet.create({})
