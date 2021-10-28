import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Alert,
  TouchableHighlight,
  TextInput,
} from "react-native";
import useIsNan from "../../hooks/useIsNan";
import { TotalMacro } from "../../pages/Home";

interface ModalMacroProps {
  maxValues: TotalMacro;
  saveMacros: Function;
}

export function ModalMacro({ maxValues, saveMacros }: ModalMacroProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const { calories: cl, protein: pn, carbs: cs, fiber: fr } = maxValues;

  const [calories, setCalories] = useIsNan(cl.toString());
  const [protein, setProtein] = useIsNan(pn.toString());
  const [carbs, setCarbs] = useIsNan(cs.toString());
  const [fiber, setFiber] = useIsNan(fr.toString());

  // setCalories("2");

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                ...styles.textTitle,
              }}
            >
              CALORIES
            </Text>
            <TextInput
              placeholder="1000"
              style={styles.modalText}
              keyboardType="number-pad"
              value={`${calories}`}
              onChangeText={(text) => {
                setCalories(text);
              }}
            />
            <Text
              style={{
                ...styles.textTitle,
              }}
            >
              PROTEIN
            </Text>
            <TextInput
              placeholder="1000"
              style={styles.modalText}
              keyboardType="number-pad"
              value={`${protein}`}
              onChangeText={(text) => {
                setProtein(text);
              }}
            />
            <Text
              style={{
                ...styles.textTitle,
              }}
            >
              CARBS
            </Text>
            <TextInput
              placeholder="1000"
              style={styles.modalText}
              keyboardType="number-pad"
              value={`${carbs}`}
              onChangeText={(text) => {
                setCarbs(text);
              }}
            />
            <Text
              style={{
                ...styles.textTitle,
              }}
            >
              FIBER
            </Text>
            <TextInput
              placeholder="1000"
              style={styles.modalText}
              keyboardType="number-pad"
              value={`${fiber}`}
              onChangeText={(text) => {
                setFiber(text);
              }}
            />

            <TouchableHighlight
              style={{
                ...styles.openButton,
                backgroundColor: "#40c87b",
                marginBottom: 20,
              }}
              onPress={() => {
                saveMacros({ calories, protein, carbs, fiber });
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Save</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={{ ...styles.textStyle, color: "gray" }}>Edit Macros</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    padding: 5,
    borderRadius: 20,
    height: 35,
    elevation: 2,
    zIndex: 10,
  },
  textTitle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
    padding: 5,
  },
  buttonTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 12,
    width: 250,
    fontSize: 25,
    padding: 5,
  },
});
