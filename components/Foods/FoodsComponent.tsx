import React from "react";
import { View } from "react-native";
import { Food } from "./Food";
import { FoodAdd } from "./FoodAdd";

interface FoodsComponentProps {}

export function FoodsComponent({}: FoodsComponentProps) {
  return (
    <View>
      <FoodAdd></FoodAdd>
      {/* <Food></Food>
      <Food></Food>
      <Food></Food>
      <Food></Food>
      <Food></Food>
      <Food></Food>
      <Food></Food>
      <Food></Food>
      <Food></Food> */}
    </View>
  );
}
