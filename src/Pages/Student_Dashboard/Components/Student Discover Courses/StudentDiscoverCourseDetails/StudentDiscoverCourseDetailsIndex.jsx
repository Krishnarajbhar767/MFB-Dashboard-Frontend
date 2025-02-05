import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { HiPlayCircle } from "react-icons/hi2";
import { IoIosArrowDown, IoMdCloudDownload } from "react-icons/io";
import { MdOutlineImportantDevices, MdPerson } from "react-icons/md";
import { PiCertificate, PiStudentFill } from "react-icons/pi";
import CourseDetailsCourseContentModule from "./CourseDetailsCourseContentModule/CourseDetailsCourseContentModule";
import { BsCurrencyRupee } from "react-icons/bs";
import IconBtn from "../../../../../Common_Components/IconBtn";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useEffect } from "react";
import CourseDetailsCourseIncludesHeadinIcon from "./CourseDetailsCourseIncludesHeadinIcon";
const course = {
    id: "63e5b0f8cdea6b6c453b5f21",
    status: "Draft",
    courseCategory: "Cybersecurity Essentials",
    courseName: "Cybersecurity Fundamentals",
    courseDescription:
        "An introduction to the basics of cybersecurity, including threats, vulnerabilities, and protective measures.",
    coursePrice: "289",
    courseDuration: "6 weeks",
    instructor: "John Doe",
    ratingsAndReviews: {
        rating: 4.5,
        reviews: [
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
            { review: "Best Digital Marketing Institute" },
        ],
    },
    courseModules: [
        {
            moduleName: "Introduction to Cybersecurity",
            id: "63e5b0f8cdea6b6c453b5f22",
            moduleDescription:
                "Learn the core principles of cybersecurity and why it matters.",
            lessons: [
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f7868cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f348cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea64343b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b64343c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0343f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
            ],
            quiz: {
                quizTitle: "Introduction Quiz",
                questions: [
                    {
                        questionText:
                            "What does CIA stand for in cybersecurity?",
                        options: [
                            "Confidentiality, Integrity, Availability",
                            "Cybersecurity, Information, Access",
                            "Control, Integration, Authorization",
                            "None of the above",
                        ],
                        correctOption: 0,
                    },
                ],
            },
        },
        {
            moduleName: "Introduction to Cybersecurity",
            id: "63e5b0f8cdea6b6c453b5f22",
            moduleDescription:
                "Learn the core principles of cybersecurity and why it matters.",
            lessons: [
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
            ],
            quiz: {
                quizTitle: "Introduction Quiz",
                questions: [
                    {
                        questionText:
                            "What does CIA stand for in cybersecurity?",
                        options: [
                            "Confidentiality, Integrity, Availability",
                            "Cybersecurity, Information, Access",
                            "Control, Integration, Authorization",
                            "None of the above",
                        ],
                        correctOption: 0,
                    },
                ],
            },
        },
        {
            moduleName: "Introduction to Cybersecurity",
            id: "63e5b0f8cdea6b6c453b5f22",
            moduleDescription:
                "Learn the core principles of cybersecurity and why it matters.",
            lessons: [
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
            ],
            quiz: {
                quizTitle: "Introduction Quiz",
                questions: [
                    {
                        questionText:
                            "What does CIA stand for in cybersecurity?",
                        options: [
                            "Confidentiality, Integrity, Availability",
                            "Cybersecurity, Information, Access",
                            "Control, Integration, Authorization",
                            "None of the above",
                        ],
                        correctOption: 0,
                    },
                ],
            },
        },
        {
            moduleName: "Introduction to Cybersecurity",
            id: "63e5b0f8cdea6b6c453b5f22",
            moduleDescription:
                "Learn the core principles of cybersecurity and why it matters.",
            lessons: [
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
            ],
            quiz: {
                quizTitle: "Introduction Quiz",
                questions: [
                    {
                        questionText:
                            "What does CIA stand for in cybersecurity?",
                        options: [
                            "Confidentiality, Integrity, Availability",
                            "Cybersecurity, Information, Access",
                            "Control, Integration, Authorization",
                            "None of the above",
                        ],
                        correctOption: 0,
                    },
                ],
            },
        },
        {
            moduleName: "Introduction to Cybersecurity",
            id: "63e5b0f8cdea6b6c453b5f22",
            moduleDescription:
                "Learn the core principles of cybersecurity and why it matters.",
            lessons: [
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
            ],
            quiz: {
                quizTitle: "Introduction Quiz",
                questions: [
                    {
                        questionText:
                            "What does CIA stand for in cybersecurity?",
                        options: [
                            "Confidentiality, Integrity, Availability",
                            "Cybersecurity, Information, Access",
                            "Control, Integration, Authorization",
                            "None of the above",
                        ],
                        correctOption: 0,
                    },
                ],
            },
        },
        {
            moduleName: "Introduction to Cybersecurity",
            id: "63e5b0f8cdea6b6c453b5f22",
            moduleDescription:
                "Learn the core principles of cybersecurity and why it matters.",
            lessons: [
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },

                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
            ],
            quiz: {
                quizTitle: "Introduction Quiz",
                questions: [
                    {
                        questionText:
                            "What does CIA stand for in cybersecurity?",
                        options: [
                            "Confidentiality, Integrity, Availability",
                            "Cybersecurity, Information, Access",
                            "Control, Integration, Authorization",
                            "None of the above",
                        ],
                        correctOption: 0,
                    },
                ],
            },
        },
        {
            moduleName: "Introduction to Cybersecurity",
            id: "63e5b0f8cdea6b6c453b5f22",
            moduleDescription:
                "Learn the core principles of cybersecurity and why it matters.",
            lessons: [
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
            ],
            quiz: {
                quizTitle: "Introduction Quiz",
                questions: [
                    {
                        questionText:
                            "What does CIA stand for in cybersecurity?",
                        options: [
                            "Confidentiality, Integrity, Availability",
                            "Cybersecurity, Information, Access",
                            "Control, Integration, Authorization",
                            "None of the above",
                        ],
                        correctOption: 0,
                    },
                ],
            },
        },
        {
            moduleName: "Introduction to Cybersecurity",
            id: "63e5b0f8cdea6b6c453b5f22",
            moduleDescription:
                "Learn the core principles of cybersecurity and why it matters.",
            lessons: [
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
            ],
            quiz: {
                quizTitle: "Introduction Quiz",
                questions: [
                    {
                        questionText:
                            "What does CIA stand for in cybersecurity?",
                        options: [
                            "Confidentiality, Integrity, Availability",
                            "Cybersecurity, Information, Access",
                            "Control, Integration, Authorization",
                            "None of the above",
                        ],
                        correctOption: 0,
                    },
                ],
            },
        },
        {
            moduleName: "Introduction to Cybersecurity",
            id: "63e5b0f8cdea6b6c453b5f22",
            moduleDescription:
                "Learn the core principles of cybersecurity and why it matters.",
            lessons: [
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
            ],
            quiz: {
                quizTitle: "Introduction Quiz",
                questions: [
                    {
                        questionText:
                            "What does CIA stand for in cybersecurity?",
                        options: [
                            "Confidentiality, Integrity, Availability",
                            "Cybersecurity, Information, Access",
                            "Control, Integration, Authorization",
                            "None of the above",
                        ],
                        correctOption: 0,
                    },
                ],
            },
        },
        {
            moduleName: "Introduction to Cybersecurity",
            id: "63e5b0f8cdea6b6c453b5f22",
            moduleDescription:
                "Learn the core principles of cybersecurity and why it matters.",
            lessons: [
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
            ],
            quiz: {
                quizTitle: "Introduction Quiz",
                questions: [
                    {
                        questionText:
                            "What does CIA stand for in cybersecurity?",
                        options: [
                            "Confidentiality, Integrity, Availability",
                            "Cybersecurity, Information, Access",
                            "Control, Integration, Authorization",
                            "None of the above",
                        ],
                        correctOption: 0,
                    },
                ],
            },
        },
        {
            moduleName: "Introduction to Cybersecurity",
            id: "63e5b0f8cdea6b6c453b5f22",
            moduleDescription:
                "Learn the core principles of cybersecurity and why it matters.",
            lessons: [
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
            ],
            quiz: {
                quizTitle: "Introduction Quiz",
                questions: [
                    {
                        questionText:
                            "What does CIA stand for in cybersecurity?",
                        options: [
                            "Confidentiality, Integrity, Availability",
                            "Cybersecurity, Information, Access",
                            "Control, Integration, Authorization",
                            "None of the above",
                        ],
                        correctOption: 0,
                    },
                ],
            },
        },
        {
            moduleName: "Introduction to Cybersecurity",
            id: "63e5b0f8cdea6b6c453b5f22",
            moduleDescription:
                "Learn the core principles of cybersecurity and why it matters.",
            lessons: [
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
                {
                    lessonName: "What is Cybersecurity?",
                    id: "63e5b0f8cdea6b6c453b5f23",
                    lessonDescription:
                        "A comprehensive overview of cybersecurity basics.",
                    lessonVideo: "https://example.com/video1",
                    lessonDuration: "2:30",
                    resources: [
                        {
                            resourceLink: "https://example.com/pdf1",
                            resourceTitle: "Cybersecurity Basics PDF",
                            resourceFile: {},
                        },
                    ],
                },
            ],
            quiz: {
                quizTitle: "Introduction Quiz",
                questions: [
                    {
                        questionText:
                            "What does CIA stand for in cybersecurity?",
                        options: [
                            "Confidentiality, Integrity, Availability",
                            "Cybersecurity, Information, Access",
                            "Control, Integration, Authorization",
                            "None of the above",
                        ],
                        correctOption: 0,
                    },
                ],
            },
        },
    ],
    enrolledStudents: [1, 2, 3, 4, 5, 6],
    thumbnail:
        "https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg",
    tags: ["Cybersecurity", "Essentials"],
    courseAthor: {
        authorName: "Media FleetBlue",
    },
};

