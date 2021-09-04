import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Alert,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FormData } from "../Foods/FoodAdd";
import Autocomplete from "react-native-autocomplete-input";

interface ModalAddProps {
  foods: FormData[] | undefined;
  fnAddFood: Function;
}

export function ModalAdd({ foods, fnAddFood }: ModalAddProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [textFood, setTextFood] = useState("@");
  const [isPerPiece, setIsPerPiece] = useState(false);
  const [filteredFoods, setFilteredFoods] = useState<any>([]);
  const [currentFood, setCurrentFood] = useState<FormData | undefined>(
    undefined
  );
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    // Check if food is per piece or gram
    let foodName = "";
    if (textFood.charAt(0) === "@") {
      foodName = textFood.substr(1);
      setIsPerPiece(true);
    } else {
      setIsPerPiece(false);
    }

    if (foods) {
      setFilteredFoods(
        foods.filter((food: FormData) => {
          return food.foodName === foodName;
        })
      );
    }
  }, [textFood]);

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
            <Text style={{ ...styles.textStyle, color: "gray" }}>
              {isPerPiece ? "Per piece" : "Per 100G"}
            </Text>
            <View style={styles.modalText}>
              <Autocomplete
                data={filteredFoods ?? []}
                value={textFood}
                onChangeText={(text) => setTextFood(text.toLowerCase())}
                containerStyle={{ backgroundColor: "white" }}
                flatListProps={{
                  renderItem: ({ item }) => (
                    <TouchableOpacity
                      style={{ padding: 5 }}
                      onPress={() => {
                        setCurrentFood(item);
                        setTextFood(
                          isPerPiece ? "@" + item.foodName : item.foodName
                        );
                        setFilteredFoods([]);
                      }}
                    >
                      <Text>{item.foodName}</Text>
                    </TouchableOpacity>
                  ),
                }}
              />
            </View>
            <TextInput
              placeholder="qty"
              style={styles.modalText}
              keyboardType="number-pad"
              value="1"
              onChangeText={(text) => {
                setQuantity(parseInt(text));
              }}
            />
            <Text
              style={{
                ...styles.textStyle,
                paddingBottom: 20,
                margin: 5,
              }}
            >
              {currentFood && (
                <View
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "flex-start",
                    minWidth: "100%",
                    borderWidth: 1,
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      paddingBottom: 5,
                      fontWeight: "bold",
                    }}
                  >
                    {currentFood.foodName}
                  </Text>
                  <View
                    style={{
                      borderBottomWidth: 2,
                      borderStyle: "solid",
                      borderColor: "gray",
                      marginBottom: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                      }}
                    >
                      Nutrition Facts
                    </Text>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 4,
                      borderStyle: "solid",
                      borderColor: "gray",
                      marginBottom: 5,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>Serving size</Text>
                    <Text>{isPerPiece ? "per piece" : "100G"}</Text>
                  </View>
                  {isPerPiece ? (
                    <View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{ fontSize: 20, fontWeight: "400" }}>
                          Calories
                        </Text>
                        <Text style={{ fontSize: 20, fontWeight: "400" }}>
                          {currentFood.caloriesPP}
                        </Text>
                      </View>

                      {currentFood.proteinPP && (
                        <Text>Protein: {currentFood.proteinPP}</Text>
                      )}
                      {currentFood.carbsPP && (
                        <Text>Carbs: {currentFood.carbsPP}</Text>
                      )}
                      {currentFood.fiberPP && (
                        <Text>Fiber: {currentFood.fiberPP}</Text>
                      )}
                      {currentFood.fatPP && (
                        <Text>Fat: {currentFood.fatPP}</Text>
                      )}
                    </View>
                  ) : (
                    <View>
                      <Text>Calories: {currentFood.caloriesPG}</Text>
                      {currentFood.proteinPG && (
                        <Text>Protein: {currentFood.proteinPG}</Text>
                      )}
                      {currentFood.carbsPG && (
                        <Text>Carbs: {currentFood.carbsPG}</Text>
                      )}
                      {currentFood.fiberPG && (
                        <Text>Fiber: {currentFood.fiberPG}</Text>
                      )}
                      {currentFood.fatPG && (
                        <Text>Fat: {currentFood.fatPG}</Text>
                      )}
                    </View>
                  )}
                </View>
              )}
            </Text>

            <TouchableHighlight
              style={{
                ...styles.openButton,
                backgroundColor: "#40c87b",
                marginBottom: 20,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
                fnAddFood(currentFood, quantity, isPerPiece);
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
        <Text style={{ ...styles.textStyle, padding: 5 }}>Add</Text>
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
