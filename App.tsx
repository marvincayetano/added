import React, { useState } from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./pages/Home";
import { Button } from "react-native";
import { Foods } from "./pages/Foods";
import { YDA } from "./pages/YDA";
import { FoodAdd } from "./components/Foods/FoodAdd";
import { AsyncStorageGet } from "./utils/AsyncStorage";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#fff",
    secondary: "#f29441",
  },
};

export default function App() {
  const [addedFoods, setAddedFoods] = useState(() => {
    return AsyncStorageGet("added");
  });

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Today"
          //   component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("Foods")}
                title="Foods"
                color={MyTheme.colors.secondary}
              />
            ),
            headerLeft: () => (
              <Button
                onPress={() => navigation.navigate("Yesterday")}
                title="YDA"
                color={MyTheme.colors.secondary}
              />
            ),
          })}
        >
          {(props) => (
            <Home
              {...props}
              addedFoods={addedFoods}
              setAddedFoods={setAddedFoods}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Yesterday" component={YDA} />
        <Stack.Screen
          name="Foods"
          component={Foods}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("AddFood")}
                title="New"
                color={MyTheme.colors.secondary}
              />
            ),
          })}
        />
        <Stack.Screen name="AddFood" component={FoodAdd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
