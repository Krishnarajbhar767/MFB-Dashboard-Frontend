import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/Auth";
import courseReducer from "../Slices/Course_Slice";
import allCoursesReducer from "../Slices/All_Courses";
import quizeReducer from "../Slices/quizesSlice";
import categoryReducer from "../Slices/categorySlice";
const store = configureStore({
    reducer: {
        auth: authReducer,
        course: courseReducer,
        allCourses: allCoursesReducer,
        quize: quizeReducer,
        categories: categoryReducer,
    },
});

export default store;
