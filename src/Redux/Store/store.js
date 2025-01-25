import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/Auth";
import courseReducer from "../Slices/Course_Slice";
import allCoursesReducer from "../Slices/All_Courses";
const store = configureStore({
    reducer: {
        auth: authReducer,
        course: courseReducer,
        allCourses: allCoursesReducer,
    },
});

export default store;
