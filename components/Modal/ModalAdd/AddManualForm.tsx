import React, { useState } from "react";
import { View } from "react-native";
import { Input } from "../../ui/Input";

interface AddManualFormProps {
  fnAddFood: Function;
}

export function AddManualForm({ fnAddFood }: AddManualFormProps) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fiber, setFiber] = useState(0);

  function submitForm() {
    //   fnAddFood(currentFood, quantity, isPerPiece);
  }

  return (
    <View
      style={{
        display: "flex",
      }}
    >
      <Input label="Name(Optional)" fnSet={setName} />
      <Input label="Calories" fnSet={setCalories} />
      <Input label="Protein" fnSet={setProtein} />
      <Input label="Fat" fnSet={setFat} />
      <Input label="Carbs" fnSet={setCarbs} />
      <Input label="Fiber" fnSet={setFiber} />
    </View>
  );
}
