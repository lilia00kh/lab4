const {Schema,model,Types}=require('mongoose')

const schema = new Schema({
    id:{type:Number,required:true,unique:true},
    code:{type:Number,required:true,unique:false},
    name:{type:String,required:true,unique:false},
    mass:{type:Number,required:true,unique:false}
})

module.exports = model('Cargos',schema)