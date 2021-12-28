export interface IFood {
  name: string;
  description: string;
  values: IMeasurementValue[];
}

export interface IMeasurementValue {
  measurement: string;
  calories: string;
  protein: string;
  fat: string;
  carbs: string;
  fiber: string;
}
