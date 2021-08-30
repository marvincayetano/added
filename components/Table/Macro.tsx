import React from "react";
import { FormData } from "../Foods/FoodAdd";
import { StyleSheet, View, Text, Button } from "react-native";

interface MacroProps {
  food: { food: FormData; qty: number } | undefined;
  index: number;
}

export function Macro({ food, index }: MacroProps) {
  if (food) {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.item}>{`${food.qty}`}</Text>
          <Text style={styles.subItem}>{`${food.food.foodName}`}</Text>
        </View>
        <View>
          <Button
            title="remove"
            onPress={() => console.log("INDEX #", index)}
          />
        </View>
      </View>
    );
  } else {
    return null;
  }
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
