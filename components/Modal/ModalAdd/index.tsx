import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { FormData } from "../../Foods/FoodAdd";
import { AddManualForm } from "./AddManualForm";
import { ModalContainer } from "../../ui/ModalContainer";
import { AddListForm } from "./AddListForm";
import DismissKeyboardHOC from "../../hoc/DismissKeyboardHOC";

interface ModalAddProps {
  foods: FormData[] | undefined;
  fnAddFood: Function;
}

export function ModalAdd({ foods, fnAddFood }: ModalAddProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isPerPiece, setIsPerPiece] = useState(false);
  const [currentFood, setCurrentFood] = useState<FormData | any | undefined>(
    undefined
  );
  const [isManual, setIsManual] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);

  function submitForm() {
    setModalVisible(!modalVisible);
    fnAddFood(currentFood, quantity, isPerPiece);
    console.log(currentFood);
  }

  return (
    <DismissKeyboardHOC>
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
            <ModalContainer title="Add Food">
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderRadius: 8,
                  marginBottom: 50,
                }}
              >
                <View
                  style={{
                    width: 100,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setIsManual(false)}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 7,
                    }}
                  >
                    <Text
                      style={{
                        color: !isManual ? "green" : "blue",
                        fontSize: 18,
                        fontWeight: "500",
                        textDecorationLine: "underline",
                      }}
                    >
                      List
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setIsManual(true)}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 7,
                    }}
                  >
                    <Text
                      style={{
                        color: isManual ? "green" : "blue",
                        fontSize: 18,
                        fontWeight: "500",
                        textDecorationLine: "underline",
                      }}
                    >
                      Manual
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {isManual ? (
                <AddManualForm
                  setCurrentFood={setCurrentFood}
                  setQuantity={setQuantity}
                  setIsPerPiece={setIsPerPiece}
                />
              ) : (
                <AddListForm
                  setCurrentFood={setCurrentFood}
                  currentFood={currentFood}
                  setIsPerPiece={setIsPerPiece}
                  isPerPiece={isPerPiece}
                  foods={foods}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              )}

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
    </DismissKeyboardHOC>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
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
