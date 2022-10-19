import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import {
    AppContext,
    useAppState,
} from './hook/useAppState.js';
import {
    ThemeContext,
    useThemeState,
} from './hook/useThemeState.js';
import { getData, storeData, clearLocalStorage } from './hook/localStorage.js';
import Count from './src/components/countdown.js';
import DateChoise from './src/components/datechoise.js';
import WithSplashScreen from './src/components/withSplashScreen.js';
import moment from "moment";
import { LogBox } from "react-native";
import AppTheme from './hook/themes'

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const App = () => {
    const { stateApp, actionsApp } = useAppState();
    const { stateTheme, actionsTheme } = useThemeState();
    const [isAppReady, setIsAppReady] = useState(false);

    const fetchDataStorage = async () => {
        // var theme = 'light';
        // storeData(theme);
        //VERIFICA SE EXISTE DATACHOISE E DATACLICKED DENTRO DO LOCALSTORAGE
        let chosenTheme = await getData();
        if (chosenTheme) {
            console.log("VERDADE ", chosenTheme)
            actionsTheme.setTheme(AppTheme[chosenTheme]);
            // var clickedDate = moment(new Date()).format("YYYY-MM-DDTHH:mm:ss");
            // var a = moment(clickedDate);
            // var chosenDateStorage = moment(chosenTheme.chosenTheme).format("YYYY-MM-DDTHH:mm:ss");
            // var b = moment(chosenDateStorage);
            // var countSeconds = b.diff(a, 'seconds');
            // actionsApp.setCount(countSeconds);
            // //MANDAR PARA A TELA COUNT COM AS INFOS DATACHOISE E DATACLICKED
            // await actionsApp.setShowCount(!stateApp.showCount);
            // await actionsApp.setShowDateChoise(!stateApp.showDateChoise);
            await setIsAppReady(true);
        } else {
            await setIsAppReady(true);
        }
    }

    useEffect(() => {
        fetchDataStorage();
    }, []);

    return (
        <ThemeContext.Provider value={{ stateTheme, actionsTheme }}>
            <WithSplashScreen isAppReady={isAppReady}>
                <AppContext.Provider value={{ stateApp, actionsApp }}>
                    <SafeAreaView style={stateTheme.containerSafeArea}>
                        {stateApp.showDateChoise ? <DateChoise /> : null}
                        {stateApp.showCount ? <Count /> : null}
                    </SafeAreaView>
                </AppContext.Provider>
            </WithSplashScreen>
        </ThemeContext.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        backgroundColor: 'red',
        justifyContent: 'center',
        flex: 1,
    },
});

export default App;