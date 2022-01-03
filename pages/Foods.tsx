import React from "react";
import { ScrollView, View } from "react-native";
import FoodsComponent from "../components/Foods";

interface FoodsProps {
  navigation: any;
}

export function Foods({ navigation }: FoodsProps) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <FoodsComponent navigation={navigation} />
      </ScrollView>
    </View>
  );
}
