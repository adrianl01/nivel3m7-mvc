import { error } from "console";
import { sequelize } from "../models/conn";
import { Profile } from "../models/profile";
import { cloudinary } from "../cloudinary/sdk";

export async function createProfile(data) {
    console.log("createProfile", data)
    type data = {
        name: string,
        bio: string,
        image: string
    };
    const uploadImage = async (imagePath) => {
        const options = {
            use_filename: false,
            unique_filename: false,
            overwrite: true,
        };
        try {
            const result = await cloudinary.uploader.upload(imagePath, options);
            return result.url;
        } catch (error) {
            console.error(error);
        }
    };
    const uploadImg = await uploadImage(data.image)
    console.log("res:", uploadImg)
    if (data) {
        const profile = await Profile.create({
            name: data.name,
            bio: data.bio,
            image: uploadImg
        })
        return profile
    } else {
        throw error("No data in user-controller")
    }
};

export async function getProfiles() {
    const profiles = await Profile.findAll()
    return profiles
}