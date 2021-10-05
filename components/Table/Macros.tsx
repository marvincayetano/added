import React from "react";
import { StyleSheet, View } from "react-native";
import { FormData } from "../Foods/FoodAdd";
import { Macro } from "./Macro";

interface MacrosProps {
  foods: [{ food: FormData; qty: number }] | undefined | null;
  fnDelete?: Function;
}

export function Macros({ foods, fnDelete }: MacrosProps) {
  if (foods) {
    console.log(foods);
    return (
      <View style={styles.container}>
        {foods?.map((food, index) => (
          // I know index shouldn't be used here I know I know
          <Macro key={index} food={food} index={index} fnDelete={fnDelete} />
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
