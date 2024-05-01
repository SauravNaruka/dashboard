const express = require("express");
const { getAllDefects } = require("../controllers/defectsController");
const router = express.Router();

router.route("/").get(getAllDefects);

module.exports = router;
