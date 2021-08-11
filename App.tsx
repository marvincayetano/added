import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./pages/Home";
import { Button } from "react-native";
import { Foods } from "./pages/Foods";
import { YDA } from "./pages/YDA";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Today"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("Foods")}
                title="Foods"
                color="#111"
              />
            ),
            headerLeft: () => (
              <Button
                onPress={() => navigation.navigate("Yesterday")}
                title="YDA"
                color="#111"
              />
            ),
          })}
        />
        <Stack.Screen name="Yesterday" component={YDA} />
        <Stack.Screen name="Foods" component={Foods} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
