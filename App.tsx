import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./pages/Home";
import { Button } from "react-native";
import { Foods } from "./pages/Foods";
import { YDA } from "./pages/YDA";
import { FoodAdd } from "./components/Foods/FoodAdd";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Today"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("Foods")}
                title="Foods"
              />
            ),
            headerLeft: () => (
              <Button
                onPress={() => navigation.navigate("Yesterday")}
                title="YDA"
              />
            ),
          })}
        />
        <Stack.Screen name="Yesterday" component={YDA} />
        <Stack.Screen
          name="Foods"
          component={Foods}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("AddFood")}
                title="New"
              />
            ),
          })}
        />
        <Stack.Screen name="AddFood" component={FoodAdd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
