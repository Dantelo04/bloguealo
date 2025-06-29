import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.R2_REGION!,
  endpoint: process.env.R2_ENDPOINT!,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
  forcePathStyle: true,
});

export const uploadImageToS3 = async (buffer: Buffer, mime: string, name: string) => {  
  const command = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET!,
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

export const deleteImageFromS3 = async (url: string) => {
  const command = new DeleteObjectCommand({
    Bucket: process.env.R2_BUCKET!,
    Key: url.split("/").pop()!,
  });

  try {
    const response = await s3.send(command);
    console.log(response);
  } catch (error) {
    console.log(error);
    return null;
  }
};
