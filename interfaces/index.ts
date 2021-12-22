export interface FoodData {
  name: string;
  description: string;
  values: [FoodValue];
}

export interface MeasurementValue {
  measurement: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
}
