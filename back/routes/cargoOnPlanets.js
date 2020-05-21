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




module.exports = router