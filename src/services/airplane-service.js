const  {airplaneRepository}=require('../repositories');


const AirplaneRepository=new airplaneRepository();

const  createAirplane=async(data)=>{
    try{
        console.log("->>>>>>>>>>",data);
        const airplane=await AirplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        throw error;
    }
}

module.exports={
    createAirplane,
}