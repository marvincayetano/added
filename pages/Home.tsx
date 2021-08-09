import React from "react";
import { View } from "react-native";
import Info from "../components/Info";
import Macros from "../components/Table";

interface HomeProps {}

export function Home({}: HomeProps) {
  return (
    <View>
      <Info />
      <Macros />
    </View>
  );
}
