import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    courseName: "JavaScript Mastery",
    courseDescription:
        "A comprehensive course designed to take you from beginner to advanced in JavaScript, covering ES6+ features, asynchronous programming, and real-world applications.",
    coursePrice: "99.99",
    courseDuration: "12 weeks",
    courseCategory: "Programming",
    courseLevel: "Intermediate",
    courseLanguage: "English",
    courseInstructor: "John Doe",
    courseTag: [],
    courseThumbnail: "https://example",
    courseModules: [
        {
            id: "657e83bdyu76dshe9",
            moduleName: "Introduction to JavaScript",
            moduleDuration: "2 weeks",
            moduleDescription:
                "Learn the fundamentals of JavaScript, including syntax, variables, and control structures.",
            lesson: [
                {
                    lessonName: "JavaScript Basics",
                    lessonDuration: "1 hour",
                    lessonDescription:
                        "An overview of JavaScript syntax, variables, and data types.",
                    lessonVideo: "https://example.com/videos/js-basics",
                    lessonResources: [
                        {
                            resourseUrl:
                                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction",
                            resourseTitle: "JavaScript Guide - MDN",
                        },
                        {
                            resourseUrl:
                                "https://example.com/resources/js-basics-cheatsheet",
                            resourseTitle: "JavaScript Basics Cheat Sheet",
                        },
                    ],
                    quize: [
                        {
                            question:
                                "What is the correct syntax to declare a variable in JavaScript?",
                            options: [
                                {
                                    option: "var myVariable;",
                                    isCorrect: true,
                                },
                                {
                                    option: "variable myVariable;",
                                    isCorrect: false,
                                },
                                {
                                    option: "v myVariable;",
                                    isCorrect: false,
                                },
                                {
                                    option: "let variable myVariable;",
                                    isCorrect: false,
                                },
                            ],
                        },
                        {
                            question:
                                "Which of the following is NOT a valid JavaScript data type?",
                            options: [
                                {
                                    option: "String",
                                    isCorrect: false,
                                },
                                {
                                    option: "Number",
                                    isCorrect: false,
                                },
                                {
                                    option: "Element",
                                    isCorrect: true,
                                },
                                {
                                    option: "Boolean",
                                    isCorrect: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    lessonName: "Control Structures",
                    lessonDuration: "1.5 hours",
                    lessonDescription:
                        "Learn about if-else statements, loops, and switch-case constructs.",
                    lessonVideo:
                        "https://example.com/videos/control-structures",
                    lessonResources: [
                        {
                            resourseUrl:
                                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements",
                            resourseTitle: "JavaScript Statements - MDN",
                        },
                    ],
                    quize: [
                        {
                            question:
                                "What is the output of the following code? \n\n```js\nlet x = 10;\nif (x > 5) {\n  console.log('Hello');\n} else {\n  console.log('Goodbye');\n}\n```",
                            options: [
                                {
                                    option: "Hello",
                                    isCorrect: true,
                                },
                                {
                                    option: "Goodbye",
                                    isCorrect: false,
                                },
                                {
                                    option: "Undefined",
                                    isCorrect: false,
                                },
                                {
                                    option: "Error",
                                    isCorrect: false,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "6578g78487g68769",
            moduleName: "Advanced JavaScript Concepts",
            moduleDuration: "4 weeks",
            moduleDescription:
                "Dive into advanced topics such as closures, asynchronous programming, and the event loop.",
            lesson: [
                {
                    lessonName: "Closures in JavaScript",
                    lessonDuration: "2 hours",
                    lessonDescription:
                        "Understand the concept of closures and how they are used in JavaScript.",
                    lessonVideo: "https://example.com/videos/closures",
                    lessonResources: [
                        {
                            resourseUrl:
                                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
                            resourseTitle: "Closures - MDN",
                        },
                    ],
                    quize: [
                        {
                            question:
                                "Which of the following best describes a closure?",
                            options: [
                                {
                                    option: "A function combined with its lexical environment",
                                    isCorrect: true,
                                },
                                {
                                    option: "A function inside another function",
                                    isCorrect: false,
                                },
                                {
                                    option: "A loop that runs indefinitely",
                                    isCorrect: false,
                                },
                                {
                                    option: "A way to define a function",
                                    isCorrect: false,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setCourse: (state, value) => {},
    },
});

export const { setCourse } = courseSlice.actions;
export default courseSlice.reducer;
