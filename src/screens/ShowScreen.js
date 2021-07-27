import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Context } from "../store/BlogContext";
const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);
  const blogPost = state.find((blog) => blog.id === id);
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity onPress={()=> navigation.navigate('Edit')}>
          <EvilIcons name={"pencil"} size={30} />
        </TouchableOpacity>
      );
    },
  };
};
export default ShowScreen;

const styles = StyleSheet.create({});
