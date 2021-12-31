import React, { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { View } from "react-native";
import Swipeout from "react-native-swipeout";
import { IFood } from "../../interfaces";
import { Food } from "./Food";
import { ASYNCSTORAGE_AVAILABLE_FOODS } from "./FoodAdd";

interface FoodsComponentProps {}

export function FoodsComponent({}: FoodsComponentProps) {
  const [foods, setFoods] = useState<IFood[]>([]);
  const { getItem, setItem, removeItem } = useAsyncStorage(
    ASYNCSTORAGE_AVAILABLE_FOODS
  );

  useEffect(() => {
    // removeItem();
    getItem().then((result) => {
      if (result) {
        setFoods(Object.values(JSON.parse(result)));
      }
    });
  }, []);

  return (
    <View>
      {foods &&
        foods.map((obj: any) => {
          const food = obj["food"];

          return (
            // TODO: Make this props ...props
            <Swipeout
              key={food.id}
              autoClose={true}
              backgroundColor={"white"}
              // right={[
              //   {
              //     text: "Delete",
              //     backgroundColor: "red",
              //     onPress: () => {
              //       const filteredArray = foods!.filter(
              //         (_: unknown, index: number) => {
              //           return i !== index;
              //         }
              //       );

              //       AsyncStorageSet("foods", filteredArray);
              //     },
              //   },
              // ]}
              // left={[
              //   {
              //     text: "Edit",
              //     backgroundColor: "white",
              //     color: "blue",
              //     onPress: () => {
              //       console.log(i);
              //     },
              //   },
              // ]}
            >
              <Food key={food.id} food={food} />
            </Swipeout>
          );
        })}
    </View>
  );
}
