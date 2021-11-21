import React from "react";
import { StyleSheet, View } from "react-native";

export interface FoodData {
  name: string;
  description: string;
  values: [FoodValue];
}

export interface FoodValue {
  name: string;
  description: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
}

interface FoodAddNewProps {}

export function FoodAddNew({}: FoodAddNewProps) {
  return (
    <View>
      <View>asdf</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  label: {
    marginTop: 20,
    fontSize: 18,
    color: "#fff",
  },
  inputContainer: {
    display: "flex",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "100%",
    flexDirection: "row",
  },
  input: {
    color: "#fff",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "gray",
    padding: 8,
    fontSize: 16,
  },
});
