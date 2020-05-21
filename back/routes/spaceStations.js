const {Router} = require('express')
const SpaceStatins=require('../models/SpaceStations')
const {check,validationResult}=require('express-validator')
const config = require('config')
const router = Router()

// GET /spaceStations
router.get('/add', async (req, res) => {
    const n = await SpaceStatins.find();
    await res.json(n);

});

router.post(
    '/add',
    async (req,res)=>{
        try{
            const {id, number, necessity,capacity}=req.body
            const exist = await SpaceStatins.findOne({id:id})
            if(exist)
            {
                return  res.status(400).json({message: "Така станція вже є"})
            }
            const spaceStation = new SpaceStatins({id:id,number:number,necessity:necessity,capacity:capacity})
            await spaceStation.save()
            return res.status(201).json({message:"Станцію створено"})
        }catch (e) {
            await res.status(500).json({message: "Щось пішло не так"})
        }
    })


router.post(
    '/edit',
    async (req,res)=>{
        try{
            const {id, number, necessity,capacity}=req.body
            const exist = await SpaceStatins.findOne({id:id})
            if(exist)
            {
                return  res.status(400).json({message: "Така станція вже є"})
            }
            const spaceStation = new SpaceStatins({id:id,number:number,necessity:necessity,capacity:capacity})
            await spaceStation.save()
            return res.status(201).json({message:"Станцію створено"})
        }catch (e) {
            await res.status(500).json({message: "Щось пішло не так"})
        }
    })
router.post(
    '/find',
    async (req,res)=>{
        try{
            const {id}=req.body
            const exist = await SpaceStatins.findOne({id:id})
            if(exist)
            {
                return  res.status(201).json({message: "Така станція існує"})
            }
            else
            {
                return  res.status(201).json({message: "Станції не існує"})
            }
        }catch (e) {
            await res.status(500).json({message: "Щось пішло не так"})
        }
    })

router.delete(
    '/delete',
    async (req,res)=>{
        try{
            const {id}=req.body
            const exist = await SpaceStatins.findOne({id:id})
            if(exist)
            {
                await SpaceStatins.remove({id:id})
                return  res.status(201).json({message: "Станцію видалено"})
            }
            else
            {
                return res.status(201).json({message: "Станції не існує"})
            }


        }catch (e) {
            await res.status(500).json({message: "Щось пішло не так"})
        }
    })

module.exports = router