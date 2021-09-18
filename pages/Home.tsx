import React, { useEffect, useState } from "react";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import Info from "../components/Info";
import { ModalAdd } from "../components/Modal/ModalAdd";
import Macros from "../components/Table";
import { FormData } from "../components/Foods/FoodAdd";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface TotalMacro {
  calories: number;
  protein: number;
  carbs: number;
  fiber: number;
}

interface HomeProps {}

function getTotalMacros(foods: any): TotalMacro {
  // CALCULATE EACH HERE
  let returnValue: TotalMacro = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fiber: 0,
  };

  const calculateValue = (value: string | undefined, qty: number): number =>
    parseInt(value ?? "0") * qty;

  foods.forEach(
    (added: { food: FormData; isPerPiece: boolean; qty: number }) => {
      const { food } = added;
      if (added.isPerPiece) {
        returnValue.calories =
          returnValue.calories + calculateValue(food.caloriesPP, added.qty);
        returnValue.protein =
          returnValue.protein + calculateValue(food.proteinPP, added.qty);
        returnValue.carbs =
          returnValue.carbs + calculateValue(food.carbsPP, added.qty);
        returnValue.fiber =
          returnValue.fiber + calculateValue(food.fiberPP, added.qty);
      } else {
        returnValue.calories =
          returnValue.calories + calculateValue(food.caloriesPG, added.qty);
        returnValue.protein =
          returnValue.protein + calculateValue(food.proteinPG, added.qty);
        returnValue.carbs =
          returnValue.carbs + calculateValue(food.carbsPG, added.qty);
        returnValue.fiber =
          returnValue.fiber + calculateValue(food.fiberPG, added.qty);
      }
    }
  );

  console.log("RETURN VALUE", returnValue);
  return returnValue;
}

export function Home({}: HomeProps) {
  const [totalMacro, setTotalMacro] = useState<TotalMacro>({
    calories: 0,
    protein: 0,
    carbs: 0,
    fiber: 0,
  });

  const [addedFoods, setAddedFoods] = useState<any | undefined>([]);
  const [availFoods, setAvailFoods] = useState<FormData[]>([]);
  useEffect(() => {
    // AsyncStorage.setItem("@foods", JSON.stringify([]));
    AsyncStorage.getItem("@foods").then((value) => {
      try {
        if (value !== null) {
          // We have data!!
          const jsonGetValue = JSON.parse(value) as FormData[];
          setAvailFoods(jsonGetValue);
        }
      } catch (error) {
        console.log(error);
        // Error retrieving data
      }
    });

    AsyncStorage.getItem("@added").then((value) => {
      try {
        console.log("JSON", value);
        if (value !== null) {
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

  function addNewFood(food: FormData, qty: number, isPerPiece: boolean) {
    try {
      AsyncStorage.getItem("@added").then((value: string | null) => {
        if (value && value.length) {
          const jsonGetValue = JSON.parse(value);
          // Check if the name is already in the storage

          AsyncStorage.setItem(
            "@added",
            JSON.stringify([...jsonGetValue, { food, qty, isPerPiece }])
          );
          setAddedFoods([...availFoods, { food, qty, isPerPiece }]);
        } else {
          AsyncStorage.setItem(
            "@added",
            JSON.stringify([{ food, qty, isPerPiece }])
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  function deleteFood(index: number) {
    try {
      const filteredArray = addedFoods!.filter((_: unknown, i: number) => {
        return i !== index;
      });

      setAddedFoods(filteredArray);
      AsyncStorage.setItem("@added", JSON.stringify(filteredArray));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          width: 90,
          alignSelf: "center",
          borderRadius: 50,
        }}
        onPress={() => {
          console.log("NEW DAY");
        }}
      >
        <Text
          style={{
            paddingHorizontal: 10,
            color: "green",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          new day
        </Text>
      </TouchableOpacity>
      <Info totalMacro={totalMacro!} />
      <ScrollView>
        <Macros foods={addedFoods} fnDelete={deleteFood} />
      </ScrollView>
      <View style={{ position: "absolute", right: 50, bottom: 100 }}>
        <ModalAdd foods={availFoods} fnAddFood={addNewFood} />
      </View>
    </View>
  );
}
