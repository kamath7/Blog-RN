import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Context } from "../store/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((blog) => blog.id === navigation.getParam("id"));
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  return (
    <View>
      <Text style={styles.label}>Edit Title </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Edit ContentContent </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title={"Edit and Save Blog Post"}
        onPress={() => {
          console.log(title, content);
        }}
      />
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 15,
  },
});
