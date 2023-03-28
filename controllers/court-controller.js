const Courts = require('../models/court');
//Adding court by court owner
exports.AddCourt = async (req, res) => {
    try {
        const court = new Courts(req.body);
        // New court object will be created.
        console.log(court);
        court.save(court).then((court) => {
            res.json({
                name: court.courtName,
                location: court.location,
                sports: court.sports,
                price: court.price,
                id: court._id,
                time : court.time,
                facility: court.facility
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