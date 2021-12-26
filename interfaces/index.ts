export interface FoodData {
  name: string;
  description: string;
  values: MeasurementValue[];
}

export interface MeasurementValue {
  measurement: string;
  calories: string;
  protein: string;
  fat: string;
  carbs: string;
  fiber: string;
}
