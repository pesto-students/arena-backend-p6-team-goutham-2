const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  AddCourt,
  getCourts,
  getCourt,
  UpdateCourt,
} = require("../controllers/court-controller");
//add court
router.post(
  "/addcourt/:owner_id",
  [
    check("courtName", "Enter valid court name").isLength({
      min: 5,
    }),
    check("location", "Enter location").isLength({
      min: 5,
    }),
    check("address", "Enter valid address").isLength({
      min: 5,
    }),
    check("sports", "Enter valid sport name").isLength({
      min: 5,
    }),
    check("facility", "Enter valid facility").isLength({
      min: 5,
    }),
    check("price", "Enter price").isNumeric({
      min: 2,
    }),
    check("owner_id", "Invalid id").isHash({
      min: 2,
    }),
  ],
  AddCourt
);

//update court
router.put("/updatecourt/:owner_id", [], UpdateCourt);


//list all court
router.route("/list").get(getCourts);
//list particular court
router.route("/:owner_id").get(getCourt);
// router.route("/:owner_id/:court_id").get(getOwner);

module.exports = router;
