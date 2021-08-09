import React from "react";
import { StyleSheet, View } from "react-native";
import { Macro } from "./Macro";
import { MacroInsert } from "./MacroInsert";

interface MacrosProps {}

export function Macros({}: MacrosProps) {
  return (
    <View style={styles.container}>
      <MacroInsert />
      <Macro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
