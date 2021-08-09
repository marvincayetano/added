import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface MacroProps {}

export function Macro({}: MacroProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text>ASDASD</Text>
      </View>
      <View>
        <Text>asdfasdf</Text>
      </View>
      <View>
        <Text>asdfasdf</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
