const {Schema,model,Types}=require('mongoose')

const schema = new Schema({
id:{type:Number,required:true,unique:true},
number:{type:Number,required:true,unique:false},
necessity:{type:Number,required:true,unique:false},
capacity:{type:Number,required:true,unique:false}
})

module.exports = model('SpaceStations',schema)