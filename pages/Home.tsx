import React from "react";
import { View } from "react-native";
import Info from "../components/Info";

interface HomeProps {}

export function Home({}: HomeProps) {
  return (
    <View>
      <Info></Info>
    </View>
  );
}
