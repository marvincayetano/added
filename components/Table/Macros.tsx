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
          // I know index shouldn't be used here I know I know
          <Macro key={index} food={food} index={index} />
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
