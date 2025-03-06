import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    allQuizzes: [],
    isLoaded: false,
};

const quizesSlice = createSlice({
    name: "quize",
    initialState,
    reducers: {
        addNewQuize: (state, value) => {
            state.allQuizzes.push(value.payload);
        },
        setAllQuizzes: (state, value) => {
            state.allQuizzes = value.payload;
            state.isLoaded = true;
        },
        setQuestionsToQuize: (state, value) => {
            let index = 0;
            state.allQuizzes.some((item, idx) => {
                if (item._id === value.payload.quizeId) {
                    console.log("COndition Got true...", idx);
                    index = idx;
                }
            });

            state.allQuizzes[index].questions = value.payload.questions;
        },
        deleteQuize: (state, value) => {
            const filtredQuizes = state.allQuizzes.filter(
                (item) => item._id !== value.payload
            );
            state.allQuizzes = filtredQuizes;
        },
        setIsQuizModified: (state, value) => {
            state.isLoaded = !value.payload;

            //is quiz modifed then i will recive true and by using ! oprator i was setting is Loaded False, And When isLoaded is false then it Will Fetch All Courses In App Components Through UseEffct
        },
    },
});

export const {
    addNewQuize,
    setAllQuizzes,
    setQuestionsToQuize,
    deleteQuize,
    setIsQuizModified,
} = quizesSlice.actions;
export default quizesSlice.reducer;
