import React from "react";
import tailwind from "tailwind-rn";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MeasurementValue } from "../../interfaces";

interface FoodAddListItemProps {
  measurement: MeasurementValue;
}

export function FoodAddListItem({ measurement }: FoodAddListItemProps) {
  return (
    <View
      style={tailwind(
        "flex rounded p-3 border-solid border-2 border-yellow-500 mb-4"
      )}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text style={tailwind("text-lg font-medium")}>
          Per: {measurement.measurement}
        </Text>
      </View>
      <View style={tailwind("flex flex-row justify-between mt-2")}>
        <View style={tailwind("flex")}>
          <Text>Calories: {measurement.calories}</Text>
          <Text>Protein: {measurement.protein}</Text>
          <Text>Carbs: {measurement.carbs}</Text>
        </View>
        <View>
          <Text>Fat: {measurement.fat}</Text>
          <Text>Fiber: {measurement.fiber}</Text>
        </View>
        <MaterialIcons
          name="delete-forever"
          size={24}
          color="red"
          style={tailwind("p-2")}
        />
      </View>
    </View>
  );
}
