import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Photos } from "../utils/types";
import {
  NavigationParams,
  NavigationScreenProp,
  withNavigation,
} from "react-navigation";

interface Props {
  item: Photos;
  navigation: NavigationScreenProp<any, NavigationParams>;
}

const ImageContent: React.FC<Props> = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate("ImageDetails", {
          itemId: item._id,
        })
      }
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.url }} />
      </View>
      <Text style={styles.itemName}>
        {item.name.substring(0, 15)} {item.name.length > 15 ? "..." : null}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: 15,
  },
  imageContainer: {
    width: 200,
    height: 120,
    backgroundColor: "#ccc",
  },
  image: {
    width: "100%",
    height: 120,
  },
  itemName: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 17,
  },
});
export default withNavigation(ImageContent);
