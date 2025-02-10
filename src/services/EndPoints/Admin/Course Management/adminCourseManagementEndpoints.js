export const adminCourseManagementEndpoints = {
    createCourse: "/admin/coursemanagement/create_course",
    getAllCourseData: "/admin/coursemanagement/all_courses",
    getCourseDataById: (courseId) => `/admin/coursemanagement/${courseId}`,
    deleteCourseById: (courseId) =>
        `/admin/coursemanagement/${courseId}/delete`,
    updateCourseById: (courseId) =>
        `/admin/coursemanagement/${courseId}/update`,
};
