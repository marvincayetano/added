import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Info from "../components/Info";
import { ModalAdd } from "../components/Modal/ModalAdd";
import Macros from "../components/Table";
import { getTotalMacros, TotalMacro } from "./Home";

interface YDAProps {}

export function YDA({}: YDAProps) {
  const [addedFoods, setAddedFoods] = useState<any | undefined>([]);
  const [totalMacro, setTotalMacro] = useState<TotalMacro>({
    calories: 0,
    protein: 0,
    carbs: 0,
    fiber: 0,
  });

  useEffect(() => {
    AsyncStorage.getItem("@yda").then((value) => {
      try {
        if (value) {
          // We have data!!
          const jsonGetValue = JSON.parse(value);
          setAddedFoods(jsonGetValue);
          setTotalMacro(getTotalMacros(jsonGetValue));
        }
      } catch (error) {
        console.log(error);
        // Error retrieving data
      }
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Info totalMacro={totalMacro!} isYDA={true} />
      <ScrollView>
        <Macros foods={addedFoods} />
      </ScrollView>
    </View>
  );
}
