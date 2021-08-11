import React from "react";
import { Text, ScrollView, View } from "react-native";
import Info from "../components/Info";
import { ModalAdd } from "../components/Modal/ModalAdd";
import Macros from "../components/Table";

interface FoodsProps {}

export function Foods({}: FoodsProps) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 20 }}>
        <Macros />
      </ScrollView>
      <View style={{ position: "absolute", right: 50, bottom: 50 }}>
        <ModalAdd />
      </View>
    </View>
  );
}
