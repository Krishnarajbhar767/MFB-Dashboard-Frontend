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
};
