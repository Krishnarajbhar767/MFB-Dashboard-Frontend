import axios from "axios"; // Make sure axiosInstance is imported or defined
import Cookies from "js-cookie";
import axiosInstance from "../../apiConncetor";
// Assuming axiosInstance is set up elsewhere, e.g.:
// const axiosInstance = axios.create({ baseURL: "your-base-url" });

export const uploadFileApi = async (formData, setProgress, options = {}) => {
    const { cancelToken } = options; // For cancelling the upload if needed

    // Get the authentication token (from cookies or environment)
    const token =
        Cookies.get("token") ||
        Cookies.get("authenticationToken") ||
        import.meta.env.VITE_TEMP_AUTH_TOKEN;

    // Get the file from formData and validate it
    const file = formData.get("file");
    if (!file) throw new Error("No file provided in FormData");
    const fileSize = file.size; // Size in bytes
    if (fileSize > 10 * 1024 * 1024 * 1024) {
        // 10 GB in bytes
        throw new Error("File exceeds 10GB limit");
    }

    console.log("Starting upload:", file.name, fileSize);

    try {
        // Send the file to the server using Axios
        const response = await axiosInstance.post(
            `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/uploadFile`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data", // Required for file uploads
                    Authorization: `Bearer ${token}`, // Auth token
                    "X-File-Size": fileSize, // Optional: server might use this
                },
                cancelToken, // Allows cancelling the upload
                timeout: 0, // No timeout (lets large files upload fully)
                maxBodyLength: Infinity, // No limit on request size
                onUploadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent; // Bytes uploaded vs total
                    if (total > 0) {
                        // Avoid division by zero
                        let percent = Math.round((loaded * 100) / total);
                        if (percent > 99) percent = 99; // Cap at 99% until done
                        setProgress(percent); // Update progress
                        console.log(`Progress: ${percent}%`);
                    }
                },
            }
        );

        // Upload finished successfully
        setProgress(100); // Set to 100% when server confirms
        console.log("Upload completed:", response.data);
        return response.data.data; // Return server response data
    } catch (error) {
        // Handle cancellation
        if (axios.isCancel(error)) {
            console.log("Upload cancelled:", error.message);
        } else {
            console.error("Upload failed:", error.message);
        }
        throw error; // Pass the error to the caller
    }
};

// Optional: Function to create a cancel token
export const createCancelToken = () => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    return source;
};
