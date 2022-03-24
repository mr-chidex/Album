import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

export type Photos = {
  _id: number;
  name: string;
  url: string;
};

export interface NavProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface Photo {
  _id: string;
  name: string;
  url: string;
  author: {
    email: string;
    firstname: string;
    lastname: string;
    image: string;
  };
  createdAt: Date;
}
