import toast from "react-hot-toast";
import { customApiErrorHandler } from "../../../../Utils/Error/cutomApiErrorHandler";
import axiosInstance from "../../../apiConncetor";

import { setAllCourses } from "../../../../Redux/Slices/All_Courses";
import { adminCourseManagementEndpoints } from "../../../EndPoints/Admin/Course Management/adminCourseManagementEndpoints";
import axios from "axios";

export const adminCourseManagementApis = {
    createCourse: async (courseData) => {
        const response = await axiosInstance.post(
            adminCourseManagementEndpoints.createCourse,
            courseData
        );
        return response.data;
    },
    editCourse: async (courseData) => {
        const response = await axiosInstance.patch(
            adminCourseManagementEndpoints.editCourse(courseData.id),
            courseData
        );
        return response.data;
    },
    getCourseDataById: (courseId) =>
        axiosInstance.get(
            adminCourseManagementEndpoints.getCourseDataById(courseId)
        ),
    updateCourseById: (courseId, newCourseData) =>
        axiosInstance.put(
            adminCourseManagementEndpoints.updateCourseById(courseId),
            newCourseData
        ),
    deleteCourseById: (courseId) =>
        axiosInstance.delete(
            adminCourseManagementEndpoints.deleteCourseByIdRoute(courseId)
        ),
    getAllCourses: async () => {
        const response = await axiosInstance.get(
            adminCourseManagementEndpoints.getAllCourseData
        );
        return response.data.data;
    },
    // Module Apis
    createModule: async (courseData) => {
        const response = await axiosInstance.post(
            adminCourseManagementEndpoints.createModule(courseData.courseId),
            courseData
        );
        return response?.data?.data;
    },
    editModule: async (courseId, module) => {
        console.log("Course ID From !1 --->", module);
        const response = await axiosInstance.patch(
            adminCourseManagementEndpoints.editModule(courseId, module.id),
            module
        );
        console.log("Repsonse OF Edit Module ---->", response.data.data);
        return response.data.data;
    },
    deleteModule: async (courseId, moduleId) => {
        const response = await axiosInstance.delete(
            adminCourseManagementEndpoints.deleteModule(courseId, moduleId)
        );
        return response?.data;
    },
    // Lessons
    createLesson: async (lessonData) => {
        const response = await axiosInstance.post(
            adminCourseManagementEndpoints.createLesson(
                lessonData?.courseId,
                lessonData?.moduleId
            ),
            lessonData
        );
        return response.data.cousreData;
    },
    editLesson: async (courseId, lessonId, moduleId, lessonData) => {
        const response = await axiosInstance.patch(
            adminCourseManagementEndpoints.editLesson(
                courseId,
                lessonId,
                moduleId
            ),
            lessonData
        );
        return response.data;
    },
    // Delete Lesson
    deleteLesson: async (courseId, moduleId, lessonId) => {
        const response = await axiosInstance.delete(
            adminCourseManagementEndpoints.deleteLesson(
                courseId,
                moduleId,
                lessonId
            )
        );
        return response.data;
    },
    // Resource
    createResource: async (resourceData) => {
        const response = await axiosInstance.post(
            adminCourseManagementEndpoints.createResource(
                resourceData.courseId,
                resourceData.moduleId,
                resourceData.lessonId
            ),
            resourceData
        );
        return response.data;
    },
    editResource: async (resource, resourceId) => {
        const response = await axiosInstance.patch(
            adminCourseManagementEndpoints.editResource(
                resource.courseId,
                resource.moduleId,
                resource.lessonId,
                resourceId
            ),
            resource
        );
        return response.data;
    },
    deleteResource: async (resourceId, lessonId, moduleId, courseId) => {
        const response = await axiosInstance.delete(
            adminCourseManagementEndpoints.deleteResource(
                resourceId,
                lessonId,
                moduleId,
                courseId
            )
        );
        return response.data;
    },
    // Get ALl Quizzes
    getAllQuizzes: async () => {
        const response = await axiosInstance.get(
            adminCourseManagementEndpoints.getAllQuizzes
        );
        return response.data;
    },
    //Create OR ADD New Quizzes
    createQuize: async (quize) => {
        const res = await axiosInstance.post(
            adminCourseManagementEndpoints.createQuize(quize.courseId),
            quize
        );
        return res.data;
    },
    deleteQuiz: async (quiz) => {
        const res = await axiosInstance.delete(
            adminCourseManagementEndpoints.deleteQuiz(quiz.courseId, quiz._id)
        );
        return res.data;
    },
    // Add Question to Quizee
    addQuestionsToQuize: async (question, courseId, quizeId) => {
        console.log("Printing Question data From ---API ", question);
        const res = await axiosInstance.post(
            adminCourseManagementEndpoints.addQuestionsToQuize(
                courseId,
                quizeId
            ),
            question
        );
        return res.data;
    },
    getQuizById: async (courseId, quizId) => {
        const res = await axiosInstance.get(
            adminCourseManagementEndpoints.getQuizById(courseId, quizId)
        );
        return res.data.data;
    },
    deleteQuestionOfQuiz: async (questionId, courseId, quizId) => {
        const res = await axiosInstance.delete(
            adminCourseManagementEndpoints.deleteQuestionOfQuiz(
                questionId,
                courseId,
                quizId
            )
        );
        return await res.data;
    },
    editQuiz: async (quiz, courseId, quizId) => {
        const res = await axiosInstance.patch(
            adminCourseManagementEndpoints.editQuiz(courseId, quizId),
            quiz
        );
        return res.data;
    },
};
