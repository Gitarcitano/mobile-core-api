import AsyncStorage from '@react-native-async-storage/async-storage';

const storageKeyPrefix = '@olistStore:';

export async function getStorageItem(itemKey: string): Promise<unknown> {
  try {
    const data = await AsyncStorage.getItem(`${storageKeyPrefix}${itemKey}`);
    const parsedItem = data ? JSON.parse(data) : undefined;

    return parsedItem;
  } catch (err) {
    throw new Error(err);
  }
}

export async function setStorageItem(itemKey: string, data: unknown) {
  try {
    await AsyncStorage.setItem(
      `${storageKeyPrefix}${itemKey}`,
      JSON.stringify(data)
    );
  } catch (err) {
    throw new Error(err);
  }
}