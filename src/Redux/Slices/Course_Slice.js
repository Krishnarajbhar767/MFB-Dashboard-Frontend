import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    course: null,
};

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setCourse: (state, value) => {
            state.course = value.payload;
        },
    },
});

export const { setCourse } = courseSlice.actions;
export default courseSlice.reducer;
