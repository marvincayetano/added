import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { FormData } from "../../Foods/FoodAdd";
import Autocomplete from "react-native-autocomplete-input";

interface AddListFormProps {
  setCurrentFood: Function;
  currentFood: FormData | any | undefined;
  setIsPerPiece: Function;
  isPerPiece: boolean;
  foods: FormData[] | undefined;
  quantity: number;
  setQuantity: Function;
}

export function AddListForm({
  setCurrentFood,
  currentFood,
  setIsPerPiece,
  isPerPiece,
  foods,
  quantity,
  setQuantity,
}: AddListFormProps) {
  const [textFood, setTextFood] = useState("@");
  const [filteredFoods, setFilteredFoods] = useState<any>([]);

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
    <>
      {/* TODO: Move this to its own component */}
      <Text style={{ ...styles.textStyle, color: "gray" }}>
        {isPerPiece ? "Per piece" : "Per 100G"}
      </Text>
      <View style={styles.modalText}>
        <Autocomplete
          data={filteredFoods ?? []}
          value={textFood}
          onChangeText={(text) => setTextFood(text.toLowerCase())}
          containerStyle={{
            backgroundColor: "white",
          }}
          inputContainerStyle={{
            borderWidth: 0,
          }}
          flatListProps={{
            renderItem: ({ item }) => (
              <TouchableOpacity
                style={{ padding: 5 }}
                onPress={() => {
                  setCurrentFood(item);
                  setTextFood(isPerPiece ? "@" + item.foodName : item.foodName);
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
        style={{ ...styles.modalText, zIndex: -1 }}
        keyboardType="number-pad"
        value={`${quantity}`}
        onChangeText={(text) => {
          const value = parseInt(text);
          if (isNaN(value)) {
            setQuantity(1);
          } else {
            setQuantity(parseInt(text));
          }
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
                {currentFood.fatPP && <Text>Fat: {currentFood.fatPP}</Text>}
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
                {currentFood.fatPG && <Text>Fat: {currentFood.fatPG}</Text>}
              </View>
            )}
          </View>
        )}
      </Text>
    </>
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
