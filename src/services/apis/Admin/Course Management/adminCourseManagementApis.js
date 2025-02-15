import toast from "react-hot-toast";
import { customApiErrorHandler } from "../../../../Utils/Error/cutomApiErrorHandler";
import axiosInstance from "../../../apiConncetor";
import { adminCourseManagementEndpoints } from "../../../EndPoints/Admin/Course Management/adminCourseManagementEndPoints";
import { setAllCourses } from "../../../../Redux/Slices/All_Courses";

export const adminCourseManagementApis = {
    createCourse: async (courseData) => {
        const response = await axiosInstance.post(
            adminCourseManagementEndpoints.createCourse,
            courseData
        );
        return response.data;
    },
    // getAllCourse: () =>
    //     axiosInstance.get(adminCourseManagementEndpoints.getAllCourseData),
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
            adminCourseManagementEndpoints.deleteCourseById(courseId)
        ),
    getAllCourses: () =>
        axiosInstance.get(adminCourseManagementEndpoints.getAllCourseData),
};
