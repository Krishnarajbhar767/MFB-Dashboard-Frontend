import React, { useState, useEffect } from "react";
import { Upload, Button, message, Progress, Card, Alert } from "antd";
import {
    UploadOutlined,
    FilePdfOutlined,
    VideoCameraOutlined,
    FileImageOutlined,
    CheckCircleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { uploadFileApi } from "../services/apis/upload/uploadApis"; // Import your upload API

// ✅ Styled Components for Modern UI
const UploadWrapper = styled.div`
    .preview-container {
        margin-top: 15px;
        display: flex;
        align-items: center;
    }

    .preview-box {
        width: 300px;
        height: 150px;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f8f9fa;
        border: 2px solid #d9d9d9;
    }

    .file-icon {
        font-size: 40px;
        color: #1890ff;
    }

    .success-message {
        margin-top: 15px;
        color: green;
        font-weight: bold;
    }
`;

const UploadFile = ({
    allowedType,
    maxFileSizeMB,
    existingFileUrl,
    onUploadComplete,
}) => {
    // ✅ State Variables
    const [file, setFile] = useState(null); // Holds selected file
    const [previewUrl, setPreviewUrl] = useState(existingFileUrl || ""); // Preview URL (Existing or New)
    const [uploading, setUploading] = useState(false); // Uploading State
    const [progress, setProgress] = useState(0); // Upload Progress (%)
    const [uploadedFilePath, setUploadedFilePath] = useState(
        existingFileUrl || ""
    ); // Stores the uploaded file URL
    const [uploadSuccess, setUploadSuccess] = useState(!!existingFileUrl); // Upload success state

    // ✅ Detect Edit Mode (If an existing file URL is provided)
    const isEditMode = !!existingFileUrl;

    // ✅ Reset state when `existingFileUrl` changes (e.g., switching courses)
    useEffect(() => {
        if (existingFileUrl) {
            setPreviewUrl(existingFileUrl);
            setUploadedFilePath(existingFileUrl);
            setUploadSuccess(true);
        }
    }, [existingFileUrl]);

    // ✅ Handle File Selection
    const beforeUpload = (selectedFile) => {
        const isValid =
            (allowedType === "image" &&
                selectedFile.type.startsWith("image/")) ||
            (allowedType === "video" &&
                selectedFile.type.startsWith("video/")) ||
            (allowedType === "pdf" && selectedFile.type === "application/pdf");

        if (!isValid) {
            message.error(`Invalid file type! Only ${allowedType} is allowed.`);
            return false;
        }

        // ✅ Check File Size Limit
        const fileSizeMB = selectedFile.size / (1024 * 1024);
        if (fileSizeMB > maxFileSizeMB) {
            message.error(`File size exceeds ${maxFileSizeMB} MB.`);
            return false;
        }

        // ✅ Reset State Before Uploading a New File
        setFile(selectedFile);
        setPreviewUrl(URL.createObjectURL(selectedFile)); // Temporary preview
        setUploadedFilePath("");
        setUploadSuccess(false);
        return false; // Prevent automatic upload
    };

    // ✅ Handle File Upload
    const handleUpload = async () => {
        if (!file) {
            message.warning("No file selected!");
            return;
        }

        setUploading(true);
        setProgress(0);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await uploadFileApi(formData, setProgress); // Upload file using API
            console.log("File Uploaded:", response);

            setUploadedFilePath(response);
            setPreviewUrl(response);
            setUploadSuccess(true);
            setFile(null); // ✅ Clear selected file after upload
            message.success("Upload successful!");
            onUploadComplete(response); // ✅ Pass uploaded URL to parent component
        } catch (error) {
            console.error("Upload Failed:", error);
            message.error("Upload failed!");
        } finally {
            setUploading(false);
        }
    };

    return (
        <UploadWrapper>
            {/* ✅ Upload Button (Always Available in Normal Mode) */}
            {(!uploadSuccess || isEditMode) && (
                <Upload
                    beforeUpload={beforeUpload}
                    showUploadList={false}
                    accept={
                        allowedType === "image"
                            ? "image/*"
                            : allowedType === "video"
                            ? "video/*"
                            : "application/pdf"
                    }
                >
                    <Button icon={<UploadOutlined />} disabled={uploading}>
                        {isEditMode
                            ? `Replace ${allowedType}`
                            : `Select ${allowedType}`}
                    </Button>
                </Upload>
            )}

            {/* ✅ Preview Section */}
            {previewUrl && (
                <div className="preview-container">
                    <Card className="preview-box">
                        {allowedType === "image" && (
                            <img
                                src={previewUrl}
                                alt="Preview"
                                width="100%"
                                height="100%"
                            />
                        )}
                        {allowedType === "video" && (
                            <video controls width="100%" height="100%">
                                <source src={previewUrl} type="video/mp4" />
                            </video>
                        )}
                        {allowedType === "pdf" && (
                            <FilePdfOutlined className="file-icon" />
                        )}
                    </Card>
                </div>
            )}

            {/* ✅ Confirm Upload Button (Only if a new file is selected) */}
            {file && !uploading && (
                <Button
                    type="primary"
                    style={{ marginTop: "10px" }}
                    onClick={handleUpload}
                >
                    Confirm Upload
                </Button>
            )}

            {/* ✅ Upload Progress Bar */}
            {uploading && <Progress percent={progress} />}

            {/* ✅ Success Message (Only Show if a New File is Uploaded) */}
            {uploadSuccess && !file && (
                <Alert
                    message="Upload Successful!"
                    description={`File uploaded: ${uploadedFilePath}`}
                    type="success"
                    showIcon
                    icon={<CheckCircleOutlined />}
                    className="success-message"
                />
            )}
        </UploadWrapper>
    );
};

export default UploadFile;
