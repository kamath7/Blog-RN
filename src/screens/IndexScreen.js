import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context } from "../store/BlogContext";
const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <Feather name="trash" style={styles.icon} />
            </View>
          );
        }}
      />
      <Button title="Add Blog" onPress={addBlogPost} />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title:{
    fontSize: 18,
  },
  icon:{
    fontSize: 24
  }
});
