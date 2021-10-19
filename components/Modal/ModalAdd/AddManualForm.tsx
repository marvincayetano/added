import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Input } from "../../ui/Input";

interface AddManualFormProps {
  setCurrentFood: Function;
  setQuantity: Function;
  setIsPerPiece: Function;
}

// TODO: Switch this to hooks in the future
export function AddManualForm({
  setCurrentFood,
  setQuantity,
  setIsPerPiece,
}: AddManualFormProps) {
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fiber, setFiber] = useState(0);
  useEffect(() => {
    setQuantity(1);
    setIsPerPiece(false);
  }, []);

  useEffect(() => {
    setCurrentFood({
      foodName,
      caloriesPP: calories,
      proteinPP: protein,
      fatPP: fat,
      carbsPP: carbs,
      fiberPP: fiber,
    });
  }, [foodName, calories, protein, fat, carbs, fiber]);

  return (
    <View
      style={{
        display: "flex",
      }}
    >
      <Input label="Name(Optional)" fnSet={setFoodName} />
      <Input label="Calories" fnSet={setCalories} />
      <Input label="Protein" fnSet={setProtein} />
      <Input label="Fat" fnSet={setFat} />
      <Input label="Carbs" fnSet={setCarbs} />
      <Input label="Fiber" fnSet={setFiber} />
    </View>
  );
}
