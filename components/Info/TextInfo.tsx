import React from "react";
import { StyleSheet, Text } from "react-native";

interface TextInfoProps {
  name: string;
  value: number;
  maxValue: number;
}

export function TextInfo({ name, value, maxValue }: TextInfoProps) {
  return (
    <Text style={styles.textStyle}>
      {name}: {value} / {maxValue}
    </Text>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
  },
});
