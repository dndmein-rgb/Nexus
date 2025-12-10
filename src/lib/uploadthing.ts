import type { OurFileRouter } from "@/app/api/uploadthing/core";

// Try importing from the main entry point
export { generateUploadButton, generateUploadDropzone } from "uploadthing/react";

// Generate the components
import { generateUploadButton, generateUploadDropzone } from "uploadthing/react";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();