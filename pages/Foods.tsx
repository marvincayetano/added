import React from "react";
import { ScrollView, View } from "react-native";
import FoodsComponent from "../components/Foods";

interface FoodsProps {}

export function Foods({}: FoodsProps) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <FoodsComponent />
      </ScrollView>
    </View>
  );
}
