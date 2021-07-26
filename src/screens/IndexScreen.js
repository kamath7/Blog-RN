import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context } from "../store/BlogContext";
const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=> navigation.navigate('Show' , {
              id: item.id
            })}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
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
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "black",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
