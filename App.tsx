import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./pages/Home";
import { Button, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Today"
          component={Home}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Foods"
                color="#111"
              />
            ),
            headerLeft: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="YDA"
                color="#111"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
