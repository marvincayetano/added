import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { FormData } from "./FoodAdd";

export function Food({
  foodName,
  caloriesPP,
  caloriesPG,
  proteinPP,
  proteinPG,
  fatPP,
  fatPG,
  carbsPP,
  carbsPG,
  fiberPP,
  fiberPG,
}: FormData) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.item}>{`${foodName}`}</Text>
        <Text style={styles.subItem}>{`${caloriesPP} Calories per piece  ${
          caloriesPG ? `| ${caloriesPG} Calories per 100g` : ""
        } ${proteinPP ? `| ${proteinPP} Protein per piece` : ""}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 80,
    padding: 15,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 4,
    marginBottom: 8,
  },
  item: {
    fontSize: 18,
    fontWeight: "500",
  },
  subItem: {
    fontSize: 12,
  },
  qty: {
    fontSize: 18,
  },
});
