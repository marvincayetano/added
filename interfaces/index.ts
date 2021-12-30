export interface IFood {
  id: string;
  name: string;
  description: string;
  values: IMeasurementValue[];
}

export interface IMeasurementValue {
  id: string;
  measurement: string;
  calories: string;
  protein: string;
  fat: string;
  carbs: string;
  fiber: string;
}
