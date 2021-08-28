import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Info from "../components/Info";
import { ModalAdd } from "../components/Modal/ModalAdd";
import Macros from "../components/Table";
import { FormData } from "../components/Foods/FoodAdd";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface HomeProps {}

export function Home({}: HomeProps) {
  const [foods, setFoods] = useState<FormData[] | undefined>();
  const [availFoods, setAvailFoods] = useState<FormData[] | undefined>([]);
  useEffect(() => {
    AsyncStorage.getItem("@foods").then((value) => {
      try {
        if (value !== null) {
          // We have data!!
          const jsonGetValue = JSON.parse(value) as FormData[];
          setAvailFoods(jsonGetValue);
          console.log("AVAIL", availFoods);
        }
      } catch (error) {
        console.log(error);
        // Error retrieving data
      }
    });
  }, []);

  async function AddNewFood(food: FormData, qty: number) {
    console.log("FOOD", food);
    console.log("QUANTITY", qty);
  }

  async function DeleteFood(index: number) {}

  return (
    <View style={{ flex: 1 }}>
      <Info />
      <ScrollView>
        <Macros foods={foods} />
      </ScrollView>
      <View style={{ position: "absolute", right: 50, bottom: 100 }}>
        <ModalAdd foods={availFoods} fnAddFood={AddNewFood} />
      </View>
    </View>
  );
}
