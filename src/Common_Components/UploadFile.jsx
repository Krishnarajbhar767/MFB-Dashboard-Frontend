import React, { useState, useEffect } from "react";
import { Upload, Button, message, Progress, Card, Alert } from "antd";
import {
    UploadOutlined,
    FilePdfOutlined,
    CheckCircleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import {
    createCancelToken,
    uploadFileApi,
} from "../services/apis/upload/uploadApis";

// Styled Components
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
        width: 300px;
        height: 150px;
        font-size: 11px;
        overflow: hidden;
    }
`;

const UploadFile = ({
    allowedType,
    maxFileSizeMB,
    existingFileUrl,
    onUploadComplete,
}) => {
    // State Variables
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(existingFileUrl || "");
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [uploadedFilePath, setUploadedFilePath] = useState(
        existingFileUrl || ""
    );
    const [uploadSuccess, setUploadSuccess] = useState(!!existingFileUrl);

    const isEditMode = !!existingFileUrl;

    // Reset state when existingFileUrl changes
    useEffect(() => {
        if (existingFileUrl) {
            setPreviewUrl(existingFileUrl);
            setUploadedFilePath(existingFileUrl);
            setUploadSuccess(true);
        }
    }, [existingFileUrl]);

    // Clean up previous object URL and set new preview
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

        const fileSizeMB = selectedFile.size / (1024 * 1024);
        if (fileSizeMB > maxFileSizeMB) {
            message.error(`File size exceeds ${maxFileSizeMB} MB.`);
            return false;
        }

        // Revoke the previous object URL if it exists
        if (previewUrl && previewUrl.startsWith("blob:")) {
            URL.revokeObjectURL(previewUrl);
        }

        setFile(selectedFile);
        const newPreviewUrl = URL.createObjectURL(selectedFile);
        setPreviewUrl(newPreviewUrl);
        setUploadedFilePath("");
        setUploadSuccess(false);
        return false;
    };

    // Handle file upload
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
            const response = await uploadFileApi(formData, setProgress, {
                cancelToken: createCancelToken().token,
            });

            setUploadedFilePath(response);
            setPreviewUrl(response);
            setUploadSuccess(true);
            setFile(null);
            message.success("Upload successful!");
            onUploadComplete(response);
        } catch (error) {
            message.error("Upload failed!");
        } finally {
            setUploading(false);
        }
    };

    return (
        <UploadWrapper>
            {/* Upload Button */}
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

            {/* Preview Section */}
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
                            <video
                                key={previewUrl} // Force remount when previewUrl changes
                                controls
                                width="100%"
                                height="100%"
                            >
                                <source src={previewUrl} type="video/mp4" />
                            </video>
                        )}
                        {allowedType === "pdf" && (
                            <FilePdfOutlined className="file-icon" />
                        )}
                    </Card>
                </div>
            )}

            {/* Confirm Upload Button */}
            {file && !uploading && (
                <Button
                    type="primary"
                    style={{ marginTop: "10px" }}
                    onClick={handleUpload}
                >
                    Confirm Upload
                </Button>
            )}

            {/* Upload Progress Bar */}
            {uploading && <Progress percent={progress} />}

            {/* Success Message */}
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
