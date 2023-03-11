const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            // unique: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: false,
        },
        desc: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        }
    },
    { timestamps: true }
); //qacon sozdat qilinga date ni korsatadi

module.exports = mongoose.model("Todo", todoSchema);