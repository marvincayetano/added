import React, { useState } from "react";
import SegmentedControlTab from "react-native-segmented-control-tab";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Alert,
  TouchableHighlight,
} from "react-native";
import { AddManualForm } from "./AddManualForm";
import { ModalContainer } from "../../ui/ModalContainer";
import tailwind from "tailwind-rn";

interface ModalAddProps {
  foods: FormData[] | undefined;
  fnAddFood: Function;
}

const VIEW_SEARCH = "VIEW_SEARCH";
const VIEW_MANUAL = "VIEW_MANUAL";

export function ModalAdd({ foods, fnAddFood }: ModalAddProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isPerPiece, setIsPerPiece] = useState(false);
  const [currentFood, setCurrentFood] = useState<FormData | any | undefined>(
    undefined
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [view, setView] = useState(VIEW_SEARCH);

  function submitForm() {
    setModalVisible(!modalVisible);
    fnAddFood(currentFood, quantity, isPerPiece);
    console.log(currentFood);
  }

  function setCurrentView(index) {
    setView(index === 0 ? VIEW_SEARCH : VIEW_MANUAL);
  }

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
          <ModalContainer>
            <SegmentedControlTab
              values={["Search", "Manual"]}
              selectedIndex={view === VIEW_SEARCH ? 0 : 1}
              onTabPress={setCurrentView}
            />
            <View style={tailwind("my-4")}>
              {view === VIEW_MANUAL && (
                <AddManualForm
                  setCurrentFood={setCurrentFood}
                  setQuantity={setQuantity}
                  setIsPerPiece={setIsPerPiece}
                />
              )}
            </View>
            <TouchableHighlight
              style={{
                ...styles.openButton,
                backgroundColor: "#40c87b",
                marginBottom: 20,
              }}
              onPress={() => {
                submitForm();
              }}
            >
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#e34128" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </ModalContainer>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={{ ...styles.textStyle, padding: 5 }}>Add</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 22,
  },
  openButton: {
    backgroundColor: "#40c87b",
    borderRadius: 20,
    padding: 10,
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
    fontSize: 25,
    padding: 5,
  },
});
