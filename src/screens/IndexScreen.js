import React , {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BlogContext from '../store/BlogContext'
const IndexScreen = () => {
    const ctx = useContext(BlogContext)
    return (
        <View>
            <Text>Value from Context : {ctx}</Text>
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({})
