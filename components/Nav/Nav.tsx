import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface NavProps {}

export function Nav({}: NavProps) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 40,
  },
});
