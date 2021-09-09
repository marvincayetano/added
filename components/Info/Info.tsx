import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInfo } from "./TextInfo";
import { Bar } from "react-native-progress";
import { TotalMacro } from "../../pages/Home";

interface InfoProps {
  totalMacro: TotalMacro;
}

export function Info({ totalMacro }: InfoProps) {
  return (
    <View>
      <View style={styles.containerHero}>
        <View>
          <Text style={styles.macros}>Macros</Text>
          <Button title="edit" onPress={() => console.log("ASD")}></Button>
          <Button title="new day" onPress={() => console.log("ASD")}></Button>
        </View>
      </View>
      <View style={styles.containerInfo}>
        <TextInfo name="Calories" value={totalMacro.calories} maxValue={1000} />
        <Bar style={styles.bar} progress={0.3} width={300} />

        <TextInfo name="Protein" value={totalMacro.protein} maxValue={1000} />
        <Bar style={styles.bar} color="#f29441" progress={0.3} width={300} />

        <TextInfo name="Carb" value={totalMacro.carbs} maxValue={1000} />
        <Bar style={styles.bar} color="#f29441" progress={0.3} width={300} />

        <TextInfo name="Fiber" value={totalMacro.fiber} maxValue={1000} />
        <Bar style={styles.bar} color="#f29441" progress={0.3} width={300} />
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
