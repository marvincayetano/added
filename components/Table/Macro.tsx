import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

interface MacroProps {}

export function Macro({}: MacroProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>@Banana</Text>
      <Text style={styles.qty}>2pcs</Text>
      <View>
        <Button title="remove" onPress={() => console.log("asdfasdf")}>
          remove
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 80,
    padding: 15,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 6,
  },
  item: {
    fontSize: 18,
    fontWeight: "500",
  },
  qty: {
    fontSize: 18,
  },
});
