require('dotenv').config({path:'./config/.env'});
express =require ('express');
const cors=require("cors")
const connect=require("./config/connectDB");
/*const User=require("./models/User");*/
//instanciatiation
const app= express();

// middlewware
app.use(express.json())
app.use(cors())

// Require the router
const authRouter = require('./routes/authDoctor');
const profileRouter=require("./routes/profile");
// Use routes
app.use('/api/auth', authRouter);
app.use("/api/profiles", profileRouter)
// connect to DB
connect()


//Port 
const port=process.env.PORT;
const host=process.env.HOST;
app.listen (port,host, err=>{
       err? console.log(err): console.log(`🚀server is running on ${host} : ${port}`)
  
})
