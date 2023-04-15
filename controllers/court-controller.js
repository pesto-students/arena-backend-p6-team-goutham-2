const court = require("../models/court");
const Courts = require("../models/court");
const owner = require("../models/owner");
//Adding court by court owner
exports.AddCourt = async (req, res) => {
  try {
    const court = new Courts(req.body);
    // New court object will be created.
    court.save(court).then((court) => {
      res.json({
        courtName: court.courtName,
        ownerId: court.owner_id,
        location: court.location,
        sports: court.sports,
        price: court.price,
        id: court._id,
        facility: court.facility,
      });
    });
  } catch (error) {
    console.log(error, "err");
  }
};
//update court
exports.UpdateCourt = async (req, res) => {
  try {
    const court = await Courts.find({ owner_id: req.params.owner_id });
    // New court object will be created.
    Courts.findOneAndUpdate(
      { owner_id: req.params.owner_id },
      { ...req.body }
    ).then((court) => {
      res.json({
        courtName: court.courtName,
        ownerId: court.owner_id,
        location: court.location,
        sports: court.sports,
        price: court.price,
        slotFrom: court.from,
        slotTo: court.to,
        id: court._id,
        facility: court.facility,
      });
    });
  } catch (error) {
    console.log(error, "err");
  }
};


exports.AddTimeSlot = async (req, res) => {
  try {
    const court = new Courts({ ...req.body, court_id: req.params.court_id });
    // New court slot object will be created.
    court.save(court).then((court) => {
      res.json({
        slotFrom: court.slotFrom,
        slotTo: court.slotTo,
        id: court.court_id,
      });
    });
  } catch (error) {
    console.log(error, "err");
  }
};
exports.getCourts = async (req, res) => {
  try {
    const courts = await Courts.find();
    res.json({ data: courts, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCourt = async (req, res) => {
  try {
    const court = await Courts.find({ owner_id: req.params.owner_id });
    res.json({ data: court, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCourtByLocation = async ({params:{location}}, res) => {
  try {
    const regex = new RegExp(location, "i");
    const court = await Courts.find({ location: regex });
    res.json({ data: court, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOwner = async (req, res) => {
  try {
    const Owner = await court.findById(req.params.owner_id);
    res.json({ data: Owner, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
