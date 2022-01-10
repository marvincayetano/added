import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { ModalAdd } from "../components/Modal/ModalAdd";
import Macros from "../components/Table";
import { ModalComponent } from "../components/Modal/ModalComponent";

interface HomeProps {
  addedFoods: any | undefined;
  setAddedFoods: Function;
}

export function Home({ addedFoods, setAddedFoods }: HomeProps) {
  //   const [addedFoods, setAddedFoods] = useState<any | undefined>([]);
  const [availFoods, setAvailFoods] = useState<FormData[]>([]);

  useEffect(() => {}, []);

  function addNewFood(food: FormData, qty: number, isPerPiece: boolean) {}

  function deleteFood(index: number) {}

  function moveToYDA() {}

  return (
    <View style={{ flex: 1 }}>
      <ModalComponent action={moveToYDA} />
      {/* <Info totalMacro={totalMacro!} /> */}
      <ScrollView>
        <Macros foods={addedFoods} fnDelete={deleteFood} />
      </ScrollView>
      <View style={{ position: "absolute", right: 50, bottom: 100 }}>
        <ModalAdd foods={availFoods} fnAddFood={addNewFood} />
      </View>
    </View>
  );
}
