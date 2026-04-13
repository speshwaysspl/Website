const express = require("express");
const router = express.Router();
const { getCompanyInfo } = require("../controllers/companyController");
router.route("/").get(getCompanyInfo);
module.exports = router;