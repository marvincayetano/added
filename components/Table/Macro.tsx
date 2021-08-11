import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

interface MacroProps {}

export function Macro({}: MacroProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.item}>2 or 200g Banana</Text>
        <Text style={styles.subItem}>120 Calories / 9 Protein</Text>
      </View>
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
    backgroundColor: "#fff",
    borderRadius: 4,
    marginBottom: 8,
  },
  item: {
    fontSize: 18,
    fontWeight: "500",
  },
  subItem: {
    fontSize: 12,
  },
  qty: {
    fontSize: 18,
  },
});
