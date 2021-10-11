import React, { useState } from "react";
import { View } from "react-native";
import { ModalAddManualInput } from "./ModalAddManualInput";

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

  function submitForm() {}

  return (
    <View
      style={{
        width: 250,
        display: "flex",
      }}
    >
      <ModalAddManualInput label="Name(Optional)" fnSet={setCalories} />
      <ModalAddManualInput label="Calories" fnSet={setCalories} />
      <ModalAddManualInput label="Protein" fnSet={setProtein} />
      <ModalAddManualInput label="Fat" fnSet={setFat} />
      <ModalAddManualInput label="Carbs" fnSet={setCarbs} />
      <ModalAddManualInput label="Fiber" fnSet={setFiber} />
    </View>
  );
}
