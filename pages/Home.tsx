import React, { useEffect, useState } from "react";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import Info from "../components/Info";
import { ModalAdd } from "../components/Modal/ModalAdd";
import Macros from "../components/Table";
import { FormData } from "../components/Foods/FoodAdd";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalComponent } from "../components/Modal/ModalComponent";
import { AsyncStorageGet, AsyncStorageSet } from "../utils/AsyncStorage";

export interface TotalMacro {
  calories: number;
  protein: number;
  carbs: number;
  fiber: number;
}

interface HomeProps {}

export function getTotalMacros(foods: any): TotalMacro {
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
    AsyncStorageGet("foods", setAvailFoods);
    AsyncStorageGet("added", (data: Object) => {
      setAddedFoods(data);
      setTotalMacro(getTotalMacros(data));
    });
  }, []);

  function addNewFood(food: FormData, qty: number, isPerPiece: boolean) {
    AsyncStorageSet("added", { food, qty, isPerPiece });
    setAddedFoods([...addedFoods, { food, qty, isPerPiece }]);
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
      <ModalComponent></ModalComponent>
      {/* <TouchableOpacity
        style={{
          width: 90,
          alignSelf: "center",
          borderRadius: 50,
        }}
        onPress={() => {
          try {
            AsyncStorage.setItem("@yda", JSON.stringify(setAddedFoods));
            AsyncStorage.setItem("@added", JSON.stringify([]));
            setAddedFoods([]);
          } catch (error) {
            console.log(error);
          }
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
      </TouchableOpacity> */}
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
