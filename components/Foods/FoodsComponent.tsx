import React from "react";
import { View } from "react-native";
import { Food } from "./Food";

interface FoodsComponentProps {}

export function FoodsComponent({}: FoodsComponentProps) {
  return (
    <View>
      <Food></Food>
      <Food></Food>
      <Food></Food>
      <Food></Food>
      <Food></Food>
      <Food></Food>
      <Food></Food>
      <Food></Food>
      <Food></Food>
    </View>
  );
}
