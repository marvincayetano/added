import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import Info from "../components/Info";
import { ModalAdd } from "../components/Modal/ModalAdd";
import Macros from "../components/Table";
import { FormData } from "../components/Foods/FoodAdd";

interface HomeProps {}

export function Home({}: HomeProps) {
  const [foods, setFoods] = useState<[FormData] | undefined>();

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
        <ModalAdd fnAddFood={AddNewFood} />
      </View>
    </View>
  );
}
