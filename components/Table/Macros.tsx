import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FormData } from "../Foods/FoodAdd";
import { Macro } from "./Macro";

interface MacrosProps {
  foods: [{ food: FormData; qty: number }] | undefined | null;
}

export function Macros({ foods }: MacrosProps) {
  return (
    <View style={styles.container}>
      {foods?.map((food, index) => {
        <Text>ADASD</Text>;
        // <Macro food={food} index={index} />;
      })}
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
