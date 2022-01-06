import React, { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { View } from "react-native";
import Swipeout from "react-native-swipeout";
import { IFood } from "../../interfaces";
import { Food } from "./Food";
import { ASYNCSTORAGE_AVAILABLE_FOODS } from "./FoodAdd";

interface FoodsComponentProps {
  navigation: any;
}

export function FoodsComponent({ navigation }: FoodsComponentProps) {
  const [foods, setFoods] = useState<IFood[]>([]);
  const { getItem, setItem, removeItem } = useAsyncStorage(
    ASYNCSTORAGE_AVAILABLE_FOODS
  );

  useEffect(() => {
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
              right={[
                {
                  text: "Delete",
                  backgroundColor: "red",
                  onPress: () => {
                    const filteredArray = foods!.filter((i: IFood) => {
                      return food.id !== i.id;
                    });

                    console.log(filteredArray);
                  },
                },
              ]}
              left={[
                {
                  text: "Edit",
                  backgroundColor: "white",
                  color: "blue",
                  onPress: () => {
                    navigation.navigate("Add", { data: food, isNew: false });
                  },
                },
              ]}
            >
              <Food key={food.id} food={food} />
            </Swipeout>
          );
        })}
    </View>
  );
}
