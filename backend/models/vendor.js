const mongoose = require('mongoose');
const vendorSchema = new mongoose.Schema({
	vendor_id:{type:Number,required:true},
	vendor_company_name: { type: String, required: true },
	vendor_location: { type: String, required:true },
	vendor_rating: { type: String, required: true },
    vendor_name: {type: String, required:true}
});

module.exports = mongoose.model('Vendor', vendorSchema);