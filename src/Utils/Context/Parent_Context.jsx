import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    useReducer,
} from "react";
import axios from "axios";
export const DataContaxt = createContext();

function Parent_Context(props) {
    // auth.......................
    const [authCheck, setAuthCheck] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true);

    return (
        <DataContaxt.Provider
            value={{ authCheck, setAuthCheck, isAdmin, setIsAdmin }}
        >
            {props.children}
        </DataContaxt.Provider>
    );
}

export const useParentContextValue = () => useContext(DataContaxt);

export default Parent_Context;
