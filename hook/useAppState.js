import { createContext, useState, useCallback, useContext } from 'react';
const AppContext = createContext({});

const useAppState = () => {
    const initialState = {
        filtro: [],
        walletPerson: [],
        count: 0,
        themeChoise: '',
        showCount: false,
        showDateChoise: true,
    };
    const [stateApp, setState] = useState(initialState);
    const actionsApp = useCallback(getActions(setState, [setState]));
    return { stateApp, actionsApp };
};

const useAppContext = () => {
    return useContext(AppContext);
};

const getActions = setState => ({
    // increment: data => {
    //     console.log('increment', data);
    //     setState(stateApp => ({ ...stateApp, count: stateApp.count + data }));
    // },
    // decrement: () => {
    //     setState(stateApp => ({ ...stateApp, count: stateApp.count - 1 }));
    // },
    // addCarrinho(data) {
    //     setState(stateApp => {
    //         stateApp.filtro.push(JSON.stringify(data));
    //         console.log("TCL: addCarrinho -> stateApp", stateApp)
    //         return({ ...stateApp, filtro: stateApp.filtro });
    //     })
    // },
    setDateChoise(data) {
        setState(stateApp => {
            // stateApp.walletPerson.push(data);
            return { ...stateApp, themeChoise: data };
        });
    },
    setCount(data) {
        console.log("🚀 ~ file: useAppState.js ~ line 44 ~ setCount ~ data", data)
        setState(stateApp => {
            // stateApp.walletPerson.push(data);
            return { ...stateApp, count: data };
        });
    },
    setShowCount(data) {
        setState(stateApp => {
            // stateApp.walletPerson.push(data);
            return { ...stateApp, showCount: data };
        });
    },
    setShowDateChoise(data) {
        setState(stateApp => {
            // stateApp.walletPerson.push(data);
            return { ...stateApp, showDateChoise: data };
        });
    },
    // setWallet(data) {
    //     setState(stateApp => {
    //         // stateApp.walletPerson.push(data);
    //         return { ...stateApp, walletPerson: data };
    //     });
    // },
    // editWallet(data) {
    //     setState(stateApp => {
    //         const walletAddress = stateApp.walletPerson;
    //         Object.keys(walletAddress).forEach(elem => {
    //             let editWallet = JSON.parse(walletAddress[elem]);
    //             if (editWallet.walletAddress == data.walletAddress) {
    //                 walletAddress[elem] = JSON.stringify(data);
    //             }
    //         });
    //         stateApp.walletPerson = walletAddress;
    //         return { ...stateApp, walletPerson: stateApp.walletPerson };
    //     });
    // },
    // removeCarrinho(data) {
    //     setState(stateApp => {
    //         const produtos = stateApp.filtro;
    //         Object.keys(produtos).forEach((elem) => {
    //             let removeProduto = JSON.parse(produtos[elem]);
    //             if (removeProduto.id == data.id) {
    //                 produtos.splice(elem, 1);
    //             }
    //         });
    //         stateApp.filtro = produtos;
    //         return({ ...stateApp, filtro: stateApp.filtro });
    //     })
    // },
    // editCarrinho(data) {
    //     setState(stateApp => {
    //         const produtos = stateApp.filtro;
    //         Object.keys(produtos).forEach((elem) => {
    //             let editProduto = JSON.parse(produtos[elem]);
    //             if (editProduto.id == data.id) {
    //                 produtos[elem] = JSON.stringify(data);
    //             }
    //         });
    //         stateApp.filtro = produtos;
    //         return({ ...stateApp, filtro: stateApp.filtro });
    //     })
    // },
});

export { AppContext, useAppState, useAppContext };
