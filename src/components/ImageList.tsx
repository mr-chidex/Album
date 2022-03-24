import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Photos } from "../utils/types";
import ImageContent from "./ImageContent";

interface Props {
  title: string;
  photos: Photos[];
}

const ImageList: React.FC<Props> = ({ title, photos }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.list}>
        <FlatList
          data={photos}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(photo) => photo._id.toString()}
          renderItem={({ item }) => <ImageContent item={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  list: {
    marginVertical: 10,
  },
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

export default ImageList;
