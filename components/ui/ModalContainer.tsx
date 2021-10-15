import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

interface ModalContainerProps {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
}

export function ModalContainer({
  title,
  action,
  children,
}: ModalContainerProps) {
  return (
    <View style={tailwind(" items-center p-12 pt-40")}>
      <View style={tailwind("bg-white w-full p-6 rounded-lg items-center")}>
        <Text style={tailwind("text-gray-800 text-xl font-medium mt-4")}>
          {title}
        </Text>
        <Text style={tailwind("text-gray-600 text-center mt-2 w-56")}>
          Hello
        </Text>
        {children}
        <View
          style={tailwind(
            "bg-indigo-600 w-full py-2 items-center rounded-md mt-6"
          )}
        >
          <Text style={tailwind("text-white font-medium")}>Back Back</Text>
        </View>
      </View>
    </View>
  );
}
