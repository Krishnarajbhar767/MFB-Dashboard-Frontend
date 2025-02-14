import axiosInstance from "../../apiConncetor";

export const uploadFileApi = async (formData, setProgress) => {
    const response = await axiosInstance.post("/uploadFile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
            const percent = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percent);
        },
    });
    return response.data.data;
};
