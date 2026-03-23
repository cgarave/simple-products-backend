import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
    groupName: String,
    itemName: String,
    retailPrice: Number,
    wholesalePrice: Number,
    basePrice: Number,
    id: mongoose.Types.ObjectId,
})

export default mongoose.model('Items', ItemSchema)