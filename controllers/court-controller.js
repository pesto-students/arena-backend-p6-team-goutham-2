const Courts = require('../models/court');
//Adding court by court owner
exports.AddCourt = async (req, res) => {
    try {
        const court = new Courts(req.body);
        // New court object will be created.
        console.log(court);
        court.save(court).then((court) => {
            res.json({
                courtName: court.courtName,
                location: court.location,
                sports: court.sports,
                price: court.price,
                id: court._id,
                facility: court.facility
            });
        });
    } catch (error) {
        console.log(error, "err");
    }
};
exports.AddTimeSlot = async (req, res) => {
    try {
        const court = new Courts({...req.body,court_id:req.params.court_id});
        // New court slot object will be created.
        court.save(court).then((court) => {
            res.json({
                slotFrom: court.slotFrom,
                slotTo:court.slotTo,
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
      const court = await Courts.findById(req.params.court_id);
      res.json({ data: court, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };