import { VALID_IMAGE_DOMAINS } from "@/assets/constants";

export const isValidUrl = (url: string) => {
    try {
        const parsedUrl = new URL(url);
    
        return (
          parsedUrl.protocol === 'https:' &&
          VALID_IMAGE_DOMAINS.includes(parsedUrl.hostname)
        );
      } catch (err) {
        console.error(err);
        return false;
      }
};