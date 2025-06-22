import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.WASABI_REGION!,
  endpoint: process.env.WASABI_ENDPOINT!,
  credentials: {
    accessKeyId: process.env.WASABI_ACCESS_KEY_ID!,
    secretAccessKey: process.env.WASABI_SECRET_ACCESS_KEY!,
  },
  forcePathStyle: true,
});

export const base64ToBuffer = (base64: string) => {
  const parts = base64.split(";base64,");
  const mime = parts[0].split(":")[1];
  const data = Buffer.from(parts[1], "base64");
  return { buffer: data, mime };
};

export const uploadImageToS3 = async (buffer: Buffer, mime: string, name: string) => {  

  const command = new PutObjectCommand({
    Bucket: process.env.WASABI_BUCKET!,
    Key: name,
    Body: buffer,
    ContentType: mime,
  });

  try {
    const response = await s3.send(command);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
