import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import api from "../utils/api";
import { NavProps, Photo } from "../utils/types";

type Props = NavProps;

const Details: React.FC<Props> = ({ navigation }) => {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const ID = navigation.getParam("itemId") as string;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/images/${ID}`);
        setPhoto(data);
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    })();
  }, []);

  return photo ? (
    <ScrollView style={styles.container}>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: photo?.url }} />
      </View>
      <Text style={styles.itemName}>{photo?.name}</Text>

      <Text style={{ marginVertical: 10, fontSize: 18 }}>Uploaded by:</Text>

      <Image style={styles.authorImage} source={{ uri: photo?.author.image }} />

      <Text style={styles.author}>
        Author: {`${photo?.author.firstname} ${photo?.author.lastname}`}
      </Text>
      <Text style={styles.author}>Email: {photo?.author.email}</Text>
    </ScrollView>
  ) : (
    <View style={styles.loading}>
      <AntDesign name="loading1" size={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 15,
    flex: 1,
  },
  imageContainer: {
    height: 320,
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  itemName: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 17,
  },
  authorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  author: {
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 17,
    fontStyle: "italic",
  },
  error: {
    textAlign: "center",
    color: "red",
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Details;
