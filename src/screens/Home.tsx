import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React, { useState } from "react";

import SearchInput from "../components/SearchInput";
import useResults from "../components/useResults";

const Home: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const { errorMessage, photos, total } = useResults();

  return (
    <View style={styles.container}>
      <SearchInput
        term={term}
        onChangeTerm={(newTerm: string) => setTerm(newTerm)}
        submitHandler={() => console.log("term was submitted")}
      />
      <Text>Home - Image Screen</Text>
      {errorMessage && <Text>{errorMessage}</Text>}
      <Text>{total}</Text>

      <FlatList
        data={photos}
        keyExtractor={(photo) => photo._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: item.url }} />
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 100,
  },
});
