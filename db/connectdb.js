import mongoose from "mongoose";
const database=async()=>{
   try {
    await mongoose.connect('mongodb://localhost:27017/team')
    console.log('database connected')
   } catch (error) {
       console.log(error)
       
   }
}
export default database