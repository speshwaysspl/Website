const Company = require("../models/Company");
exports.getCompanyInfo = async (req, res) => {
  try {
    let company = await Company.findOne();
    if (!company) { company = await Company.create({}); }
    res.json(company);
  } catch (err) { res.status(500).json({ message: "Server Error" }); }
};