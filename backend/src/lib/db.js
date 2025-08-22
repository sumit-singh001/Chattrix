import mongoose from "mongoose";

export const connectDb = async () =>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongooDB connected to ${con.connection.host}`);
        
    } catch(err){
        console.log(err);
        process.exit(1)
    }
}