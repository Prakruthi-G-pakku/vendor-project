const  Vendor = require('../models/vendor');
exports.createvendor = async (req, res) => {
	try {
			const vendor = new Vendor(req.body);
			const savedVendor = await vendor.save();
            console.log("savedvendor: ",savedVendor);
			res.status(201).json(savedVendor);
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	};
exports.getAllvendor = async (req, res) => {
	try {
			const vendor = await Vendor.find();
			res.status(200).json(vendor);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	};
exports.getvendorById =  async (req, res) => {
	try{
			const vendor = await Vendor.findById(req.params.id);
					// const item = await Item.findOne({_id:req.params.id}); 
			res.status(200).json(vendor);
		} catch(error){
			res.status(500).json({ message: error.message });
		}
	};
exports.updatevendor = async (req, res) => {
	try {
			const updatedvendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });//await Item.updateOne({_id:req.params.id},{$set: req.body}) 
			if (!updatedvendor) return res.status(404).json({ message: "Item not found" });
				res.status(200).json(updatedvendor);
			} catch (error) {
				res.status(500).json({ message: error.message });
			}
		};
exports.deletevendor = async (req, res) => {
	try {
			const deletedvendor = await Vendor.findByIdAndDelete(req.params.id);
			if (!deletedvendor) return res.status(404).json({ message: "Item not found" });
				res.status(200).json({ message: "vendor deleted successfully" });
			} catch (error) {
				res.status(500).json({ message: error.message });
			}
		};