import { createSlice } from "@reduxjs/toolkit";
import { adminCourseManagementApis } from "../../services/apis/Admin/Course Management/adminCourseManagementApis";
const initialState = {
    allCourses: [],
    isEditingCourse: false,
    isLoaded: false,
};

const allCoursesSlice = createSlice({
    name: "all_courses",
    initialState,
    reducers: {
        setAllCourses: (state, value) => {
            state.allCourses = value.payload;
            state.isLoaded = true;
        },
        setisEditingCourse: (state, value) => {
            state.isEditingCourse = value.payload;
        },
        addNewCourse: (state, value) => {},
        setIsCoursesModified: (state, value) => {
            state.isLoaded = !value.payload;
            console.log("Is Loaded Chnage", state.isLoaded);
            //is course modifed then i will recive true and by using ! oprator i was setting is Loaded False, And When isLoaded is false then it Will Fetch All Courses In App Components Through UseEffct
        },
    },
});

export const {
    setAllCourses,
    setisEditingCourse,
    addNewCourse,
    setIsCoursesModified,
} = allCoursesSlice.actions;
export default allCoursesSlice.reducer;
