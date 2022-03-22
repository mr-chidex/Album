import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import SearchInput from "../components/SearchInput";

const Home: React.FC = () => {
  const [term, setTerm] = useState<string>("");

  return (
    <View style={styles.container}>
      <SearchInput
        term={term}
        onChangeTerm={(newTerm: string) => setTerm(newTerm)}
        submitHandler={() => console.log("term was submitted")}
      />
      <Text>Home - Image Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
