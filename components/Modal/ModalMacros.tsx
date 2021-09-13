import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Alert,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { FormData } from "../Foods/FoodAdd";

interface ModalMacroProps {}

export function ModalMacro({}: ModalMacroProps) {
  const [modalVisible, setModalVisible] = useState(false);
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
              placeholder="qty"
              style={styles.modalText}
              keyboardType="number-pad"
              value="1"
              onChangeText={(text) => {
                // setQuantity(parseInt(text));
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
              placeholder="qty"
              style={styles.modalText}
              keyboardType="number-pad"
              value="1"
              onChangeText={(text) => {
                // setQuantity(parseInt(text));
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
              placeholder="qty"
              style={styles.modalText}
              keyboardType="number-pad"
              value="1"
              onChangeText={(text) => {
                // setQuantity(parseInt(text));
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
              placeholder="qty"
              style={styles.modalText}
              keyboardType="number-pad"
              value="1"
              onChangeText={(text) => {
                // setQuantity(parseInt(text));
              }}
            />

            <TouchableHighlight
              style={{
                ...styles.openButton,
                backgroundColor: "#40c87b",
                marginBottom: 20,
              }}
              onPress={() => {
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
    borderRadius: 20,
    padding: 5,
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
    margin: 5,
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
