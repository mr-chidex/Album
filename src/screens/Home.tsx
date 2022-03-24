import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React, { useState } from "react";

import SearchInput from "../components/SearchInput";
import useResults from "../components/useResults";
import ImageList from "../components/ImageList";

const Home: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const { errorMessage, photos, total } = useResults();
  const count = Math.ceil(total / 3);

  return (
    <View style={styles.container}>
      <SearchInput
        term={term}
        onChangeTerm={(newTerm: string) => setTerm(newTerm)}
        submitHandler={() => console.log("term was submitted")}
      />

      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

      <View style={styles.list}>
        <ImageList photos={photos.slice(0, count)} title="Latest" />
        <ImageList
          photos={photos.slice(count, count * 2)}
          title="High Quality"
        />
        <ImageList
          photos={photos.slice(count * 2, count * 3)}
          title="Best RGB"
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  error: {
    textAlign: "center",
    color: "red",
  },
  list: {
    marginVertical: 20,
  },
});
