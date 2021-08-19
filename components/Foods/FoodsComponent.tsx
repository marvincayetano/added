import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Swipeout from "react-native-swipeout";
import { Food } from "./Food";
import { FormData } from "./FoodAdd";

interface FoodsComponentProps {}

export function FoodsComponent({}: FoodsComponentProps) {
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("@foods");
      if (value !== null) {
        // We have data!!
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
  }, [foods]);

  const [index, setIndex] = useState({});

  const swipeoutBtns = [{}];

  return (
    <View>
      {foods &&
        foods.map((food, i) => {
          return (
            // TODO: Make this props ...props
            <Swipeout
              key={i}
              autoClose={true}
              backgroundColor={"white"}
              right={[
                {
                  text: "Delete",
                  backgroundColor: "red",
                  onPress: () => {
                    console.log(i);
                  },
                },
              ]}
            >
              <Food
                key={i}
                foodName={food.foodName}
                caloriesPP={food.caloriesPP}
                caloriesPG={food.caloriesPG}
                proteinPP={food.proteinPP}
                proteinPG={food.proteinPG}
              />
            </Swipeout>
          );
        })}
    </View>
  );
}
