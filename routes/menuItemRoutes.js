const express = require("express");
const router = express.Router();

const MenuItem = require("../models/MenuItem");

router.post("/", async (req, res) => {
  try {
    const item = req.body;
    const newMenu = new MenuItem(item);

    const responses = await newMenu.save();
    console.log("item saved");
    res.status(200).json(responses);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const updatedMenuData = req.body;

    const response = await MenuItem.findByIdAndUpdate(menuId, updatedMenuData, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(404).json({ error: "menu item not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete('/:id',async(req,res)=>{
  try {
     const menuId= req.params.id; 
     const response = await MenuItem.findByIdAndDelete(menuId)
     if(!response){
      return res.status(404).json({error:'item not found'})
     }
     console.log('deleted successfully')
     res.status(200).json({message:'menuItem deleted successfully'})
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
})
// router.delete('/:id',async(req,res)=>{
//   try{
//  const personId = req.params.id;
//  const response = await Person.findByIdAndDelete(personId)
//  if(!response){
//   return res.status(404).json({error:'Person not found'})
//  }
//  console.log('data deleted')
//  res.status(200).json({message:'person deleted successfully'})
//   }catch(err){
//       console.log(err);
//       res.status(500).json({ error: "Internal Server Error" });
//   }
// })

module.exports = router;
