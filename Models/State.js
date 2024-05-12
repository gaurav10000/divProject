const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    name: {
        type: String,
    
    },
    des: {
        type: String,
      
    },
    image:{
        type: String,
        
    },
    place: [{
        name:{
            type: String,
            

        },
        des: {
            type: String,
           
        },
        image:{
            type: String,
            
        },

        rating:{
            type:Number,

        }
        
    }]
});

const State = mongoose.model('State', stateSchema);

module.exports = State;
