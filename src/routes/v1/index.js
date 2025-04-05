const express= require('express');

const {InfoController, AirplaneController} = require('../../controllers');


const airplaneRoutes=require('./airplane-routes');
const router=express.Router();

router.use('/airplane',AirplaneController.createAirplane);
router.get('/info',InfoController.info);
module.exports=router;