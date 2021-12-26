import React, { useState } from "react";
import { Text, Button, View, StyleSheet, ScrollView } from "react-native";

import { Input } from "../ui/Input";
import { ModalComponent } from "../Modal/ModalComponent";
import { FoodData, MeasurementValue } from "../../interfaces";
import { FoodAddListItem } from "./FoodAddListItem";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import useIsNan from "../../hooks/useIsNan";

export const ASYNCSTORAGE_AVAILABLE_FOODS = "ASYNCSTORAGE_AVAILABLE_FOODS";

interface FoodAddProps {
  data: FoodData;
  isNew: boolean;
}

export function FoodAdd({ data, isNew = true }: FoodAddProps) {
  const { getItem, setItem, mergeItem, removeItem } = useAsyncStorage(
    ASYNCSTORAGE_AVAILABLE_FOODS
  );

  const [food, setFood] = useState<FoodData>(
    data ?? {
      name: "",
      description: "",
      values: [],
    }
  );

  const [isAdding, setIsAdding] = useState<boolean>(isNew);

  const [measurement, setMeasurement] = useState<string>("");
  const [calories, setCalories] = useIsNan();
  const [protein, setProtein] = useIsNan();
  const [carbs, setCarbs] = useIsNan();
  const [fat, setFat] = useIsNan();
  const [fiber, setFiber] = useIsNan();

  async function onSubmitNewFood() {
    // Get all the list
    const foodsResult = await getItem();

    if (foodsResult !== null) {
      const foodsJSON = JSON.parse(foodsResult);

      // Merge this food to the list if not exist
      await setItem(JSON.stringify({ ...foodsJSON, [food.name]: { food } }));
    }

    setIsAdding(false);
  }

  function onDeleteMeasurement() {}

  function onAddNewMeasurement() {
    const values = [
      ...food.values,
      { measurement, calories, protein, carbs, fat, fiber },
    ];

    setFood((prevState) => ({ ...prevState, values }));

    resetModalValues();
  }

  function resetModalValues() {
    setMeasurement("");
    setCalories("");
    setCarbs("");
    setProtein("");
    setFat("");
    setFiber("");
  }

  return (
    <View style={styles.container}>
      <>
        <Input
          label="Food name"
          fnSet={(text: string) => {
            setFood({ ...food, name: text });
          }}
        />

        <Input
          label="Description"
          fnSet={(text: string) => {
            setFood({ ...food, description: text });
          }}
        />

        <Button title="Save" onPress={onSubmitNewFood} />
      </>

      {!isAdding && (
        <>
          <View style={{ marginTop: 26 }}>
            <ModalComponent
              btnLabel={"Add New Measurement"}
              modalBtnName={"Add"}
              action={onAddNewMeasurement}
            >
              <Input label="Measurement" fnSet={setMeasurement} />
              <Input label="Calories" fnSet={setCalories} />
              <Input label="Protein" fnSet={setProtein} />
              <Input label="Carbs" fnSet={setCarbs} />
              <Input label="Fat" fnSet={setFat} />
              <Input label="Fiber" fnSet={setFiber} />
            </ModalComponent>
          </View>

          <View
            style={{
              display: "flex",
              width: "100%",
              paddingHorizontal: 50,
              marginTop: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "flex-start",
                paddingBottom: 10,
              }}
            >
              <Text>Measurements</Text>
            </View>
            <ScrollView>
              {food.values.map((value) => (
                <FoodAddListItem key={value.measurement} measurement={value} />
              ))}
            </ScrollView>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "white",
  },
  label: {
    marginTop: 20,
    fontSize: 18,
    color: "#fff",
  },
  inputContainer: {
    display: "flex",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "100%",
    flexDirection: "row",
  },
  input: {
    color: "#fff",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "gray",
    padding: 8,
    fontSize: 16,
  },
});
