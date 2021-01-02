var mongoose=require('mongoose');

const contactSchema=mongoose.Schema({

    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    email:{
        type: String
    },
    phone_number:{
        type: String
    },
    comment:{
        type: String
    },
    signup_updates:{
        type: Boolean
    },
},
{
  timestamps: true
});



module.exports=mongoose.model('Contact',contactSchema);
