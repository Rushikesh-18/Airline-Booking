const info= (req,res)=>{
    return res.send({
        "name": "John Doe",
        "age": 30,
        success:true,
    })
}


module.exports={
    info
}