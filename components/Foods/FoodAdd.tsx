import React from "react";
import { Text, Button, View, StyleSheet, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../ui/Input";
import { ModalComponent } from "../Modal/ModalComponent";

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

export function FoodAdd() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodData>();

  const onSubmitNewFood = handleSubmit((data: any) => {});

  const onAddNewMeasurement = () => {};

  return (
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
      {errors.name && <Text style={{ color: "red" }}>This is required.</Text>}

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
      {errors.name && <Text style={{ color: "red" }}>This is required.</Text>}
      <Button title="Save new food" onPress={onSubmitNewFood} />

      <View style={{ marginTop: 26 }}>
        <ModalComponent
          btnLabel={"Add New Measurement"}
          modalBtnName={"Add"}
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
      </View>

      <View
        style={{
          display: "flex",
          width: "100%",
          paddingHorizontal: 50,
          marginTop: 20,
        }}
      >
        <View style={{ display: "flex", justifyContent: "flex-start" }}>
          <Text>Measurements</Text>
        </View>
        <ScrollView>
          <View style={{ display: "flex" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "gray",
              }}
            >
              <View>
                <Text>Name</Text>
                <Text>Description</Text>
              </View>
              <Button
                title="Delete"
                onPress={() => console.log("sadfadjfaslkj")}
              />
            </View>
            <View>
              <Text>Calories</Text>
              <Text>Protein</Text>
              <Text>Carbs</Text>
              <Text>Fat</Text>
              <Text>Fiber</Text>
            </View>
          </View>
        </ScrollView>
      </View>
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
