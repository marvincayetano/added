import React, { useState } from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./pages/Home";
import { Button } from "react-native";
import { Foods } from "./pages/Foods";
import { YDA } from "./pages/YDA";
import { FoodAdd } from "./components/Foods/FoodAdd";
import { AsyncStorageGet } from "./utils/AsyncStorage";
import BarCodeScanner from "./components/ui/BarCodeScanner";

const Stack = createNativeStackNavigator();

// TODO BUGS
// DONE: Unresponsive Edit Macros
// DONE: NaN in ModalMacros
// DONE: After clicking new day, totalmacros are not resseting
// DONE: BarCode Scanner not showing anything

// Iphone input should be closed when clicking the outside part
// Modal should be closed when clicking the outside part by Using TouchableWithoutFeedback as View

// New Foods doesnt show / add to states right after adding it

// Better way to save the variables
// - Add a state here that holds everything
// - maybeeeeeeeee even the functions

// Better way to show added foods
// - How about we can get the value from the available foods but
//   we can still change it

const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#fff",
    secondary: "#f29441",
  },
};

interface AppData {
  addedFoods: [FormData] | null;
}

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
                onPress={() => navigation.navigate("Add")}
                title="New"
                color={MyTheme.colors.secondary}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Add"
          component={FoodAdd}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("Bar Code Scanner")}
                title="Scan"
                color={MyTheme.colors.secondary}
              />
            ),
          })}
        />
        <Stack.Screen name="Bar Code Scanner" component={BarCodeScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
