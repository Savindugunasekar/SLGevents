import {  Schema, model, models } from "mongoose";

const orderSchema = new Schema({
    createdAt:{
        type:Date,
        default:Date.now
    },

    stripeId:{
        type:String,
        required:true,
        unique:true
    },
    totalAmount:{
        type: String,
    },

    event:{
        type:Schema.Types.ObjectId,
        ref:'Event'
    },

    buyer:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})

const Order = models.Order || model('Order',orderSchema)

export default Order