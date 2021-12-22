import React from "react";
import tailwind from "tailwind-rn";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MeasurementValue } from "../../interfaces";

interface FoodAddListItemProps {
  id: string;
  measurement: MeasurementValue;
}

export function FoodAddListItem() {
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
        <Text style={tailwind("text-lg font-medium")}>Per: 100G</Text>
      </View>
      <View style={tailwind("flex flex-row justify-between mt-2")}>
        <View style={tailwind("flex")}>
          <Text>Calories: 450</Text>
          <Text>Protein: 40</Text>
          <Text>Carbs: 300</Text>
        </View>
        <View>
          <Text>Fat: 40</Text>
          <Text>Fiber: 50</Text>
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
