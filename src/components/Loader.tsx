import { View, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Loader: React.FC = () => {
  return (
    <View style={styles.loading}>
      <AntDesign name="loading1" size={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Loader;
