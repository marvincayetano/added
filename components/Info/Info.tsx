import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInfo } from "./TextInfo";
import { Bar } from "react-native-progress";

interface InfoProps {}

export function Info({}: InfoProps) {
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
        <TextInfo name="Calories" value={100} maxValue={1000} />
        <Bar style={styles.bar} progress={0.3} width={300} />

        <TextInfo name="Protein" value={100} maxValue={1000} />
        <Bar style={styles.bar} color="#f29441" progress={0.3} width={300} />

        <TextInfo name="Carb" value={100} maxValue={1000} />
        <Bar style={styles.bar} color="#f29441" progress={0.3} width={300} />

        <TextInfo name="Fiber" value={100} maxValue={1000} />
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
