const mongoose = require("mongoose");
const companySchema = new mongoose.Schema({
  name: { type: String, default: "Speshway Solutions Pvt Ltd" },
  registrationNumber: { type: String, default: "U72900TG2022PTC123456" },
  address: { type: String, default: "Hyderabad, Telangana, India" },
  contactEmail: { type: String, default: "info@speshway.com" },
  contactPhone: { type: String, default: "+91-XXXXXXXXXX" },
  isRegistered: { type: Boolean, default: true }
}, { timestamps: true });
module.exports = mongoose.model("Company", companySchema);