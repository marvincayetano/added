import React from "react";
import { Text, TextInput, View } from "react-native";

interface InputProps {}

export function Input({}: InputProps) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 8,
      }}
    >
      <Text
        style={{
          backgroundColor: "orange",
          padding: 8,
        }}
      >
        {/* {label} */}
      </Text>
      <TextInput
        style={{
          borderBottomWidth: 1,
          width: 180,
          paddingLeft: 20,
          borderBottomColor: "gray",
        }}
        // onChangeText={(text) => fnSet(text)}
      />
    </View>
  );
}
