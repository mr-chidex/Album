import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <Feather style={styles.icon} name="search" size={30} />
      <TextInput style={styles.textInput} placeholder="Search..." />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#aaa",
    padding: 5,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    borderWidth: 0,
    fontSize: 18,
  },
  icon: {
    marginHorizontal: 5,
  },
});
