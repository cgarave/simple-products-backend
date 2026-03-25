import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    groupName: String,
    itemName: String,
    variation1: {
        variationName: String,
        retailPrice: Number,
        wholesalePrice: Number,
        basePrice: Number,
    },
    variation2: {
        variationName: String,
        retailPrice: Number,
        wholesalePrice: Number,
        basePrice: Number,
    },
    variation3: {
        variationName: String,
        retailPrice: Number,
        wholesalePrice: Number,
        basePrice: Number,
    },
    variation4: {
        variationName: String,
        retailPrice: Number,
        wholesalePrice: Number,
        basePrice: Number,
    },
    variation5: {
        variationName: String,
        retailPrice: Number,
        wholesalePrice: Number,
        basePrice: Number,
    }
})

export default mongoose.model('Items', ItemSchema)