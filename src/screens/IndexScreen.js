import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import BlogContext from "../store/BlogContext";
const IndexScreen = () => {
  const {blogPosts, addBlogPost} = useContext(BlogContext);
  return (
    <View>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
      <Button
        title="Add Blog"
        onPress={addBlogPost}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
