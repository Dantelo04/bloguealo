import { MAX_IMAGE_SIZE } from "@/assets/constants";

export const validateImageSize = (base64: string): boolean => {
    const sizeInMB = base64.length / 1024 / 1024;
    return sizeInMB <= MAX_IMAGE_SIZE;
  }