import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    allCourses: [],
    isEditingCourse: false,
};

const allCoursesSlice = createSlice({
    name: "all_courses",
    initialState,
    reducers: {
        setAllCourses: (state, value) => {
            state.allCourses = value.payload;
        },
        setisEditingCourse: (state, value) => {
            state.isEditingCourse = value.payload;
        },
        addNewCourse: (state, value) => {},
    },
});

export const { setAllCourses, setisEditingCourse, addNewCourse } =
    allCoursesSlice.actions;
export default allCoursesSlice.reducer;
