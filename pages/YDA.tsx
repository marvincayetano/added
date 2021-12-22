import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Info from "../components/Info";
import Macros from "../components/Table";
import { AsyncStorageGet } from "../utils/AsyncStorage";
import { getTotalMacros } from "./Home";

interface YDAProps {}

export function YDA({}: YDAProps) {
  const [addedFoods, setAddedFoods] = useState<any | undefined>([]);
  const [totalMacro, setTotalMacro] = useState<TotalMacro>({
    calories: 0,
    protein: 0,
    carbs: 0,
    fiber: 0,
  });

  useEffect(() => {
    AsyncStorageGet("yda", (data: Object) => {
      setAddedFoods(data);
      setTotalMacro(getTotalMacros(data));
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Info totalMacro={totalMacro!} isYDA={true} />
      <ScrollView>
        <Macros foods={addedFoods} />
      </ScrollView>
    </View>
  );
}
