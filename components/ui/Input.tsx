import React from "react";
import { Text, TextInput, View } from "react-native";

interface InputProps {
  label: string;
  defaultValue?: string;
  fnSet: Function;
}

export function Input({ label, defaultValue = "", fnSet }: InputProps) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 8,
        overflow: "hidden",
        width: 280,
        borderRadius: 25,
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
        defaultValue={defaultValue}
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
