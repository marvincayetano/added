import React from "react";
import { ScrollView, View } from "react-native";
import Info from "../components/Info";
import { ModalAdd } from "../components/Modal/ModalAdd";
import Macros from "../components/Table";

interface YDAProps {}

export function YDA({}: YDAProps) {
  return (
    <View style={{ flex: 1 }}>
      <Info />
      <ScrollView>
        <Macros />
      </ScrollView>
      <View style={{ position: "absolute", right: 50, bottom: 50 }}>
        <ModalAdd />
      </View>
    </View>
  );
}
