import React from "react";
import { StyleSheet, View } from "react-native";
import { FormData } from "../Foods/FoodAdd";
import { Macro } from "./Macro";

interface MacrosProps {
  foods: FormData[] | undefined;
}

export function Macros({ foods }: MacrosProps) {
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
