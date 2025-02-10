import axiosInstance from "../../../apiConncetor";
import { adminCourseManagementEndpoints } from "../../../EndPoints/Admin/Course Management/adminCourseManagementEndPoints";

export const adminCourseManagementApis = {
    createCourse: (courseData) =>
        axiosInstance.post(
            adminCourseManagementEndpoints.createCourse,
            courseData
        ),
    getAllCourse: () =>
        axiosInstance.get(adminCourseManagementEndpoints.getAllCourseData),
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
};
