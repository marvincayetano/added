import React, { ReactNode } from "react";
import { TouchableWithoutFeedback, Keyboard, View } from "react-native";

interface DismissKeyboardHOCProps {
  children: ReactNode;
}

export default function DismissKeyboardHOC({
  children,
}: DismissKeyboardHOCProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
}
