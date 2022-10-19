import React, { useEffect, useRef, useState } from "react";
import {
    // ThemeContext,
    // useThemeState,
    AppContext,
    useAppState,
} from '../../hook/useAppState.js';
import { getData, storeData } from '../../hook/localStorage.js';
import {
    StyleSheet,
    View,
    Text,
    Animated
} from 'react-native';

const LOADING_IMAGE = "Loading image";
const FADE_IN_IMAGE = "Fade in image";
const WAIT_FOR_APP_TO_BE_READY = "Wait for app to be ready";
const FADE_OUT = "Fade out";
const HIDDEN = "Hidden";

const Splash = ({ isAppReady }) => {
    const { stateApp, actionsApp } = useAppState();
    const containerOpacity = useRef(new Animated.Value(1)).current;
    const imageOpacity = useRef(new Animated.Value(0)).current;
    const [state, setState] = useState([
        LOADING_IMAGE,
        FADE_IN_IMAGE,
        WAIT_FOR_APP_TO_BE_READY,
        FADE_OUT,
        HIDDEN
    ]);

    useEffect(() => {
        if (state === FADE_IN_IMAGE) {
            Animated.timing(imageOpacity, {
                toValue: 1,
                duration: 500, // Fade in duration
                useNativeDriver: true,
            }).start(() => {
                console.log('first')
                setState(WAIT_FOR_APP_TO_BE_READY);
            });
        }
    }, [imageOpacity, state]);

    useEffect(() => {
        if (state === WAIT_FOR_APP_TO_BE_READY) {
            if (isAppReady) {
                console.log('second')
                setState(FADE_OUT);
            }
        }
    }, [isAppReady, state]);

    useEffect(() => {
        if (state === FADE_OUT) {
            Animated.timing(containerOpacity, {
                toValue: 0,
                duration: 600, // Fade out duration
                delay: 500, // Minimum time the logo will stay visible
                useNativeDriver: true,
            }).start(() => {
                console.log('tirth');
                // actionsApp.setShowDateChoise(true);
                setState(HIDDEN);
            });
        }
    }, [containerOpacity, state]);

    if (state === HIDDEN) return null;

    return (
        <>
            <Animated.View
                collapsable={false}
                style={[style.container, { opacity: containerOpacity }]}
            >
                <Animated.Image
                    source={require("../../assets/splash.png")}
                    fadeDuration={0}
                    onLoad={() => {
                        setState(FADE_IN_IMAGE);
                    }}
                    style={[style.image, { opacity: imageOpacity }]}
                    resizeMode="contain"
                />
            </Animated.View>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#E0B9BB',
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 250,
        height: 250,
    },
});

export default Splash;