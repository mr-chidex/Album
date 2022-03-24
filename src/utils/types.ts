import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

export type Photos = {
  _id: number;
  name: string;
  url: string;
  author: string;
};

export interface NavProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
