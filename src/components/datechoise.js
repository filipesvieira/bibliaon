import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useAppContext } from '../../hook/useAppState';
import { getData, storeData, clearLocalStorage } from '../../hook/localStorage';
import DatePicker from 'react-native-date-picker';
import moment from "moment";
import AppTheme from '../../hook/themes';
import {
    useThemeContext,
} from '../../hook/useThemeState';

const DateChoise = () => {
    const { stateApp, actionsApp } = useAppContext();
    const { stateTheme, actionsTheme } = useThemeContext();
    // let [choiseDate, setChoiseDate] = useState(moment(choiseDate).format("YYYY-MM-DDTHH:mm:ss"));
    // let [currentDate, setCurrentDate] = useState(moment(new Date()).format("DD/MM/YYYY hh:mm:ss"));
    // const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("🚀 ~ file: countdown.js ~ line 15 ~ Count ~ stateTheme", stateTheme)

        // setInterval(() => {
        //     setCount(prevCount => prevCount + 1);
        //     setCurrentDate(moment(new Date()).format("DD/MM/YYYY hh:mm:ss"));
        // }, 1000);
    }, []);

    const touchButton = async (param) => {
        // var clickedDate = moment(new Date()).format("YYYY-MM-DDTHH:mm:ss");
        // var a = moment(clickedDate);
        // var chosenDate = moment(choiseDate).format("YYYY-MM-DDTHH:mm:ss");
        // var b = moment(chosenDate);
        // var countSeconds = b.diff(a, 'seconds');
        // //SETAR AQUI DENTRO DO LOCALSTORAGE DATACHOISE E DATACLICKED
        // storeData({ clickedDate, chosenDate });
        // await actionsApp.setCount(countSeconds);
        // await actionsApp.setShowCount(!stateApp.showCount);
        // await actionsApp.setShowDateChoise(!stateApp.showDateChoise);
        let stateThemeChange = AppTheme[param];
        actionsTheme.setTheme(stateThemeChange);
        storeData(param);
    }

    return (
        <>
            <View style={stateTheme.container}>
                {/* <DatePicker
                    date={moment(choiseDate, 'YYYY-MM-DDTHH:mm:ss').toDate()}
                    onDateChange={setChoiseDate}
                    style={{ width: 500, height: 100 }}
                    theme={'dark'}
                    mode={'date'}
                />
                <DatePicker
                    date={moment(choiseDate, 'YYYY-MM-DDTHH:mm:ss').toDate()}
                    onDateChange={setChoiseDate}
                    style={{ width: 500, height: 80 }}
                    theme={'dark'}
                    is24Hour
                    mode={'time'}
                /> */}
            </View>
            <View style={[{ width: "100%", alignItems: 'center', marginTop: 10 }]}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => touchButton('light')}
                >
                    <Text style={styles.text}>Change color Light</Text>
                    {/* <Text style={styles.text}>{currentDate}</Text> */}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => touchButton('dark')}
                >
                    <Text style={styles.text}>Change color Dark</Text>
                    {/* <Text style={styles.text}>{currentDate}</Text> */}
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        flex: 0,
    },
    button: {
        marginTop: 10,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "white",
        padding: 5,
        height: 90,
        width: '90%',
        borderRadius: 15,
    },
    text: {
        fontSize: 20,
        color: 'red'
    }
});

export default DateChoise;