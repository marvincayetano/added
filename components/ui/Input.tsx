import React from "react";
import { Text, TextInput, View } from "react-native";

interface InputProps {
  label: string;
  fnSet: Function;
}

export function Input({ label, fnSet }: InputProps) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 8,
        overflow: "hidden",
        width: 280,
      }}
    >
      <Text
        style={{
          backgroundColor: "orange",
          padding: 8,
        }}
      >
        {label}
      </Text>
      <TextInput
        style={{
          borderBottomWidth: 1,
          width: "100%",
          paddingLeft: 20,
          borderBottomColor: "gray",
        }}
        onChangeText={(text) => fnSet(text)}
      />
    </View>
  );
}
