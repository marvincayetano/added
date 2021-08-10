import React from "react";
import { StyleSheet, View } from "react-native";
import { Macro } from "./Macro";

interface MacrosProps {}

export function Macros({}: MacrosProps) {
  return (
    <View style={styles.container}>
      <Macro />
      <Macro />
      <Macro />
      <Macro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    zIndex: -1,
  },
});
