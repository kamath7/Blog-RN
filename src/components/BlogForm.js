import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const BlogForm = ({ onSubmit, startVal }) => {
  const [title, setTitle] = useState(startVal.title);
  const [content, setContent] = useState(startVal.content);
  return (
    <View>
      <Text style={styles.label}>Title </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Content </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title={"Save Blog Post"}
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

BlogForm.defaultProps = {
  startVal: {
    title: '',
    content:''
  }
}
export default BlogForm;

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
