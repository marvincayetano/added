import AsyncStorage from "@react-native-async-storage/async-storage";

export function AsyncStorageGet(
  storageName: string,
  fnAction?: Function | undefined
) {
  try {
    AsyncStorage.getItem(`@${storageName}`).then((value: string | null) => {
      if (value && value.length) {
        const jsonGetValue = JSON.parse(value);
        // Check if the name is already in the storage
        if (fnAction !== undefined) fnAction(jsonGetValue);
      }
    });
  } catch (error) {
    console.log(error);
    return null;
  }
}

export function AsyncStorageAdd(storageName: string, setValue: any) {
  try {
    AsyncStorage.getItem(`@${storageName}`).then((value: string | null) => {
      if (value && value.length) {
        const jsonGetValue = JSON.parse(value);
        // Check if the name is already in the storage

        // Problem is here when the setValue is an Array
        // We're basically adding array inside of array
        // Fixed: adding new FN
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
    return null;
  }
}

export function AsyncStorageSet(storageName: string, arrValue: any) {
  try {
    AsyncStorage.setItem(`@${storageName}`, JSON.stringify(arrValue));
  } catch (error) {
    console.log(error);
  }
}

export function AsyncStorageClear(storageName: string) {
  try {
    AsyncStorage.setItem(`@${storageName}`, JSON.stringify([]));
  } catch (error) {
    console.log(error);
    return null;
  }
}
