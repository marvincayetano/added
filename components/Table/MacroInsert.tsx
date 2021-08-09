import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

interface MacroInsertProps {}

export function MacroInsert({}: MacroInsertProps) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => alert("Hello, world!")}
        style={styles.touch}
      >
        <Text style={{ fontSize: 20 }}>Add +</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    maxHeight: 80,
    padding: 15,
    marginHorizontal: 10,
  },
  touch: {
    padding: 5,
    borderRadius: 40,
  },
});
