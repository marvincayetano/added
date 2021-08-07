import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInfo } from "./TextInfo";

interface InfoProps {}

export function Info({}: InfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerHero}>
        <View style={styles.humbView}>
          <Text>Humb</Text>
        </View>
        <View>
          <Text style={styles.macros}>Macros</Text>
          <Text style={styles.date}>August 8, 2021</Text>
        </View>
        <View style={styles.humbView} />
      </View>
      <View style={styles.containerInfo}>
        <TextInfo name="Calories" value={100} maxValue={1000} />
        <TextInfo name="Calories" value={100} maxValue={1000} />
        <TextInfo name="Calories" value={100} maxValue={1000} />
        <TextInfo name="Calories" value={100} maxValue={1000} />
        <TextInfo name="Calories" value={100} maxValue={1000} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  containerHero: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  humbView: {
    flex: 1,
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
});
