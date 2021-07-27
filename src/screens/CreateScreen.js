import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../store/BlogContext";
import BlogForm from "../components/BlogForm";
const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return (
    <BlogForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, ()=>{navigation.navigate('Index')});
      }}
    />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
