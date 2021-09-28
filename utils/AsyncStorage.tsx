import AsyncStorage from "@react-native-async-storage/async-storage";

export function AsyncStorageGet() {
  try {
    AsyncStorage.getItem("@added").then((value: string | null) => {
      if (value && value.length) {
        const jsonGetValue = JSON.parse(value);
        // Check if the name is already in the storage
        return jsonGetValue;
      }
    });
  } catch (error) {
    console.log(error);
  }
}

export function AsyncStorageSet(storageName: string, setValue: any) {
  try {
    AsyncStorage.getItem(`@${storageName}`).then((value: string | null) => {
      if (value && value.length) {
        const jsonGetValue = JSON.parse(value);
        // Check if the name is already in the storage

        AsyncStorage.setItem(
          `@${storageName}`,
          JSON.stringify([...jsonGetValue, setValue])
        );
      } else {
        AsyncStorage.setItem(`@${storageName}`, JSON.stringify([setValue]));
      }
    });
  } catch (error) {
    console.log(error);
  }
}
