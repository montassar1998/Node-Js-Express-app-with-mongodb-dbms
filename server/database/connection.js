const mongoose = require('mongoose');


const connectDB = async () => {
    try{
        mongoose.connect( 'mongodb://localhost:27017/userdb' );
        /*const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB is connected successfully : ${con.connection.host}`);*/
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB