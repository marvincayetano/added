import AsyncStorage from "@react-native-async-storage/async-storage";
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
import { TotalMacro } from "../../pages/Home";

interface ModalMacroProps {
  maxValues: TotalMacro;
  saveMacros: Function;
}

export function ModalMacro({ maxValues, saveMacros }: ModalMacroProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [calories, setCalories] = useState<number>(0);
  const [protein, setProtein] = useState<number>(0);
  const [carbs, setCarbs] = useState<number>(0);
  const [fiber, setFiber] = useState<number>(0);
  useEffect(() => {
    setCalories(maxValues.calories);
    setProtein(maxValues.protein);
    setCarbs(maxValues.carbs);
    setFiber(maxValues.fiber);
  }, []);

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
                setCalories(parseInt(text));
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
                setProtein(parseInt(text));
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
                setCarbs(parseInt(text));
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
                setFiber(parseInt(text));
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
              <Text style={styles.buttonTextStyle}>Close</Text>
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
        <Text style={{ ...styles.textStyle, padding: 5 }}>Edit Macros</Text>
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
    backgroundColor: "#111",
    padding: 5,
    borderRadius: 20,
    height: 35,
    elevation: 2,
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
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
