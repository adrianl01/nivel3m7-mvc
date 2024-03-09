import { error } from "console";
import { sequelize } from "../models/conn";
import { Profile } from "../models/profile";


export async function createProfile(data) {
    console.log("createProfile", data)
    type data = {
        name: string,
        bio: string,
        image: string
    }
    if (data) {
        const profile = await Profile.create({
            name: data.name,
            bio: data.bio,
            image: data.image
        })

        return profile
    } else {
        throw error("No data in user-controller")
    }
}

export async function getProfiles() {
    const profiles = await Profile.findAll()
    return profiles
}