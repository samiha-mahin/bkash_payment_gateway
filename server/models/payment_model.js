import mongoose from 'mongoose';

const payment = new mongoose.Schema({
    userId: {
        type: Number,
    },
    amount: {
        type: Number,
    },
    trxID: {
        type: String,
    },
    paymentID: {
        type: String,
    },
    date: {
        type: String,
    }
}, { timestamps: true })

export const paymentModel = mongoose.model('payment', payment);