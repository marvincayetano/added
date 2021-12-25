import React, { useState } from "react";
import { Text, Button, View, StyleSheet, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { Input } from "../ui/Input";
import { ModalComponent } from "../Modal/ModalComponent";
import { FoodData } from "../../interfaces";
import { FoodAddListItem } from "./FoodAddListItem";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import tailwind from "tailwind-rn";

export const ASYNCSTORAGE_AVAILABLE_FOODS = "ASYNCSTORAGE_AVAILABLE_FOODS";

interface FoodAddProps {
  data: FoodData;
}

export function FoodAdd({ data }: FoodAddProps) {
  const [food, setFood] = useState<FoodData>(
    data ?? {
      name: "",
      description: "",
      values: [],
    }
  );

  const { getItem, setItem, mergeItem, removeItem } = useAsyncStorage(
    ASYNCSTORAGE_AVAILABLE_FOODS
  );

  const onSubmitNewFood = async () => {
    // TODO: Check if the same name already exists
    // TODO: Get all the list
    // TODO: Merge this food to the list if not exist
    await setItem(JSON.stringify(food));
  };

  const onDeleteFood = () => {};

  const onDeleteMeasurement = () => {};

  const onAddNewMeasurement = () => {};

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
      {data?.values && (
        <>
          <View style={{ marginTop: 26 }}>
            <ModalComponent
              btnLabel={"Add New Measurement"}
              modalBtnName={"Add"}
              action={onAddNewMeasurement}
            >
              {/* <Input label="Food name" fnSet={onChange} /> */}
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
              <FoodAddListItem />
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
