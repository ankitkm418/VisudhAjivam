var mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const confiq=require('../../config/config').get(process.env.NODE_ENV);
const salt=10;

const businessSchema=mongoose.Schema({
    fullName:{
        type: String,
        // required: true,
        maxlength: 100
    },
    dob:{
        type: Date,
        // required: true,
        // maxlength: 100
    },
    aadhar :{
      type : Number
    },
    phone_number :{
        type : Number
      },
      father :{
        type : String
      },
      mother :{
        type : String
      },
      sex :{
        type : String
      },
      pan :{
        type : String
      },
      qualification :{
        type : String
      },
      doc :{
        type : String
      },
      job :{
        type : String
      },
      address :{
        type : String
      },
      city :{
        type : String
      },
      district :{
        type : String
      },
      state :{
        type : String
      },
      pin :{
        type : Number
      },
      country :{
        type : String
      },
      business :{
        type : String
      },

      gst :{
        type : String
      },

      license :{
        type : String
      },

      document :{
        type : String
      },

      photo :{
        type : String
      },

      official :{
        type : String
      },

    email:{
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password:{
        type:String,
        required: true,
        minlength:8
    },
    password2:{
        type:String,
        required: true,
        minlength:8
    },

    token:{
        type: String
    }
},
{
  timestamps: true
});


businessSchema.pre('save',function(next){
    var user=this;
    
    if(user.isModified('password')){
        bcrypt.genSalt(salt,function(err,salt){
            if(err)return next(err);

            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err);
                user.password=hash;
                user.password2=hash;
                next();
            })

        })
    }
    else{
        next();
    }
});


businessSchema.methods.comparepassword=function(password,cb){
    bcrypt.compare(password,this.password,function(err,isMatch){
        if(err) return cb(next);
        cb(null,isMatch);
    });
}

businessSchema.methods.generateToken=function(cb){
    var user =this;
    var token=jwt.sign(user._id.toHexString(),confiq.SECRET);

    user.token=token;
    user.save(function(err,user){
        if(err) return cb(err);
        cb(null,user);
    })
}

businessSchema.statics.findByToken=function(token,cb){
    var user=this;

    jwt.verify(token,confiq.SECRET,function(err,decode){
        user.findOne({"_id": decode, "token":token},function(err,user){
            if(err) return cb(err);
            cb(null,user);
        })
    })
};

businessSchema.methods.deleteToken=function(token,cb){
    var user=this;

    user.update({$unset : {token :1}},function(err,user){
        if(err) return cb(err);
        cb(null,user);
    })
}

module.exports=mongoose.model('Business',businessSchema);
