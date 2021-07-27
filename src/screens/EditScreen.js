import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../store/BlogContext";
import BlogForm from "../components/BlogForm";
const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((blog) => blog.id === navigation.getParam("id"));

  return (
    <BlogForm
      startVal={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {}}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