function StudentDiscoverCourseDetailsIndex() {
    const [numberOfLesson, setNumberOfLesson] = useState(0);
    const [isAddedToWishList, setIsAddedToWishList] = useState(false);
    const [numberOfResource, setNumberOfResource] = useState(0);
    //    Function For Get Number OF Lesson
    const getNumberOfLesson = () => {
        let count = 0;
        for (const module of course.courseModules) {
            if (module?.lessons?.length > 0) {
                // for (const module of course.courseModules) {
                //     for (
                //         let index = 0;
                //         index < module?.lessons?.length;
                //         index++
                //     ) {
                //         count++;
                //     }
                //     setNumberOfLesson(count);
                // }
                setNumberOfLesson((prev) => prev + module?.lessons?.length);
            }
        }

        console.log("Printing Number Of Lesson", numberOfLesson);
    };

    // Function for get number of resources
    const getNumberOfResources = () => {
        // loop through every course modules
        for (const module of course.courseModules) {
            // now when you are in course module now goo into lessons
            for (const lesson of module.lessons) {
                // after going into evry lesson check is there is resource is Available or not if resource is Available the add into resources
                if (lesson?.resources.length > 0) {
                    setNumberOfResource(
                        (prev) => prev + lesson?.resources?.length
                    );
                }
            }
        }
    };

    useEffect(() => {
        //   Get Number Of LEsson
        getNumberOfLesson();
        getNumberOfResources();
    }, []);

    const [expandAll, setExpandAll] = useState(false);
    return (
        <div className=" w-full h-auto flex flex-col-reverse md:flex-row md:gap-4  lg:gap-8 lg:pr-4 lg:py-5   text-gray-800 md:justify-center gap-4 ">
            {/* COurse Details Container */}
            <div className="lg:w-[50%] space-y-2 ">
                <h1 className="text-2xl font-semibold capitalize">
                    {course.courseName}
                </h1>
                {/* Course Rating Enrolled Students ,Course Author Name  */}
                <div className="flex items-center gap-6 text-xs font-medium tracking-wide text-gray-700">
                    <p className="flex items-center gap-1">
                        <span className="text-[#FFD700] text-sm">
                            <FaStar></FaStar>
                        </span>{" "}
                        {` ${course.ratingsAndReviews.rating}(${course.ratingsAndReviews.reviews.length} ratings)`}
                    </p>{" "}
                    <p className="flex items-center gap-1">
                        <span className="text-sm">
                            <PiStudentFill />
                        </span>{" "}
                        {course.enrolledStudents.length} students
                    </p>
                    <p className="flex items-center gap-1">
                        <span className="text-sm">
                            <MdPerson />
                        </span>
                        {course.courseAthor.authorName}
                    </p>
                </div>
                {/* Course Description */}
                <h2 className="w-full font-medium text-[13px] text-gray-600">
                    {course.courseDescription}
                </h2>
                {/* Course Contenet */}
                <div>
                    <div className="flex items-center justify-between px-2">
                        <h1 className="text-base font-normal text-gray-900 ">
                            Course content
                        </h1>{" "}
                        <span
                            className="text-xs font-medium text-violet-700 cursor-pointer transition-all duration-300"
                            onClick={() => setExpandAll(!expandAll)}
                        >
                            {expandAll ? "Collapse All" : "Expand All"}
                        </span>
                    </div>

                    <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-1 border-gray-100 rounded-lg mt-1">
                        {course.courseModules.map((module, idx) => {
                            return (
                                <CourseDetailsCourseContentModule
                                    setExpandAll={setExpandAll}
                                    expandAll={expandAll}
                                    module={module}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* Course Thubnail ANd Other Details Container */}
            <div className="lg:w-[30%] h-fit md:p-4 rounded-md md:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:border-1 md:border-gray-100 space-y-2">
                <img
                    src="https://www.cromacampus.com/public/uploads/Blog/2024/09/week_2/web-development-course-syllabus-for-beginners-thumb-66e1713a5097b.webp"
                    alt="course Thumbnail"
                    className="w-full h-44  rounded-md object-cover md:border"
                />
                <h2 className="flex items-center text-2xl font-semibold text-gray-700">
                    <span className="font-bold">
                        <BsCurrencyRupee />
                    </span>
                    {course.coursePrice}{" "}
                    <span className="ml-4 flex items-center text-[15px] font-medium line-through text-gray-600">
                        <span className="font-bold">
                            <BsCurrencyRupee />
                        </span>
                        {Number.parseInt(course.coursePrice) + 100}
                    </span>
                </h2>
                {/* Buy Now Button And WishList Button */}
                <div className="flex items-center gap-3 ">
                    <button className="w-full">
                        <IconBtn color={"#4f43c0"} textColor={"#fff"}>
                            Buy Now
                        </IconBtn>
                    </button>
                    {/* <div className=" shadow-xl  border w-9 h-9 flex items-center justify-center rounded-md">
                        <button
                            onClick={() =>
                                setIsAddedToWishList(!isAddedToWishList)
                            }
                        >
                            {isAddedToWishList ? (
                                <GoHeartFill className="text-red-500 text-xl leading-none" />
                            ) : (
                                <GoHeart className="text-xl leading-none " />
                            )}
                        </button>
                    </div> */}
                </div>
                {/* This Course INclude */}
                <h2 className="text-sm font-medium  text-gray-800">
                    This course includes
                </h2>

                <CourseDetailsCourseIncludesHeadinIcon
                    Icon={"HiPlayCircle"}
                    title={`${numberOfLesson} number of lesson`}
                />
                <CourseDetailsCourseIncludesHeadinIcon
                    Icon={"IoMdCloudDownload"}
                    title={`${numberOfResource} downloadable resources`}
                />

                <CourseDetailsCourseIncludesHeadinIcon
                    Icon={"MdOutlineImportantDevices"}
                    title={"Access On Mobile, Laptop, TV"}
                />

                <CourseDetailsCourseIncludesHeadinIcon
                    Icon={"PiCertificate"}
                    title={"Certificate On completion"}
                />
            </div>
        </div>
    );
}

export default StudentDiscoverCourseDetailsIndex;
