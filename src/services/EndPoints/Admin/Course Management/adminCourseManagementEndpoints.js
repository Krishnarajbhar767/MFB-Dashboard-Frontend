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
    editModule: (courseId, moduleId) =>
        `/admin/coursemanagement/course/${courseId}/module/${moduleId}`,
    deleteModule: (courseId, moduleId) =>
        `/admin/coursemanagement/course/${courseId}/module/${moduleId}`,
    // Routes For Lesson
    createLesson: (courseId, moduleId) =>
        `/admin/coursemanagement/${courseId}/module/${moduleId}/lesson`,
    editLesson: (courseId, moduleId, lessonId) =>
        `/admin/coursemanagement/${courseId}/module/${moduleId}/lesson/${lessonId}`,
    deleteLesson: (courseId, moduleId, lessonId) =>
        `/admin/coursemanagement/${courseId}/module/${moduleId}/lesson/${lessonId}`,
    createResource: (courseId, moduleId, lessonId) =>
        `/admin/coursemanagement/${courseId}/module/${moduleId}/lesson/${lessonId}/resource`,
    editResource: (courseId, moduleId, lessonId, resourceId) =>
        `/admin/coursemanagement/${courseId}/module/${moduleId}/lesson/${lessonId}/resource/${resourceId}`,
    deleteResource: (resourceId, lessonId, moduleId, courseId) =>
        `/admin/coursemanagement/${courseId}/module/${moduleId}/lesson/${lessonId}/resource/${resourceId}`,
};
