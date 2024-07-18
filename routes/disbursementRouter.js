const express = require('express');
const router = express.Router();

const {
    getVoucher,
    createVoucher,
    updateVoucher,
    deleteVoucher
} = require('../controllers/disbursementController')


router.route('/getVoucher').get(getVoucher)
router.route('/createVoucher').post(createVoucher)
router.route('/updateVoucher/:id').patch(updateVoucher)
router.route('/deleteVoucher/:id').delete(deleteVoucher)

module.exports = router