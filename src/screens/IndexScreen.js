import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import {Context} from "../store/BlogContext";
const IndexScreen = () => {
  const {state, addBlogPost} = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
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
