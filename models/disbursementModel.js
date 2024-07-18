const mongoose = require('mongoose')

const disbursementSchema = new mongoose.Schema({
    no : {
        type: Number
    },
    vn: {
        type: String
    },
    date: {
        type: Date
    },
    paymentTo: {
        type: String
    },
    amount: {
        type: Number
    },
    address:{
        type: String
    },
    descOfPayment: {
        type: String
    },
    checkNumber: {
        type: Number
    },
    invoiceNo: {
        type: Number
    },
    preparedBy: {
        type: String
    },
    accounting: {
        type: String
    },
    printedName: {
        type: String
    }

}, {
    timestamps: true
})


module.exports = mongoose.model('Voucher', disbursementSchema)