import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Food } from "./Food";
import { FormData } from "./FoodAdd";

interface FoodsComponentProps {}

export function FoodsComponent({}: FoodsComponentProps) {
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("@foods");
      if (value !== null) {
        // We have data!!
        console.log(JSON.parse(value));
        setFoods(JSON.parse(value));
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  const [foods, setFoods] = useState<FormData[]>();
  useEffect(() => {
    _retrieveData();
  }, []);

  return (
    <View>
      {foods &&
        foods.map((food) => {
          return (
            // TODO: Make this props ...props
            <Food
              foodName={food.foodName}
              caloriesPP={food.caloriesPP}
              caloriesPG={food.caloriesPG}
              proteinPP={food.proteinPP}
              proteinPG={food.proteinPG}
            />
          );
        })}
    </View>
  );
}
