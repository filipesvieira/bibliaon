import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getData() {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_key');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.log("🚀 ~ file: localStorage.js ~ line 9 ~ getData ~ error", error)
    }
}

export async function storeData(value) {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('@storage_key', jsonValue);
    } catch (error) {
        console.log("🚀 ~ file: localStorage.js ~ line 18 ~ storeData ~ error", error)
    }
}

export async function clearLocalStorage() {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log("🚀 ~ file: localStorage.js ~ line 28 ~ clearLocalStorage ~ error", error)
    }
};