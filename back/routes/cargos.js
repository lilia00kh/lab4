const {Router} = require('express')
const Cargos =require('../models/Cargos')
const {check,validationResult}=require('express-validator')
const config = require('config')
const router = Router()

// GET /cargos
router.get('/add', async (req, res) => {
    const n = await Cargos.find();
    await res.json(n);

});

router.post(
    '/add',
    async (req,res)=>{
        try{
            const {id, code, name, mass}=req.body
            const exist = await Cargos.findOne({id:id})
            if(exist)
            {
                return  res.status(400).json({message: "Такий вантаж вже є"})
            }
            const cargo = new Cargos({id,code,name,mass})
            await cargo.save()
            return res.status(201).json({message:"Вантаж створено"})
        }catch (e) {
            await res.status(500).json({message: "Щось пішло не так"})
        }
    })


router.post(
    '/edit',
    async (req,res)=>{
        try{
            const {id, name, mass,capacity}=req.body
            const exist = await Planets.findOne({id:id})
            if(exist)
            {
                return  res.status(400).json({message: "Така планета вже є"})
            }
            const planet = new Planets({id:id,name:name,mass:mass,capacity:capacity})
            await planet.save()
            return res.status(201).json({message:"Планету створено"})
        }catch (e) {
            await res.status(500).json({message: "Щось пішло не так"})
        }
    })
router.post(
    '/find',
    async (req,res)=>{
        try{
            const {id}=req.body
            const exist = await Cargos.findOne({id:id})
            if(exist)
            {
                return  res.status(201).json({message: "Такий вантаж існує"})
            }
            else
            {
                return  res.status(201).json({message: "Вантажу не існує"})
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
            const exist = await Cargos.findOne({id:id})
            if(exist)
            {
                await Cargos.remove({id:id})
                return res.status(201).json({message: "Вантаж видалено"})
            }
            else
            {
                return res.status(201).json({message: "Вантажу не існує"})
            }
        }catch (e) {
            await res.status(500).json({message: "Щось пішло не так"})
        }
    })


module.exports = router