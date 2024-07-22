const express = require("express");
const router = express.Router();
const Person = require("./../models/person");
router.post("/", async (req, res) => {
  try {
    const data = req.body; //assuming the request body contains the person data

    //create a new person document using the Mongoose model
    const newPerson = new Person(data);

    // save the new person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
  // newPerson.name = data.name;
  // newPerson.age = data.age;
  // newPerson.mobile =data.mobile;
  // newPerson.email =data.email;
  // newPerson.address= data.address
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    // Extract the work from the URL parameter
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("fetched response");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put('/:id', async(req,res)=>{
    try{
        const personId = req.params.id;//extract the id from url parameter

        const updatedPersonData =req.body//updated data for the person

        const response =  await Person.findByIdAndUpdate(personId,updatedPersonData,{
           new:true,//return the updated document
           runValidators:true//run Mongoose validation
        })

        if(!response){
            return res.status(404).json({error:'person not found'})
        }
        console.log('data updated')
        res.status(200).json(response)
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.delete('/:id',async(req,res)=>{
    try{
   const personId = req.params.id;
   const response = await Person.findByIdAndDelete(personId)
   if(!response){
    return res.status(404).json({error:'Person not found'})
   }
   console.log('data deleted')
   res.status(200).json({message:'person deleted successfully'})
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;
