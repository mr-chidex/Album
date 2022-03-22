import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./src/screens/Home";

const navigation = createStackNavigator(
  {
    Images: Home,
  },
  {
    initialRouteName: "Images",
    defaultNavigationOptions: {
      title: "Cloudy",
    },
  }
);

export default createAppContainer(navigation);
