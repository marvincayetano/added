import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInfo } from "./TextInfo";
import { Bar } from "react-native-progress";
import { TotalMacro } from "../../pages/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalMacro } from "../Modal/ModalMacros";
import { AsyncStorageGet, AsyncStorageSet } from "../../utils/AsyncStorage";
import { useTheme } from "@react-navigation/native";

interface InfoProps {
  totalMacro: TotalMacro;
  isYDA?: boolean;
}

const calculateProgress = (total: number, max: number) => {
  const returnValue = total / max;
  if (isNaN(returnValue)) return 0;
  return returnValue;
};

export function Info({ totalMacro, isYDA = false }: InfoProps) {
  const [maxValues, setMaxValues] = useState<TotalMacro>({
    calories: 0,
    protein: 0,
    fiber: 0,
    carbs: 0,
  });
  useEffect(() => {
    // Set the total max values here from the asyncstorage
    AsyncStorageGet("maxvalues", setMaxValues);
  }, []);

  const { colors } = useTheme();

  function saveMacros(macros: TotalMacro) {
    setMaxValues(macros);
    // Save all the macros to the AsyncStorage
    AsyncStorageSet("maxvalues", macros);
  }

  return (
    <View>
      <View style={styles.containerHero}>
        <View
          style={{ flex: 1, flexDirection: "column", alignItems: "center" }}
        >
          <Text style={{ ...styles.macros, color: colors.text }}>Macros</Text>
          {!isYDA ? (
            <ModalMacro maxValues={maxValues} saveMacros={saveMacros} />
          ) : (
            <Text>Yesterday's total</Text>
          )}
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
          progress={calculateProgress(totalMacro.calories, maxValues.calories)}
          width={350}
          color="#fff"
        />

        <TextInfo
          name="Protein"
          value={totalMacro.protein}
          maxValue={maxValues.protein}
        />
        <Bar
          style={styles.bar}
          color="#fff"
          progress={calculateProgress(totalMacro.protein, maxValues.protein)}
          width={350}
        />

        <TextInfo
          name="Carb"
          value={totalMacro.carbs}
          maxValue={maxValues.carbs}
        />
        <Bar
          style={styles.bar}
          color="#fff"
          progress={calculateProgress(totalMacro.carbs, maxValues.carbs)}
          width={350}
        />

        <TextInfo
          name="Fiber"
          value={totalMacro.fiber}
          maxValue={maxValues.fiber}
        />
        <Bar
          style={styles.bar}
          color="#fff"
          progress={calculateProgress(totalMacro.fiber, maxValues.fiber)}
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
