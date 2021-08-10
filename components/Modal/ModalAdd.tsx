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
import { Picker } from "@react-native-picker/picker";

interface ModalAddProps {}

export function ModalAdd({}: ModalAddProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

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
            <TextInput placeholder="@banana/banana" style={styles.modalText} />
            <Picker
              selectedValue={selectedLanguage}
              style={{ height: 150, width: 250 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <TextInput placeholder="qty" style={styles.modalText}></TextInput>

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
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Cancel</Text>
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
        <Text style={styles.textStyle}>Show Modal</Text>
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
    backgroundColor: "#40c87b",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    zIndex: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 12,
    width: 250,
    fontSize: 30,
    padding: 5,
  },
});
