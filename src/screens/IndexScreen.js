import React , {useContext} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import BlogContext from '../store/BlogContext'
const IndexScreen = () => {
    const blogs = useContext(BlogContext)
    return (
        <View>
            <FlatList
                data={blogs}
                keyExtractor={(blogPost)=> blogPost}
                renderItem={({item})=>{
                    return(
                        <Text>{item.title}</Text>
                    )
                }}
            />
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({})
