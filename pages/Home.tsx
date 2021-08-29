import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Info from "../components/Info";
import { ModalAdd } from "../components/Modal/ModalAdd";
import Macros from "../components/Table";
import { FormData } from "../components/Foods/FoodAdd";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface HomeProps {}

export function Home({}: HomeProps) {
  const [addedFoods, setAddedFoods] = useState<any | undefined>([]);
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

    AsyncStorage.getItem("@added").then((value) => {
      try {
        if (value !== null) {
          // We have data!!
          const jsonGetValue = JSON.parse(value);
          setAddedFoods(jsonGetValue);
          console.log(jsonGetValue);
        }
      } catch (error) {
        console.log(error);
        // Error retrieving data
      }
    });
  }, []);

  function AddNewFood(food: FormData, qty: number) {
    try {
      AsyncStorage.getItem("@added").then((value: string | null) => {
        if (value && value.length) {
          const jsonGetValue = JSON.parse(value);
          // Check if the name is already in the storage

          AsyncStorage.setItem(
            "@added",
            JSON.stringify([...jsonGetValue, { food, qty }])
          );
          return { success: "Successfully added new food!" };
        } else {
          AsyncStorage.setItem("@added", JSON.stringify([{ food, qty }]));
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function DeleteFood(index: number) {}

  return (
    <View style={{ flex: 1 }}>
      <Info />
      <ScrollView>
        <Macros foods={addedFoods} />
      </ScrollView>
      <View style={{ position: "absolute", right: 50, bottom: 100 }}>
        <ModalAdd foods={availFoods} fnAddFood={AddNewFood} />
      </View>
    </View>
  );
}
