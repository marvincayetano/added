import React from "react";
import { View, TextInput, Text } from "react-native";

interface ModalAddManualInputProps {
  label: string;
  fnSet: Function;
}

export function ModalAddManualInput({
  label,
  fnSet,
}: ModalAddManualInputProps) {
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
        {label}
      </Text>
      <TextInput
        style={{
          borderBottomWidth: 1,
          width: 180,
          paddingLeft: 20,
          borderBottomColor: "gray",
        }}
        onChangeText={(text) => fnSet(text)}
      />
    </View>
  );
}
