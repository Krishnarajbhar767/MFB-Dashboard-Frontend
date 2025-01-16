import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/Auth";
import courseReducer from "../Slices/Course_Slice";
const store = configureStore({
    reducer: {
        auth: authReducer,
        course: courseReducer,
    },
});

export default store;
