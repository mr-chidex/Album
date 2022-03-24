import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Details from "./src/screens/Details";
import Home from "./src/screens/Home";

const navigation = createStackNavigator(
  {
    Images: Home,
    ImageDetails: Details,
  },
  {
    initialRouteName: "Images",
    defaultNavigationOptions: {
      title: "Album",
      headerTitleAlign: "center",
    },
  }
);

export default createAppContainer(navigation);
