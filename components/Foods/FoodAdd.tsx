import React from "react";
import {
  Text,
  Button,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForm, Controller } from "react-hook-form";

interface FoodAddProps {
  navigation: any;
}

export interface FormData {
  foodName: string;
  caloriesPP?: string;
  caloriesPG?: string;
  proteinPP?: string;
  proteinPG?: string;
  fatPP?: string;
  fatPG?: string;
  carbsPP?: string;
  carbsPG?: string;
  fiberPP?: string;
  fiberPG?: string;
}

const _storeData = async (data: FormData) => {
  data.foodName = data.foodName.toLowerCase();
  try {
    AsyncStorage.getItem("@foods").then((value: string | null) => {
      if (value && value.length) {
        const jsonGetValue = JSON.parse(value) as FormData[];
        // Check if the name is already in the storage
        const isExist = jsonGetValue.filter((food) => {
          return food.foodName === data.foodName;
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

const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem("@foods");
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};

export function FoodAdd({ navigation }: FoodAddProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data: any) => {
    // Map remove empty
    Object.keys(data).forEach((key: any) => {
      if (data[key] === "" || data[key] === "0") {
        delete data[key];
      }
    });

    if (data.foodName) {
      if (Object.keys(data.foodName).length <= 1) {
        // TODO: Return error
      } else {
        // Save here
        _storeData(data);
        _retrieveData();
        navigation.goBack();
      }
    }
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 20 }}>
        <View style={styles.container}>
          <Text style={styles.label}>Name</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                autoCapitalize="none"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Banana"
              />
            )}
            name="foodName"
            defaultValue=""
          />
          {errors.foodName && (
            <Text style={{ color: "red" }}>This is required.</Text>
          )}

          <View style={styles.inputContainer}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Calories per piece</Text>
              <Controller
                control={control}
                rules={{
                  maxLength: 3,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    keyboardType="numeric"
                    autoCapitalize="none"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="caloriesPP"
                defaultValue="0"
              />
            </View>

            <View style={{ flex: 1, marginLeft: 5 }}>
              <Text style={styles.label}>per 100G</Text>
              <Controller
                control={control}
                rules={{
                  maxLength: 3,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    keyboardType="numeric"
                    autoCapitalize="none"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="caloriesPG"
                defaultValue="0"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Protein per piece</Text>
              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    keyboardType="numeric"
                    autoCapitalize="none"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="proteinPP"
                defaultValue="0"
              />
            </View>

            <View style={{ flex: 1, marginLeft: 5 }}>
              <Text style={styles.label}>per 100G</Text>
              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    keyboardType="numeric"
                    autoCapitalize="none"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="proteinPG"
                defaultValue="0"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Fat per piece</Text>
              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    keyboardType="numeric"
                    autoCapitalize="none"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="fatPP"
                defaultValue="0"
              />
            </View>

            <View style={{ flex: 1, marginLeft: 5 }}>
              <Text style={styles.label}>per 100G</Text>
              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    keyboardType="numeric"
                    autoCapitalize="none"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="fatPG"
                defaultValue="0"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Carbs per piece</Text>
              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    keyboardType="numeric"
                    autoCapitalize="none"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="carbsPP"
                defaultValue="0"
              />
            </View>

            <View style={{ flex: 1, marginLeft: 5 }}>
              <Text style={styles.label}>per 100G</Text>
              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    keyboardType="numeric"
                    autoCapitalize="none"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="carbsPG"
                defaultValue="0"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Fiber per piece</Text>
              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    keyboardType="numeric"
                    autoCapitalize="none"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="fiberPP"
                defaultValue="0"
              />
            </View>

            <View style={{ flex: 1, marginLeft: 5 }}>
              <Text style={styles.label}>per 100G</Text>
              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    keyboardType="numeric"
                    autoCapitalize="none"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="fiberPG"
                defaultValue="0"
              />
            </View>
          </View>

          <View style={{ marginTop: 26 }}>
            <Button title="Save" onPress={onSubmit} />
            {/* <Button title="Delete" onPress={onSubmit} /> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  label: {
    marginTop: 20,
    fontSize: 18,
  },
  inputContainer: {
    display: "flex",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "100%",
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "gray",
    padding: 8,
    fontSize: 16,
  },
});
