const {Schema,model,Types}=require('mongoose')

const schema = new Schema({
    id:{type:Number,required:true,unique:true},
    planet:{type:Number,required:true,unique:false},
    cargo:{type:Number,required:true,unique:false}
})

module.exports = model('CargoOnPlanets',schema)