import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Swipeout from "react-native-swipeout";
import { AsyncStorageGet, AsyncStorageSet } from "../../utils/AsyncStorage";
import { Food } from "./Food";

interface FoodsComponentProps {}

export function FoodsComponent({}: FoodsComponentProps) {
  const [foods, setFoods] = useState<FormData[]>([]);
  useEffect(() => {
    AsyncStorageGet("foods", setFoods);
  }, [foods]);

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
                    const filteredArray = foods!.filter(
                      (_: unknown, index: number) => {
                        return i !== index;
                      }
                    );

                    AsyncStorageSet("foods", filteredArray);
                  },
                },
              ]}
              left={[
                {
                  text: "Edit",
                  backgroundColor: "white",
                  color: "blue",
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
