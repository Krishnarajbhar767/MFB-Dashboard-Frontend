export const customApiErrorHandler = (error, errorFrom) => {
    // A Console For DeveLoper
    console.log(`Error From ------>${errorFrom} API : Error ------> ${error}`);
    if (error.response) {
        // When the server responds with an error status code
        return error.response.data.message || "Server error occurred.";
    } else if (error.request) {
        // When the request was made but no response was received
        return "No response from server. Please try again later.";
    } else {
        // Error occurred setting up the request
        return error.message || "An unexpected error occurred.";
    }
};
