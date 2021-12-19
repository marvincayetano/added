import React from "react";
import { Text, Button, View, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../ui/Input";
import { ModalComponent } from "../Modal/ModalComponent";

interface FoodAddProps {
  navigation: any;
}

export interface FoodData {
  name: string;
  description: string;
  values: [FoodValue];
}

export interface FoodValue {
  name: string;
  description: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
}

const _storeData = async (data: FoodValue) => {
  data.name = data.name.toLowerCase();
  try {
    AsyncStorage.getItem("@foods").then((value: string | null) => {
      if (value && value.length) {
        const jsonGetValue = JSON.parse(value) as [FoodValue];
        // Check if the name is already in the storage
        const isExist = jsonGetValue.filter((food: FoodValue) => {
          return food.name === data.name;
        });

        if (isExist.length) {
          // Return error here
          return { error: "Food name already exists!" };
        }

        AsyncStorage.setItem("@foods", JSON.stringify([...jsonGetValue, data]));
        return { success: "Successfully added new food!" };
      } else {
        AsyncStorage.setItem("@foods", JSON.stringify([data]));
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export function FoodAdd({ navigation }: FoodAddProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodData>();

  const onSubmit = handleSubmit((data: any) => {
    // _storeData(data);
    // navigation.goBack();
  });

  const onAddNewMeasurement = () => {};

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 20 }}>
        <View style={styles.container}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <Input label="Food name" fnSet={onChange} />
            )}
            name="name"
            defaultValue=""
          />
          {errors.name && (
            <Text style={{ color: "red" }}>This is required.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <Input label="Description" fnSet={onChange} />
            )}
            name="description"
            defaultValue=""
          />
          {errors.name && (
            <Text style={{ color: "red" }}>This is required.</Text>
          )}

          <View style={{ marginTop: 26 }}>
            <ModalComponent
              btnLabel={"Add New Measurement"}
              action={onAddNewMeasurement}
            >
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange } }) => (
                  <Input label="Food name" fnSet={onChange} />
                )}
                name="name"
                defaultValue=""
              />
              {errors.name && (
                <Text style={{ color: "red" }}>This is required.</Text>
              )}
            </ModalComponent>
            <Button title="Save new food" onPress={onSubmit} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
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
