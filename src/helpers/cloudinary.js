import { Cloudinary } from "@cloudinary/url-gen";

export const saveCloudinary = async (selectedFile) => {
    const cloudinary = new Cloudinary({
        cloud: {
        cloudName: import.meta.env.VITE_CLOUD_NAME,
        apiKey: import.meta.env.VITE_API_KEY,
        apiSecret: import.meta.env.VITE_API_SECRET,
        },
        url: {
        secure: true,
        },
    });
    const uploadPreset = "zocialbook";
    cloudinary.image(selectedFile, {
        uploadPreset: uploadPreset,
    });
    // Guardar la imagen en cloudinary
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", uploadPreset);
    const data = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData,
    })
    return data.json();

}