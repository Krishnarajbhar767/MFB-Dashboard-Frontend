export const adminCourseManagementEndpoints = {
    createCourse: "/admin/coursemanagement/create_course",
    editCourse: (courseId) => `/admin/coursemanagement/${courseId}/update`,
    getAllCourseData: "/admin/coursemanagement/all_courses",
    getCourseDataById: (courseId) => `/admin/coursemanagement/${courseId}`,
    deleteCourseByIdRoute: (courseId) =>
        `/admin/coursemanagement/${courseId}/delete`,

    updateCourseById: (courseId) =>
        `/admin/coursemanagement/${courseId}/update`,
    // Routes For Module
    createModule: (courseId) =>
        `/admin/coursemanagement/courses/${courseId}/modules`,
    // Routes For Lesson
    createLesson: (courseId, moduleId) =>
        `/admin/coursemanagement/${courseId}/module/${moduleId}/lesson`,
    createResource: (courseId, moduleId, lessonId) =>
        `/admin/coursemanagement/${courseId}/module/${moduleId}/lesson/${lessonId}/resource`,
};
