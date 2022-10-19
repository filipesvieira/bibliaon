import React from 'react';
import Splash from "./splash";

const WithSplashScreen = ({ children, isAppReady }) => {
    return (
        <>
            {isAppReady && children}

            <Splash isAppReady={isAppReady} />
        </>
    );
}

export default WithSplashScreen;