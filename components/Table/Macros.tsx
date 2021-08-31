import React from "react";
import { StyleSheet, View } from "react-native";
import { FormData } from "../Foods/FoodAdd";
import { Macro } from "./Macro";

interface MacrosProps {
  foods: [{ food: FormData; qty: number }] | undefined | null;
}

export function Macros({ foods }: MacrosProps) {
  if (foods) {
    return (
      <View style={styles.container}>
        {foods?.map((food, index) => (
          <Macro food={food} index={index} />
        ))}
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    zIndex: -1,
  },
});
