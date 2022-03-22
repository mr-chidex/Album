import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SearchInput from "../components/SearchInput";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <SearchInput />
      <Text>Home - Image Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
