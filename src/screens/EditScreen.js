import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../store/BlogContext";
import BlogForm from "../components/BlogForm";
const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam("id");
  const blogPost = state.find((blog) => blog.id === id);

  return (
    <BlogForm
      startVal={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, ()=>{
          navigation.pop()
        });
      }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
