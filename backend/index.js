const express=require('express');
const mongoose= require('mongoose');
const bodyparser=require('body-parser');
const cookieParser=require('cookie-parser');
const db=require('./config/config').get(process.env.NODE_ENV);

const authController = require('./controllers/authController')
const businessController = require('./controllers/business')
const empController = require('./controllers/employee')
const admin = require('./controllers/admin')

const app = express();
const cors = require('cors')


// app use
app.use(cors());
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(authController);
app.use(businessController);
app.use(empController);
app.use(admin);

// database connection
mongoose.Promise=global.Promise;
mongoose.connect(db.DATABASE,{ useNewUrlParser: true,useUnifiedTopology:true },function(err){
    if(err) console.log(err);
    console.log("database is connected");
});


app.get('/',function(req,res){
    res.status(200).send(`Welcome to login , sign-up api`);
});

// listening port
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
});

