const mongoose = require('mongoose')

const Transschema = mongoose.Schema({
    text : {
        type : String , 
        required : [true,'please enter a name'],
        
    },
    amount :
    {type : Number,
    default : 0,
     required:[true,'please entee a amount']},
    
    createdat : {
        type : Date,
        default : Date.now
    }

})

module.exports = mongoose.model("Transaction",Transschema);