import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Info from "./components/Info";
import Nav from "./components/Nav";

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <Info />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
