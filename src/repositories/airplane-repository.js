const crudRepository=require('./crud-repository');
const {Airplanes} = require('../models');



class airplaneRepository extends crudRepository{
    constructor(){
        super(Airplanes);
    }
}

module.exports=airplaneRepository;