import mongoose from "mongoose";

const dataStructure = new mongoose.Schema({
    name : String,
    age : String,
    university : String
})

export const Product =mongoose.models.products || mongoose.model('products' ,dataStructure)