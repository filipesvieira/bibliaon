import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import {
    useAppContext,
} from '../../hook/useAppState';
import {
    useThemeContext,
} from '../../hook/useThemeState';
import CountDown from 'react-native-countdown-component';
import { clearLocalStorage } from '../../hook/localStorage';

const Count = () => {
    const { stateApp, actionsApp } = useAppContext();
    const { stateTheme, actionsTheme } = useThemeContext();
    const touchButtonReset = async () => {
        await clearLocalStorage();
        actionsApp.setShowCount(!stateApp.showCount);
        actionsApp.setShowDateChoise(!stateApp.showDateChoise);
    }

    return (
        <>
            <CountDown
                size={30}
                until={stateApp.count}
                onFinish={() => alert('Finished')}
                digitStyle={{
                    backgroundColor: '#FFF',
                    borderWidth: 2,
                    borderColor: '#1CC625',
                }}
                digitTxtStyle={{ color: '#1CC625' }}
                timeLabelStyle={{ color: 'white', fontWeight: 'bold' }}
                separatorStyle={{ color: 'white' }}
                timeToShow={['D', 'H', 'M', 'S']}
                timeLabels={{ d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds' }}
                showSeparator
            />
            <View style={[{ width: "100%", alignItems: 'center', marginTop: 10 }]}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={touchButtonReset}
                >
                    <Text style={styles.text}>Reset</Text>
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
        alignItems: 'stretch',
        backgroundColor: '#FF6666',
        justifyContent: 'center',
        flex: 1,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DD4485',
        padding: 10,
    },
});

export default Count;