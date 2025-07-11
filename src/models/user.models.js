import mongoose , {Schema} from "mongoose";
import jwt from "jsonwebtoken" // jwt is bearer tool
import bcrypt from "bcrypt"

const userSchema =  new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
   
        },
        fullName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String,//cloudinary url
            required: true,

        },
        avatarPublicId: {
            type: String, 
            required: true,
        },
        coverImage: {
            type: String,

        },
        coverImagePublicId: {
            type: String,
            required: true,
        },
        watchHistroy: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type:String
        }


    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password) {
    if (!password || !this.password) {
        throw new Error("Password or hash missing for comparison");
    }
    return await bcrypt.compare(password, this.password)
}
 
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName 
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
    
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);