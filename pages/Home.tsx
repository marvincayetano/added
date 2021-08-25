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
  const [availFoods, setAvailFoods] = useState<FormData[] | undefined>();
  useEffect(() => {
    getFoods();
  }, []);

  const getFoods = async () => {
    try {
      const value: string | null = await AsyncStorage.getItem("@foods");

      if (value !== null) {
        // We have data!!
        const jsonGetValue = JSON.parse(value) as FormData[];
        setAvailFoods(jsonGetValue);
        console.log(availFoods);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  async function AddNewFood(food: FormData) {
    console.log(food);
  }

  async function DeleteFood(index: number) {}

  return (
    <View style={{ flex: 1 }}>
      <Info />
      <ScrollView>
        <Macros foods={foods} />
      </ScrollView>
      <View style={{ position: "absolute", right: 50, bottom: 50 }}>
        <ModalAdd foods={foods} fnAddFood={AddNewFood} />
      </View>
    </View>
  );
}
