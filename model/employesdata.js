import mongoose from "mongoose";
const employeshema= new mongoose.Schema({
    name:{type:String},
    position:{type:String},
    salary:{type:Number}
})

const employemodel= mongoose.model('employes',employeshema)

/*
const employedata= async()=>{
    try {
        
        // single data insert
        const insertdata = new employemodel({
            name:'Sanaul Ali',
            position:'teacher',
            salary:50000
        })
         const result= await  insertdata.save()
        console.log(result)
        */
       /*
       // multiple data insert 
       const insertdata= new employemodel({
           name:'Karimul Islam',
           position:'manager',
           salary:80000
       })
       const insertdata1= new employemodel({
           name:'Akibul Rahman',
           position:'teacher',
           salary:80000
       })

        const result = await employemodel.insertMany([insertdata,insertdata1])
        console.log(result)
    } catch (error) {
        console.log(error)
        
    }
}

export{ employedata}
*/
export default employemodel