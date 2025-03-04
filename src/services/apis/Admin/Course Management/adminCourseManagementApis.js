import toast from "react-hot-toast";
import { customApiErrorHandler } from "../../../../Utils/Error/cutomApiErrorHandler";
import axiosInstance from "../../../apiConncetor";

import { setAllCourses } from "../../../../Redux/Slices/All_Courses";
import { adminCourseManagementEndpoints } from "../../../EndPoints/Admin/Course Management/adminCourseManagementEndpoints";

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
};
