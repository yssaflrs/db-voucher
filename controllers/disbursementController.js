
const Voucher = require('../models/disbursementModel')

const getVoucher = async(req, res) => {
    const voucher = await Voucher.find()
    res.status(200).json({msg: 'get vouchers', voucher})
}

const createVoucher = async(req, res) => {
    const { no, vn, date, paymentTo, amount, address, descOfPayment, checkNumber, invoiceNo, preparedBy, accounting, printedName} = req.body

    if(!no || !vn || !date || !paymentTo || !amount || !address || !descOfPayment || !checkNumber || !invoiceNo || !preparedBy || !accounting || !printedName){
        return res.status(400).json({ error: 'All fields are required' })
    }
    
    const addVoucher = await Voucher.create({
        no, 
        vn, 
        date, 
        paymentTo, 
        amount, 
        address, 
        descOfPayment, 
        checkNumber, 
        invoiceNo, 
        preparedBy, 
        accounting,
        printedName
    })

    res.status(201).json({msg: 'add voucher', addVoucher})
}

const updateVoucher = async(req, res) => {
    const voucher = await Voucher.findById(req.params.id)
    if(!voucher) {
        return res.status(400).json({ error: 'Voucher not found' })
    }

    const updateVoucher =  await Voucher.findByIdAndUpdate(
        req.params.id,
        req.body,
        {  new: true }
    )


    res.status(200).json({msg: 'update voucher', updateVoucher})
}

const deleteVoucher = async(req, res) => {
    const voucher = await Voucher.findById(req.params.id)
    if(!voucher) {
        return res.status(400).json({ error: 'Voucher not found' })
    }

    await Voucher.deleteOne({_id:voucher})

    res.status(200).json({msg: 'delete voucher'})
}

module.exports = {
    getVoucher,
    createVoucher,
    updateVoucher,
    deleteVoucher
}