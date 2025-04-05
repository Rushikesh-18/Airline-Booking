const { AirplaneService } = require('../services');

const createAirplane = async (req, res) => {
  try {
    console.log('Request body:', req.body); 

    const airplane = await AirplaneService.createAirplane({
      modelno: req.body.modelNo,
      capacity: req.body.capacity,
      company: req.body.company,
    });

    return res.send({
      data: airplane,
      message: 'Airplane created successfully',
    });
  } catch (error) {
    console.error('Error:', error); // Log error to inspect it
    return res.status(500).send({
      message: "Error creating airplane",
      error: error.message || error, // Ensure error is properly logged
    });
  }
};

module.exports = {
  createAirplane,
};
