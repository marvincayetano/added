import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInfo } from "./TextInfo";
import { Bar } from "react-native-progress";
import { TotalMacro } from "../../pages/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalMacro } from "../Modal/ModalMacros";

interface InfoProps {
  totalMacro: TotalMacro;
}

export function Info({ totalMacro }: InfoProps) {
  console.log("INFO WHAT", totalMacro);
  const [maxValues, setMaxValues] = useState<TotalMacro>({
    calories: 0,
    protein: 0,
    fiber: 0,
    carbs: 0,
  });
  useEffect(() => {
    // Set the total max values here from the asyncstorage
    try {
      AsyncStorage.getItem("@maxvalues").then((value: string | null) => {
        if (value) {
          const jsonGetValue = JSON.parse(value);
          // Check if the name is already in the storage
          if (jsonGetValue) {
            setMaxValues(jsonGetValue);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const saveMacros = (macros: TotalMacro) => {
    setMaxValues(macros);
    // Save all the macros to the AsyncStorage
    AsyncStorage.setItem("@maxvalues", JSON.stringify(macros));
  };

  console.log(totalMacro.calories / maxValues.calories);
  return (
    <View>
      <View style={styles.containerHero}>
        <View
          style={{ flex: 1, flexDirection: "column", alignItems: "center" }}
        >
          <Text style={styles.macros}>Macros</Text>
          <ModalMacro maxValues={maxValues} saveMacros={saveMacros} />
          {/* <Button title="new day" onPress={() => console.log("ASD")}></Button> */}
        </View>
      </View>
      <View style={styles.containerInfo}>
        <TextInfo
          name="Calories"
          value={totalMacro.calories}
          maxValue={maxValues.calories}
        />
        <Bar
          style={styles.bar}
          //   progress={totalMacro.calories / maxValues.calories}
          progress={0.03461538461538462}
          width={350}
        />

        <TextInfo
          name="Protein"
          value={totalMacro.protein}
          maxValue={maxValues.protein}
        />
        <Bar
          style={styles.bar}
          color="#d54d2f"
          //   progress={totalMacro.protein / maxValues.protein}
          width={350}
        />

        <TextInfo
          name="Carb"
          value={totalMacro.carbs}
          maxValue={maxValues.carbs}
        />
        <Bar
          style={styles.bar}
          color="#0e7930"
          //   progress={totalMacro.carbs / maxValues.carbs}
          width={350}
        />

        <TextInfo
          name="Fiber"
          value={totalMacro.fiber}
          maxValue={maxValues.fiber}
        />
        <Bar
          style={styles.bar}
          color="#f29441"
          //   progress={totalMacro.fiber / maxValues.fiber}
          width={350}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHero: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  macros: {
    fontSize: 36,
  },
  date: {
    fontSize: 16,
  },
  containerInfo: {
    padding: 20,
  },
  bar: {
    marginBottom: 8,
  },
});
