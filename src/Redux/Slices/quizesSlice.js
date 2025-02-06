import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    allQuizes: [
        {
            author: "Krishna",
            publishDate: "2025-02-27T13:31",
            course: "8e638fwofuw7hr87y",
            title: "Web Development 2025",
            timeOut: "22",
            questions: [],
        },
    ],
};

const quizesSlice = createSlice({
    name: "quize",
    initialState,
    reducers: {
        addNewQuize: (state, value) => {
            state.allQuizes.push(value.payload);
        },
        setQuizes: (state, value) => {
            state.allQuizes = value.payload;
        },
    },
});

export const { addNewQuize, setQuizes } = quizesSlice.actions;
export default quizesSlice.reducer;
