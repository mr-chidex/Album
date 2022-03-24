import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Photos } from "../utils/types";

interface Props {
  title: string;
  photos: Photos;
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
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item.url }} />
              </View>
              <Text style={styles.itemName}>
                {item.name.substring(0, 15)}{" "}
                {item.name.length > 15 ? "..." : null}
              </Text>
            </View>
          )}
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
