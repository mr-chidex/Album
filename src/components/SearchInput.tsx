import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

interface Props {
  term: string;
  onChangeTerm(term: string): void;
  submitHandler: () => void;
}

const SearchInput: React.FC<Props> = ({
  term,
  onChangeTerm,
  submitHandler,
}) => {
  return (
    <View style={styles.container}>
      <Feather style={styles.icon} name="search" size={30} />
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search..."
        value={term}
        onChangeText={onChangeTerm}
        onEndEditing={submitHandler}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#bbb",
    padding: 8,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    borderWidth: 0,
    fontSize: 18,
    color: "#111",
    fontWeight: "bold",
  },
  icon: {
    marginHorizontal: 5,
    color: "#111",
  },
});
