import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import SearchInput from "../components/SearchInput";
import useResults from "../components/useResults";
import ImageList from "../components/ImageList";
import { NavProps } from "../utils/types";

const Home: React.FC<NavProps> = ({ navigation }) => {
  const [term, setTerm] = useState<string>("");
  const { errorMessage, photos, total, loading } = useResults();

  const count = Math.ceil(total / 3);
  console.log(navigation);
  return (
    <View style={styles.container}>
      <SearchInput
        term={term}
        onChangeTerm={(newTerm: string) => setTerm(newTerm)}
        submitHandler={() => console.log("term was submitted")}
      />

      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      {loading && <Text style={styles.loading}>Loading...</Text>}

      {photos.length > 0 && (
        <ScrollView style={styles.list}>
          <ImageList photos={photos.slice(0, count)} title="Latest" />
          <ImageList
            photos={photos.slice(count, count * 2)}
            title="High Quality"
          />
          <ImageList
            photos={photos.slice(count * 2, count * 3)}
            title="Best RGB"
          />
        </ScrollView>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
    flex: 1,
  },
  error: {
    textAlign: "center",
    color: "red",
  },
  list: {
    marginVertical: 20,
  },
  loading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 55,
  },
});
