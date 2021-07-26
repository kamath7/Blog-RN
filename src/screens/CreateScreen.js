import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <View>
      <Text>Title </Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} />
      <Text>Content </Text>
      <TextInput value={content} onChangeText={(text) => setContent(text)} />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
