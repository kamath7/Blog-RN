import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import { Provider } from "./src/store/BlogContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "List of Blogs",
    },
  }
);

const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
