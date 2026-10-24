import { useState } from "react";

export default function useLocalStorage(initialState, key) {
    const [state, setState] = useState(() => {
        const storageData = localStorage.getItem(key);

        if (!storageData || storageData === 'undefined') {
            return initialState
        };

        try {
            const data = JSON.parse(storageData);
            
            return data;
        } catch (error) {
            console.log('Error parsing JSON', error);
            return initialState
        }

    });

    const setPersistedState = (value) => {
        if (value === undefined) {
            localStorage.removeItem(key);
            setState(initialState)

        } else {
            localStorage.setItem(key, JSON.stringify(value));
            setState(value);
        }
    };

    const removePersistedState = (key) => {
        setState(initialState)
        localStorage.removeItem(key)
    }

    return [
        state,
        setPersistedState,
        removePersistedState
    ];


};