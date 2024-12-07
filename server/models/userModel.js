import {Schema, model} from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        miniLength: 4,
        maxLength: 30
    },
    email:{
        type: String,
        rquired: true,
        lowercase: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        miniLength: 4
    },
    profilePicture:{
        type: String,
        default: ''
    }
},
{timestamps: true})

export const User  = model('user', userSchema)