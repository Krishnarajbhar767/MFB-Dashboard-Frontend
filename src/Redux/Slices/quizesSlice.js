import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    allQuizes: [
        {
            author: "Krishna",
            publishDate: "2025-02-27T13:31",
            course: "fdejf93ry8l3p9",
            title: "Web Development 2025",
            timeOut: "22",
            questions: [],
            summary: "",
            _id: "ebeuohweuibeDHENRr3ind389e4",
        },
        {
            author: "Krishna",
            publishDate: "2025-02-27T13:31",
            course: "fdejf93ry8l3p9",
            title: "Web Crash 2025",
            timeOut: "22",
            questions: [],
            summary: "",
            _id: "ebeuohweuiccccxbeDHENRr3ind389e4",
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
        setQuestionsToQuize: (state, value) => {
            let index = 0;
            state.allQuizes.some((item, idx) => {
                if (item._id === value.payload.quizeId) {
                    console.log("COndition Got true...", idx);
                    index = idx;
                }
            });

            state.allQuizes[index].questions = value.payload.questions;
        },
        deleteQuize: (state, value) => {
            const filtredQuizes = state.allQuizes.filter(
                (item) => item._id !== value.payload
            );
            state.allQuizes = filtredQuizes;
        },
    },
});

export const { addNewQuize, setQuizes, setQuestionsToQuize, deleteQuize } =
    quizesSlice.actions;
export default quizesSlice.reducer;
