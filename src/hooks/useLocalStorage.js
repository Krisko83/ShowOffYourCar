import { useState } from "react";

export default function useLocalStorage(initialState, key) {
    const [state, setState] = useState(() => {
        const storageData = localStorage.getItem(key);

        if (!storageData) {
            return initialState
        };

        const data = JSON.parse(storageData);
        console.log(data);

        return data;
    });

    const setPersistedState = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setState(value);
    };

    const removePersistedState = (key) => {
        setState(null)
        localStorage.removeItem(key)
    }

    return [
        state,
        setPersistedState,
        removePersistedState
    ];


};