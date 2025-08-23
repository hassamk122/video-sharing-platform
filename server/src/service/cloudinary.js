import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {

    if (!localFilePath) return null;
    const cloudinaryResponse = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File successfully uploaded on cloudinary.", cloudinaryResponse.url);
    return cloudinaryResponse;

  } catch (error) {

    fs.unlinkSync(localFilePath);// delete locally
    console.log(error);

    return null;
  }
};

export {uploadOnCloudinary};
