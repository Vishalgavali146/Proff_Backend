import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({

    suscriber: {
    type: Schema.Types.ObjectId,//one who is subscribing
    ref: "User"
},
     channel: {
        type: Schema.Types.ObjectId, //one whom 'subscribed is suscibing
        ref: "User"
     },
     
},{
    timestamps: true,
})  




export const subscription = mongoose.model("subscription", subscriptionSchema);