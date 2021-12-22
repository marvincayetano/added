import React from "react";
import tailwind from "tailwind-rn";
import { Text, Button, View, StyleSheet, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { MaterialIcons } from "@expo/vector-icons";

import { Input } from "../ui/Input";
import { ModalComponent } from "../Modal/ModalComponent";
import { FoodData } from "../../interfaces";
import { FoodAddListItem } from "./FoodAddListItem";

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
