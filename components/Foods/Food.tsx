import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { IFood } from "../../interfaces";

interface FoodProps {
  food: IFood;
}

export function Food({ food }: FoodProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.item}>{`${food.name}`}</Text>
        <Text style={styles.subItem}>{food.description}</Text>
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
